import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Users } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive web interfaces using HTML, CSS, JavaScript, TypeScript, and React.js',
      stats: '15+ Projects'
    },
    {
      icon: Database,
      title: 'Backend & Data',
      description: 'Building robust backends with Python and MySQL, utilizing Pandas and data analysis techniques',
      stats: '5+ Systems'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing ML models for prediction and recommendation systems using Scikit-learn',
      stats: '3+ ML Models'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in teams with strong communication and adaptability skills',
      stats: '3+ Teams'
    }
  ];

  const achievements = [
    { number: '8.95', label: 'CGPA' },
    { number: '6+', label: 'Months Experience' },
    { number: '15+', label: 'Projects' },
    { number: '100%', label: 'Commitment' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science Engineer from Tirupattur, Tamil Nadu, dedicated to 
            creating innovative solutions and continuously learning new technologies.
          </p>
        </div>

        {/* Education & Experience Summary */}
        <div className="mb-16">
          <Card className="glass hover-lift">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Bachelor of Engineering (CSE)</h4>
                      <p className="text-muted-foreground">Priyadarshini Engineering College</p>
                      <p className="text-sm text-primary">CGPA: 8.95 (Nov 2023 - July 2025)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Higher Secondary Education</h4>
                      <p className="text-muted-foreground">Al-Ameen Matric.Hr.Sec.School</p>
                      <p className="text-sm text-primary">Score: 80% (Jun 2020 - Apr 2022)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Web Development Intern</h4>
                      <p className="text-muted-foreground">VaultOfCodes (Aug - Sep 2025)</p>
                      <p className="text-sm">Code optimization and debugging</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Web Development Intern</h4>
                      <p className="text-muted-foreground">ShadowFox Inc. (Jan - Feb 2025)</p>
                      <p className="text-sm">Performance enhancement and collaboration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cybersecurity Intern</h4>
                      <p className="text-muted-foreground">Tata Cyber Security (March 2025)</p>
                      <p className="text-sm">Threat detection and penetration testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-primary font-bold text-lg">{service.stats}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;