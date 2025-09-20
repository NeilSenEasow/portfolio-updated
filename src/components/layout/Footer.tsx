import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © 2025 DC Portfolio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-neon transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-neon transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@dc.com"
              className="p-2 text-muted-foreground hover:text-neon transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;