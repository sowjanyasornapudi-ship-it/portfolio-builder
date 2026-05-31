import { Section } from "./Section";

const groups = [
  { title: "Cloud", items: ["Azure", "Data Factory", "Databricks", "Synapse Analytics", "Data Lake"] },
  { title: "Programming", items: ["Python", "SQL", "PySpark"] },
  { title: "Big Data", items: ["Apache Spark", "Delta Lake", "Databricks"] },
  { title: "Warehousing", items: ["Snowflake", "Synapse"] },
  { title: "DevOps", items: ["Git", "GitHub", "CI/CD", "Azure DevOps"] },
  { title: "Visualization", items: ["Power BI", "Tableau"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern data engineering toolkit."
      description="Tools and platforms I use to ship reliable data products end-to-end."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-6">
            <div className="text-sm font-medium text-primary mb-3">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/90"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}