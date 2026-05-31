import { Section } from "./Section";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something with data."
      description="Have an opportunity or just want to chat about the data stack? Drop a message."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="glass rounded-2xl p-6 space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "sowjanya@example.com" },
            { Icon: MapPin, label: "Location", value: "Hyderabad, India" },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sowjanya" },
            { Icon: Github, label: "GitHub", value: "github.com/sowjanya" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-3 items-center">
              <div className="size-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                <Icon className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm">{value}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-2xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" name="name" />
            <Input label="Email" name="email" type="email" />
          </div>
          <Input label="Subject" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl gradient-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            {sent ? "Thanks — I'll be in touch!" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}