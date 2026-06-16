import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Contacto</h1>
        <p className="text-gray-500 mt-2">¿Tienes un proyecto? Hablemos.</p>
      </div>

      {/* Links de contacto */}
      <div className="grid gap-4 mb-10">
        <a
          href="mailto:milene.fuentes@tecsup.edu.pe"
          className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-200 transition-all"
        >
          <div className="bg-blue-50 text-blue-600 rounded-xl p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
            <p className="font-semibold text-gray-800">milene.fuentes@tecsup.edu.pe</p>
          </div>
          <span className="ml-auto text-gray-300">→</span>
        </a>

        <a
          href="https://github.com/milennne"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-300 transition-all"
        >
          <div className="bg-gray-50 text-gray-800 rounded-xl p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">GitHub</p>
            <p className="font-semibold text-gray-800">github.com/milennne</p>
          </div>
          <span className="ml-auto text-gray-300">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/milene-fuentes-26a35436b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-300 transition-all"
        >
          <div className="bg-blue-50 text-blue-700 rounded-xl p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">LinkedIn</p>
            <p className="font-semibold text-gray-800">Milene Fuentes</p>
          </div>
          <span className="ml-auto text-gray-300">→</span>
        </a>
      </div>
{/* Formulario */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Envíame un mensaje</h2>
        <div className="grid gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Mensaje</label>
            <textarea
              rows={4}
              placeholder="Cuéntame sobre tu proyecto..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-blue-400 transition resize-none"
            />
          </div>
          <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition">
            Enviar mensaje
          </button>
        </div>
      </div>
    </section>
  );
}