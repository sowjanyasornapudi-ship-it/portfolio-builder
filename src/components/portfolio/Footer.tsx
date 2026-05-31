import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sowjanya Sornapudi · Built with care.
        </div>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Mail, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="size-9 grid place-items-center rounded-lg glass hover:text-foreground text-muted-foreground transition"
              aria-label="social"
            >
              <Icon className="size-4" />
            </a>
          ))}
          <a
            href="#top"
            className="size-9 grid place-items-center rounded-lg gradient-primary text-primary-foreground ml-2"
            aria-label="back to top"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}