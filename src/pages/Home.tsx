import { useState } from 'react';
import { ExternalLink, Code2, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectBanking from '@/assets/project-banking.jpg';
import projectTasks from '@/assets/project-tasks.jpg';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '@/types/project';

const Home = () => {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'GraphQL',
    'PostgreSQL', 'AWS', 'Docker', 'Figma', 'Tailwind CSS', 'MongoDB'
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      year: '2024',
      image: projectEcommerce,
      type: 'desktop',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      features: [
        'User authentication and authorization',
        'Product catalog with filtering and search',
        'Shopping cart functionality',
        'Secure payment processing',
        'Order history and tracking'
      ],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      year: '2024',
      image: projectBanking,
      type: 'mobile',
      description: 'A modern mobile banking application with a focus on user experience and security.',
      technologies: ['Figma', 'Adobe XD', 'React Native', 'Node.js'],
      features: [
        'Intuitive transaction interface',
        'Biometric authentication',
        'Budget tracking',
        'Bill payments and transfers',
        'Real-time notifications'
      ],
      githubUrl: 'https://github.com/username/banking-app',
      liveUrl: 'https://banking-app-demo.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Frontend Development',
      year: '2023',
      image: projectTasks,
      type: 'desktop',
      description: 'A personal portfolio website to showcase my projects and skills with a clean, modern design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Responsive design',
        'Project showcase',
        'Skills visualization',
        'Contact form',
        'Dark/light mode'
      ],
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://myportfolio.com'
    }
  ];

  const expertise = [
    {
      title: 'Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
      icon: Code2
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that delight users.',
      icon: Palette
    },
    {
      title: 'Branding',
      description: 'Developing strong visual identities that communicate brand values.',
      icon: Zap
    }
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-reveal mb-6">
              Crafting purpose driven{' '}
              <span className="text-neon">experiences</span>{' '}
              that inspire & engage.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 slide-up max-w-2xl">
              I'm a creative developer and digital designer passionate about building 
              innovative solutions that make a difference.
            </p>
            
            <div>
              {/* Social Links */}
            <div className="flex items-center space-x-6 slide-up mb-8">
              <a href="https://github.com" className="text-muted-foreground hover:text-neon transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-neon transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-neon transition-colors">
                Twitter
              </a>
            </div>
            
            {/* CTA Button */}
            {/* <div className="flex justify-end slide-up">
              <Button asChild variant="hero" size="lg">
                <NavLink to="/about">
                  Know me better <ArrowRight className="ml-2 w-4 h-4" />
                </NavLink>
              </Button>
            </div> */}
          </div>
            </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-reveal mb-4">Selected Projects</h2>
            <p className="text-xl text-muted-foreground slide-up">
              A showcase of my recent work and creative projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card p-6 hover-glow cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-neon hover:text-neon/80"
                  >
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-reveal mb-8">Areas of Expertise</h2>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div 
                    key={item.title}
                    className="border-b border-border pb-6 last:border-0 slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-neon p-2 rounded-lg">
                        <item.icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="bg-muted rounded-lg p-8 fade-in">
              <div className="aspect-square bg-surface rounded-lg flex items-center justify-center">
                <span className="text-6xl text-muted-foreground">📊</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-reveal mb-12 text-center">Skills & Technologies</h2>
          <div className="relative w-full">
            <div className="relative flex overflow-hidden">
              <div className="flex animate-scroll">
                {[...skills, ...skills, ...skills].map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="mx-4 px-6 py-3 bg-muted rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll" aria-hidden="true">
                {[...skills, ...skills, ...skills].map((skill, index) => (
                  <div
                    key={`${skill}-${index}-duplicate`}
                    className="mx-4 px-6 py-3 bg-muted rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-reveal mb-8">
            Let's create your next big idea.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 slide-up">
            Ready to bring your vision to life? Let's collaborate and build something amazing together.
          </p>
          <Button asChild variant="neon" size="xl" className="slide-up">
            <NavLink to="/contact">
              Contact Me
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;