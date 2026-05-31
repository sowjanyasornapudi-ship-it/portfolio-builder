import { Section } from "./Section";
import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE, PHONE_HREF } from "./contact-info";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject required").max(150),
  message: z.string().trim().min(1, "Message required").max(1000),
});

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
            { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { Icon: Phone, label: "Phone", value: PHONE, href: PHONE_HREF },
            { Icon: MapPin, label: "Location", value: LOCATION },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sowjanya", href: LINKEDIN_URL },
            { Icon: Github, label: "GitHub", value: "sowjanyasornapudi-ship-it", href: GITHUB_URL },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href ?? "#"}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex gap-3 items-center group"
            >
              <div className="size-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
                <Icon className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="text-sm group-hover:text-primary transition-colors break-all">{value}</div>
              </div>
            </a>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const parsed = schema.safeParse({
              name: fd.get("name"),
              email: fd.get("email"),
              subject: fd.get("subject"),
              message: fd.get("message"),
            });
            if (!parsed.success) {
              toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
              return;
            }
            setSent(true);
            toast.success("Message sent — I'll be in touch soon!");
            (e.currentTarget as HTMLFormElement).reset();
            setTimeout(() => setSent(false), 4000);
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
              name="message"
              required
              rows={5}
              maxLength={1000}
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