import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Contacto
      </h1>

      <div className="grid gap-4">

        <a
          href="mailto:milene.fuentes@tecsup.edu.pe"
          className="flex items-center gap-4 bg-white rounded-xl shadow p-6 hover:shadow-md transition"
        >
          <div className="bg-blue-100 text-blue-600 rounded-full p-3 text-2xl">
            
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">
              milene.fuentes@tecsup.edu.pe
            </p>
          </div>
        </a>

        <a
          href="https://github.com/milennne"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-xl shadow p-6 hover:shadow-md transition"
        >
          <div className="bg-gray-100 text-gray-800 rounded-full p-3 text-2xl">
            
          </div>

          <div>
            <p className="text-sm text-gray-500">GitHub</p>
            <p className="font-semibold text-gray-800">
              github.com/milennne
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/milene-fuentes-26a35436b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-xl shadow p-6 hover:shadow-md transition"
        >
          <div className="bg-blue-50 text-blue-700 rounded-full p-3 text-2xl">
            
          </div>

          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <p className="font-semibold text-gray-800">
              Milene Fuentes
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}