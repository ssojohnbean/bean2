import { Code, Palette, Users, Lightbulb, Target, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    icon: Code,
    title: "Technical Skills",
    items: ["HTML/CSS", "JavaScript", "Python", "Microsoft Office Suite"],
  },
  {
    icon: Palette,
    title: "Creative Skills",
    items: ["Graphic Design", "Video Editing", "Content Creation", "Digital Art"],
  },
  {
    icon: Users,
    title: "Collaboration",
    items: ["Team Projects", "Peer Mentoring", "Group Leadership", "Communication"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    items: ["Critical Thinking", "Research", "Analysis", "Innovation"],
  },
  {
    icon: Target,
    title: "Project Management",
    items: ["Planning", "Organization", "Time Management", "Goal Setting"],
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    items: ["Mathematics", "Science", "English", "Research Writing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">Skills & Abilities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A diverse set of skills developed through academic pursuits, personal projects, 
          and extracurricular activities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <skill.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-3">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
