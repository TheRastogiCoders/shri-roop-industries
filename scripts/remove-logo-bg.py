from PIL import Image
import math
from collections import deque

src = r"c:\Users\vasur\Desktop\Shree-roop-industries\public\images\logo-source.jpg"
out = r"c:\Users\vasur\Desktop\Shree-roop-industries\public\images\logo.png"

im = Image.open(src).convert("RGB")
w, h = im.size
px = im.load()


def paper_score(r, g, b):
    refs = [
        (236, 230, 218),
        (232, 224, 211),
        (239, 231, 220),
        (228, 220, 206),
        (242, 236, 226),
        (245, 240, 230),
    ]
    dist = min(
        math.sqrt((r - a) ** 2 + (g - b_) ** 2 + (b - c) ** 2) for a, b_, c in refs
    )
    mx, mn = max(r, g, b), min(r, g, b)
    sat = ((mx - mn) / mx) if mx else 0.0
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    copperish = (r - b) > 28 and (r - g) > 5 and sat > 0.12 and 70 < lum < 215
    if copperish:
        return 0.0
    if lum < 170:
        return 0.0
    if dist < 22:
        score = 1.0
    elif dist < 48:
        score = 1.0 - (dist - 22) / 26
    elif lum > 200 and sat < 0.12:
        score = min(1.0, (lum - 200) / 35 + (0.12 - sat) * 5)
    elif lum > 210 and sat < 0.16 and dist < 60:
        score = 0.7
    else:
        score = 0.0
    return max(0.0, min(1.0, score))


strong = [[paper_score(*px[x, y]) >= 0.68 for x in range(w)] for y in range(h)]
visited = [[False] * w for _ in range(h)]
q = deque()


def try_seed(x, y):
    if 0 <= x < w and 0 <= y < h and strong[y][x] and not visited[y][x]:
        visited[y][x] = True
        q.append((x, y))


for x in range(w):
    try_seed(x, 0)
    try_seed(x, h - 1)
for y in range(h):
    try_seed(0, y)
    try_seed(w - 1, y)

for x in range(w):
    for y in range(0, 6):
        try_seed(x, y)
        try_seed(x, h - 1 - y)
for y in range(h):
    for x in range(0, 6):
        try_seed(x, y)
        try_seed(w - 1 - x, y)

while q:
    x, y = q.popleft()
    for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
            if paper_score(*px[nx, ny]) >= 0.38:
                visited[ny][nx] = True
                q.append((nx, ny))

changed = True
passes = 0
while changed and passes < 5:
    changed = False
    passes += 1
    for y in range(h):
        for x in range(w):
            if visited[y][x]:
                continue
            r, g, b = px[x, y]
            s = paper_score(r, g, b)
            if s < 0.5:
                continue
            nbg = 0
            for ny in range(max(0, y - 2), min(h, y + 3)):
                for nx in range(max(0, x - 2), min(w, x + 3)):
                    if visited[ny][nx]:
                        nbg += 1
            if nbg >= 7 or s > 0.88:
                visited[y][x] = True
                changed = True

out_im = Image.new("RGBA", (w, h))
out_px = out_im.load()
bg_count = 0
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        if visited[y][x]:
            out_px[x, y] = (r, g, b, 0)
            bg_count += 1
            continue

        s = paper_score(r, g, b)
        near_bg = False
        for ny in range(max(0, y - 1), min(h, y + 2)):
            for nx in range(max(0, x - 1), min(w, x + 2)):
                if visited[ny][nx]:
                    near_bg = True
                    break
            if near_bg:
                break

        if near_bg and s > 0.2:
            alpha = int(round(255 * (1.0 - min(1.0, s * 1.05))))
        else:
            alpha = 255
        out_px[x, y] = (r, g, b, max(0, min(255, alpha)))

bbox = out_im.getbbox()
if bbox:
    pad = 6
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w, right + pad)
    bottom = min(h, bottom + pad)
    out_im = out_im.crop((left, top, right, bottom))

out_im.save(out, "PNG", optimize=True)
print("saved", out, out_im.size, "bg_frac", round(bg_count / (w * h), 3))
