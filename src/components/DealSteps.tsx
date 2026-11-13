import { dealSteps } from "@/lib/site";

export function DealSteps() {
  return (
    <ol className="steps">
      {dealSteps.map((step) => (
        <li key={step.number}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
