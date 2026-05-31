import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "End-to-End Azure Data Engineering",
    desc: "Ingest → transform → serve pipeline using ADF, Databricks, Delta Lake and Synapse with medallion architecture.",
    tech: ["ADF", "Databricks", "Delta Lake", "Synapse"],
  },
  {
    name: "Incremental Data Loading Framework",
    desc: "Metadata-driven PySpark framework with CDC and watermarking for terabyte-scale incremental loads.",
    tech: ["PySpark", "Delta Lake", "Python"],
  },
  {
    name: "SCD Type 1 & 2 Implementation",
    desc: "Reusable slowly-changing-dimension utility on Databricks using Spark SQL MERGE and audit columns.",
    tech: ["Databricks", "Spark SQL"],
  },
  {
    name: "Streaming Pipeline",
    desc: "Real-time clickstream processing with Kafka and Spark Structured Streaming into Delta.",
    tech: ["Kafka", "Spark Streaming", "Delta"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work."
      description="A selection of projects from production platforms and personal R&D."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="glass rounded-2xl p-6 group hover:bg-white/[0.06] transition relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 size-40 rounded-full gradient-primary blur-3xl opacity-0 group-hover:opacity-30 transition" />
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-sm">
              <a href="https://github.com" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition">
                <Github className="size-4" /> Code
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition">
                <ExternalLink className="size-4" /> Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}