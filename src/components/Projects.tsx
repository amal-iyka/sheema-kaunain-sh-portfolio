import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import movieProject from '/uploads/7d31210f-1af0-475c-ad05-150fcf23aee5.png';
import churnProject from '/uploads/2557668a-a4d5-412d-a058-3d6dce1f84b0.png';
import airlineProject from '/uploads/74077438-4cd8-4be9-b488-502aaec4457d.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Movie Recommendation System',
      description: 'Python-based recommendation app using cosine similarity to suggest movies based on user preferences. Features interactive UI and filtering capabilities.',
      image: movieProject,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      period: 'Feb 2025 - Mar 2025',
      github: 'https://github.com/amal-iyka/Movie-recommendation-app',
      demo: 'https://movie-recommendation-app-4jyaqy8am6tufoea2i5wld.streamlit.app/',
      features: [
        'Cosine similarity algorithm',
        'Interactive Streamlit UI',
        'User preference filtering',
        'Real-time recommendations'
      ]
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description: 'ML pipeline to predict customer churn using Logistic Regression and Decision Trees with comprehensive data visualization.',
      image: churnProject,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib'],
      period: 'Jan 2025 - Feb 2025',
      github: 'https://github.com/amal-iyka/Predicting-Customer-churn',
      demo: 'https://github.com/amal-iyka/Predicting-Customer-churn',
      features: [
        'Multiple ML algorithms',
        'Data visualization with Seaborn',
        'Feature engineering',
        'Model performance comparison'
      ]
    },
    {
      id: 3,
      title: 'Airline Management System',
      description: 'Java-based console application for managing flights, bookings, and passengers with file handling for data persistence.',
      image: airlineProject,
      technologies: ['Java', 'OOP', 'File Handling', 'Console UI'],
      period: 'December 2025',
      github: 'https://github.com/amal-iyka',
      demo: 'https://github.com/amal-iyka',
      features: [
        'Flight management',
        'Booking system',
        'Passenger tracking',
        'Data persistence'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills through real-world applications, 
            from machine learning to web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass hover-lift group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {project.period}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-3 w-full">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Projects Link */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/amal-iyka" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;