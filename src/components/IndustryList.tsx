import { industries } from "@/lib/site";

export function IndustryList() {
  return (
    <div className="parties">
      {industries.map((industry) => (
        <article key={industry.title}>
          <h3>{industry.title}</h3>
          <p>{industry.text}</p>
        </article>
      ))}
    </div>
  );
}
