import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@heroui/react";
import { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xl"
      scrollBehavior="inside"
      className="w-[90vw] max-w-[800px] max-h-[90vh]"
      classNames={{
        base: "bg-background/95 backdrop-blur-sm text-foreground border border-border/20 shadow-2xl",
        header: "border-b border-border/30",
        footer: "border-t border-border/30",
        closeButton: "hover:bg-muted/50",
        body: "scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent"
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-0.5 px-6 py-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground text-xs">{project.category} • {project.year}</p>
            </ModalHeader>
            <ModalBody className="space-y-4 px-6 py-2">
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border/20 shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose dark:prose-invert max-w-none text-sm -my-2 space-y-4">
                <h4 className="text-base font-semibold mb-2 text-foreground/90 flex items-center gap-2">Project Overview</h4>
                <p className="text-sm text-muted-foreground">{project.description || 'No description available.'}</p>
                
                {project.technologies && (
                  <>
                    <h4 className="text-base font-semibold mb-2 text-foreground/90 flex items-center gap-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-muted/60 hover:bg-muted/80 transition-colors rounded-full text-xs font-medium text-foreground/90 border border-border/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                
                {project.features && (
                  <>
                    <h4 className="text-base font-semibold mb-2 text-foreground/90 flex items-center gap-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed text-foreground/90">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-between px-6 py-4 border-t border-border/30">
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <div className="space-x-2">
                {project.liveUrl && (
                  <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button 
                    as="a" 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="flat"
                  >
                    View on GitHub
                  </Button>
                )}
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
