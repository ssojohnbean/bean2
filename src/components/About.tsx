import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1690788210614-9052cffd8a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njg3NDQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a recent high school graduate with a passion for learning and creating. 
              Throughout my academic journey, I've developed strong problem-solving skills, 
              creativity, and a dedication to excellence in everything I do.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              I'm excited to continue my education and career in fields that challenge me 
              to think critically and make a positive impact. Whether it's through technology, 
              design, or creative projects, I'm always looking for opportunities to grow and 
              contribute.
            </p>
            
            <p className="text-lg text-gray-700">
              When I'm not studying or working on projects, you can find me exploring new 
              technologies, reading, or collaborating with peers on innovative ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
