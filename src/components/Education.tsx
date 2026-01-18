import { GraduationCap, Award, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const education = [
  {
    icon: GraduationCap,
    degree: "High School Diploma",
    institution: "Central High School",
    year: "2024",
    details: "Graduated with honors, maintaining a strong GPA throughout all four years.",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance and dedication to learning.",
  },
  {
    icon: Trophy,
    title: "Science Fair Winner",
    description: "First place in regional science fair for innovative project on sustainable energy.",
  },
  {
    icon: Award,
    title: "Student Leadership",
    description: "Served as class representative and led various school initiatives.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-12">Education & Achievements</h2>
        
        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg h-fit">
                      <edu.icon className="text-blue-600" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl">{edu.degree}</h3>
                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{edu.institution}</p>
                      <p className="text-gray-600">{edu.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl mb-6">Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <achievement.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
