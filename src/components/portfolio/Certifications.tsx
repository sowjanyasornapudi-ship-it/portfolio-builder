import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "Microsoft Certified: Azure Data Engineer Associate", org: "Microsoft", id: "DP-203" },
  { name: "Databricks Certified Data Engineer Associate", org: "Databricks" },
  { name: "SnowPro Core Certification", org: "Snowflake" },
  { name: "Azure Fundamentals", org: "Microsoft", id: "AZ-900" },
  { name: "Microsoft Certified: Power BI Data Analyst", org: "Microsoft", id: "PL-300" },
  { name: "Databricks Lakehouse Fundamentals", org: "Databricks" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuously credentialed.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.name} className="glass rounded-2xl p-5 flex gap-4 items-start">
            <div className="size-10 rounded-lg gradient-primary grid place-items-center shrink-0">
              <Award className="size-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-medium text-sm leading-snug">{c.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {c.org}
                {c.id ? ` · ${c.id}` : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}