import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectBanking from '@/assets/project-banking.jpg';
import projectTasks from '@/assets/project-tasks.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Development', 'Design'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Development',
      year: '2024',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.',
      image: projectEcommerce,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Design',
      year: '2024',
      description: 'Complete UI/UX design for a modern mobile banking application.',
      image: projectBanking,
      technologies: ['Figma', 'Prototyping', 'User Research'],
      behance: 'https://behance.com',
    },
    {
      id: 3,
      title: 'Task Management System',
      category: 'Development',
      year: '2023',
      description: 'Collaborative project management tool with real-time updates.',
      image: projectTasks,
      technologies: ['Next.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      category: 'Design',
      year: '2023',
      description: 'Complete brand identity and website design for a tech startup.',
      image: projectEcommerce,
      technologies: ['Adobe Creative Suite', 'Branding'],
      behance: 'https://behance.com',
    },
    {
      id: 5,
      title: 'Weather Analytics Dashboard',
      category: 'Development',
      year: '2023',
      description: 'Real-time weather data visualization dashboard with interactive charts.',
      image: projectTasks,
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Restaurant App Design',
      category: 'Design',
      year: '2022',
      description: 'Mobile app design for food ordering with seamless user experience.',
      image: projectBanking,
      technologies: ['Figma', 'Mobile Design', 'Prototyping'],
      behance: 'https://behance.com',
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      {/* Projects Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-reveal mb-8 text-center">
            Creating next level digital products
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 slide-up max-w-2xl mx-auto">
            Explore my collection of projects spanning web development, mobile apps, 
            and digital design solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2 bg-card border border-border rounded-lg p-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "neon" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all duration-300"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card p-6 hover-glow slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] bg-muted rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Tag className="w-3 h-3 mr-1" />
                        <span className="mr-4">{project.category}</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-neon transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-neon transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                    {project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-neon transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="text-sm">Behance</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-reveal mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 slide-up">
            Let's discuss how we can bring your ideas to life with innovative solutions.
          </p>
          <Button variant="neon" size="lg" className="slide-up">
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;