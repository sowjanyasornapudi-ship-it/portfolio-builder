import { Section } from "./Section";
import { User, Briefcase, Cpu, Target } from "lucide-react";

const items = [
  { Icon: User, title: "Who I am", body: "Sowjanya Sornapudi — engineer turned data specialist with a love for clean, reliable systems." },
  { Icon: Briefcase, title: "What I do", body: "Training Coordinator & Azure Data Engineer — designing platforms and upskilling teams." },
  { Icon: Cpu, title: "Technologies", body: "Azure, Databricks, Snowflake, Spark, Python and SQL — the modern data stack." },
  { Icon: Target, title: "Problems I solve", body: "Brittle ETL, slow analytics, ungoverned data — replaced with scalable lakehouse architectures." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Turning raw data into reliable decisions."
      description="I build cloud-native data platforms that scale — and I love teaching others how it all fits together."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition group"
          >
            <div className="size-10 rounded-lg gradient-primary grid place-items-center mb-4 group-hover:glow transition">
              <Icon className="size-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}