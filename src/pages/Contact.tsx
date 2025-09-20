import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/profile-image.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20">
      {/* Contact Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-reveal mb-6">
            Let's start a project together
          </h1>
          <p className="text-xl text-muted-foreground slide-up max-w-2xl">
            Have an idea you'd like to bring to life? I'd love to hear about it. 
            Send me a message and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-border focus:border-neon"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-border focus:border-neon"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-border focus:border-neon resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" variant="neon" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info Panel */}
            <div className="slide-up">
              <div className="bg-card border border-border rounded-lg p-8 h-fit">
                {/* Profile Section */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={profileImage} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">DC</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-neon rounded-full mr-2 pulse-dot"></div>
                      <span className="text-sm text-neon">Available for work</span>
                    </div>
                  </div>
                </div>

                {/* Personal Message */}
                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to work on new projects and collaborate with 
                    passionate individuals and teams. Whether you're looking to build 
                    a new product from scratch or improve an existing one, I'm here to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-neon mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hello@dc.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-neon mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-neon mr-4" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-neon hover:bg-neon/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-neon hover:bg-neon/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-neon hover:bg-neon/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and see how we can work together to create 
              something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Schedule a Call
              </Button>
              <Button variant="neon-outline" size="lg">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;