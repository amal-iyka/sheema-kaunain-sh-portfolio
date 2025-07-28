import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Brain, 
  Globe, 
  GitBranch, 
  Wrench,
  Users,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 75 },
        { name: 'React.js', level: 70 },
        { name: 'Responsive Design', level: 88 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'API Development', level: 75 },
        { name: 'Data Structures', level: 90 }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: [
        { name: 'Pandas', level: 88 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Machine Learning', level: 82 },
        { name: 'Data Analysis', level: 87 },
        { name: 'Jupyter Notebook', level: 90 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Streamlit', level: 80 },
        { name: 'Vite', level: 75 },
        { name: 'File Handling', level: 88 },
        { name: 'Debugging', level: 92 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Quick Learning', icon: Brain },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: Globe },
    { name: 'Adaptability', icon: GitBranch },
    { name: 'Critical Thinking', icon: Lightbulb }
  ];

  const certifications = [
    'Tata Cyber Security Virtual Internship',
    'Web Development - VaultOfCodes',
    'Web Development - ShadowFox Inc.',
    'Computer Science Engineering Degree'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities 
            gained through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="glass hover-lift group text-center">
                <CardContent className="p-4">
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass hover-lift">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Experience & Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass hover-lift">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="secondary" className="justify-center p-2">
                  Algorithm Design
                </Badge>
                <Badge variant="secondary" className="justify-center p-2">
                  Code Optimization
                </Badge>
                <Badge variant="secondary" className="justify-center p-2">
                  System Design
                </Badge>
                <Badge variant="secondary" className="justify-center p-2">
                  Performance Tuning
                </Badge>
                <Badge variant="secondary" className="justify-center p-2">
                  Data Visualization
                </Badge>
                <Badge variant="secondary" className="justify-center p-2">
                  API Integration
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;