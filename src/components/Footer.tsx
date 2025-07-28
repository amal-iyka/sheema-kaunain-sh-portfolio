import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/amal-iyka',
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/sheema-kaunain/',
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:sheemakaunainsh@gmail.com',
      label: 'Email' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sheema Kaunain</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science Engineer passionate about creating innovative solutions 
              with Python, Java, and Machine Learning. Let's build the future together.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/20 hover:text-primary"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300">
            <h4 className="text-lg font-semibold text-primary glow-text">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:sheemakaunainsh@gmail.com"
                  className="hover:text-primary transition-colors hover:glow-text"
                >
                  sheemakaunainsh@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:+919342731307"
                  className="hover:text-primary transition-colors hover:glow-text"
                >
                  +91 9342731307
                </a>
              </p>
              <p>
                <strong>Location:</strong> Tirupattur, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Sheema Kaunain. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                Back to Top ↑
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;