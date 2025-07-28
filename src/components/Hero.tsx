import { Button } from '@/components/ui/button';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import profileImage from '/uploads/8691cb76-87f3-4e46-bed9-6906ed18c09c.png';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1Yj0LIUEDZj7AWCw_utTxiJxPfaFXtyt6/view?usp=drive_link', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">Sheema Kaunain</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                  Computer Science Engineer
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Results-oriented engineer with expertise in{' '}
                <span className="text-primary font-semibold">Python</span>,{' '}
                <span className="text-primary font-semibold">Java</span>, and{' '}
                <span className="text-primary font-semibold">Machine Learning</span>. 
                Passionate about building innovative solutions and driving technical excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full glow hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleDownloadResume}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-110 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <img
                  src={profileImage}
                  alt="Sheema Kaunain"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/50 shadow-2xl hover:scale-105 transition-transform duration-500 float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;