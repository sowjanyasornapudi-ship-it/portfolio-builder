import profile from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, Twitter, FileDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text">Sowjanya Sornapudi</span>
            <br />I build scalable
            <br />
            <span className="gradient-text">cloud data platforms.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Azure Data Engineer · Databricks Engineer · Data Analytics Professional.
            I automate pipelines and transform raw data into business insights.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              View Projects <ArrowRight className="size-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-medium hover:bg-white/10 transition"
            >
              <FileDown className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:hello@example.com" },
              { Icon: Twitter, href: "https://twitter.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="size-10 grid place-items-center rounded-lg glass hover:text-foreground hover:glow transition"
                aria-label="social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative justify-self-center md:justify-self-end animate-float">
          <div className="absolute -inset-6 rounded-full gradient-primary blur-3xl opacity-30" />
          <div className="relative size-64 md:size-80 rounded-3xl overflow-hidden glass p-1.5">
            <img
              src={profile}
              alt="Sowjanya Sornapudi"
              width={768}
              height={768}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}