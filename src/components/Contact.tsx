import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_msye7zy';
  const EMAILJS_TEMPLATE_ID = 'template_luon57l';
  const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_3a46l9w';
  const EMAILJS_PUBLIC_KEY = 'O1-U9o4tdRPuCBtQ5';

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sheemakaunainsh@gmail.com",
      href: "mailto:sheemakaunainsh@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9342731307",
      href: "tel:+919342731307"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tirupattur, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/amal-iyka", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sheema-kaunain/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/sheema", label: "Twitter" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Sheema',
          to_email: 'sheemakaunainsh@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        // Send auto-reply email to the sender
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              to_name: `${formData.firstName} ${formData.lastName}`,
              to_email: formData.email,
              from_name: 'Sheema'
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (autoReplyError) {
          console.error('Auto-reply failed:', autoReplyError);
          // Don't show error to user as main email was successful
        }

        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 bg-purple-500/10 border-purple-500/30 text-purple-300 backdrop-blur-sm">Get In Touch</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 animate-fade-in group">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">First Name</label>
                    <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your First Name" 
                    className="bg-black/60 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                      required 
                  />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your Last Name" 
                      className="bg-black/60 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">Email</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="bg-black/60 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="bg-black/60 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..." 
                    className="bg-black/60 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 resize-none"
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 text-white border-0 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] transition-all duration-500 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-black/40 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 hover:shadow-glow-primary transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.title}
                        </p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-black/40 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-black/60 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-black/40 backdrop-blur-xl border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Availability</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Available for new projects</span>
                </div>
                <p className="text-sm text-gray-300">
                  I typically respond to emails within 24 hours. Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;