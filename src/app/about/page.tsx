import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'PostgreSQL & MongoDB',
    'Tailwind CSS',
    'Git & GitHub',
    'Docker',
    'AWS',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mí</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-6">
              {personalInfo.description}
            </p>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}