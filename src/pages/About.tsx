import { Calendar, MapPin, Users, Award } from 'lucide-react';

import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const experience = [
    {
      company: 'TechCorp Inc.',
      role: 'Senior Full Stack Developer',
      period: '2023 - Present',
      icon: Users
    },
    {
      company: 'StartupXYZ',
      role: 'Lead Frontend Developer',
      period: '2021 - 2023',
      icon: Award
    },
    {
      company: 'Design Studio',
      role: 'UI/UX Designer',
      period: '2019 - 2021',
      icon: MapPin
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Figma', 'Photoshop'
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Research',
      description: 'Understanding user needs and market requirements through comprehensive analysis.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating intuitive and visually appealing interfaces with user-centered approach.',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Building scalable and performant applications using modern technologies.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'Launching solutions with proper testing and continuous monitoring.',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* About Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image with Rotating Text */}
            <div className="relative flex justify-center -mt-60">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-neon">
                  <img 
                    src={profileImage} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rotate-text w-96 h-96 rounded-full border border-muted-foreground/20">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <path
                        id="textCircle"
                        d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        fill="none"
                        stroke="none"
                      />
                      <text className="text-sm fill-muted-foreground">
                        <textPath href="#textCircle" startOffset="0%">
                          Let's Talk • Let's Talk • Let's Talk • Let's Talk •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h1 className="text-reveal mb-6">
                A creative developer & digital designer
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground slide-up">
                <p>
                  I'm passionate about creating digital experiences that not only look great 
                  but also solve real problems. With over 5 years of experience in the industry, 
                  I've had the privilege of working with startups and established companies alike.
                </p>
                <p>
                  My approach combines technical expertise with creative thinking to deliver 
                  solutions that are both innovative and practical. I believe in the power 
                  of good design to make technology more accessible and enjoyable for everyone.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee while 
                  reading about the latest trends in web development.
                </p>
              </div>
            </div>
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

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-reveal mb-16 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={exp.company}
                className="flex items-start space-x-6 p-6 rounded-lg bg-card border border-border hover-glow slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-neon p-3 rounded-lg">
                  <exp.icon className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-neon font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-reveal mb-16 text-center">Design Process</h2>
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll-left" style={{ width: 'calc(200% + 2rem)' }}>
              {[...designProcess, ...designProcess].map((process, index) => (
                <div 
                  key={`${process.step}-${index}`}
                  className="min-w-80 bg-card border border-border rounded-lg p-8 hover-glow flex-shrink-0"
                >
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-neon mr-4">{process.step}</span>
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;