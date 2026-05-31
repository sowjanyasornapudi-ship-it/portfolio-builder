import { Section } from "./Section";

const jobs = [
  {
    role: "Azure Data Engineer",
    company: "Confidential · Hyderabad",
    period: "2023 — Present",
    points: [
      "Built medallion-architecture lakehouse on Azure Databricks + Delta Lake serving 50+ analysts.",
      "Automated ingestion from 12 sources via ADF with parameterized pipelines and CI/CD.",
      "Reduced report latency by 65% by tuning Spark jobs and Synapse dedicated pools.",
    ],
    tech: ["ADF", "Databricks", "Delta", "Synapse", "PySpark"],
  },
  {
    role: "Training Coordinator & Data Engineer",
    company: "Tech Academy",
    period: "2021 — 2023",
    points: [
      "Designed Azure DE curriculum and mentored 200+ learners into cloud data roles.",
      "Delivered live cohorts on Databricks, SQL and Python with hands-on labs.",
    ],
    tech: ["Azure", "SQL", "Python", "Power BI"],
  },
  {
    role: "Data Analyst",
    company: "Earlier roles",
    period: "2019 — 2021",
    points: [
      "Built operational dashboards in Power BI driving weekly leadership reviews.",
      "Owned SQL data models powering finance and ops reporting.",
    ],
    tech: ["SQL", "Power BI", "Excel"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of building with data."
    >
      <ol className="relative border-l border-white/10 ml-3 space-y-8">
        {jobs.map((j) => (
          <li key={j.role} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 size-3 rounded-full gradient-primary ring-4 ring-background" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-semibold text-lg">{j.role}</h3>
                <span className="text-xs text-muted-foreground">{j.period}</span>
              </div>
              <div className="text-sm text-primary mb-3">{j.company}</div>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-4">
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {j.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}