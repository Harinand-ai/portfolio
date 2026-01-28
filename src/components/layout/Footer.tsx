import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { SocialLink } from "@/components/SocialLink";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              <SocialLink href="https://github.com" icon={Github} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://instagram.com" icon={Instagram} label="Instagram" />
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>by Harinand Sreeshan</span>
            </div>

            {/* Year */}
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
