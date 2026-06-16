import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}`,
};

export default function ContactPage() {
  return (
    <section className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <p className="text-gray-600">Email</p>
          <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
            {personalInfo.email}
          </a>
        </div>
        <div>
          <p className="text-gray-600">GitHub</p>
          <a href={personalInfo.github} target="_blank" className="text-blue-600 hover:underline">
            {personalInfo.github}
          </a>
        </div>
        <div>
          <p className="text-gray-600">LinkedIn</p>
          <a href={personalInfo.linkedin} target="_blank" className="text-blue-600 hover:underline">
            {personalInfo.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}