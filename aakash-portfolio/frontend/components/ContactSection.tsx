export default function ContactSection() {
  return (
    <section className="relative py-32 bg-transparent text-white overflow-hidden">
      {/* Background is handled globally in page.tsx */}
      
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          {"LET'S BUILD SOMETHING TOGETHER"}
        </h2>
        <p className="text-gray-400 mb-16">
          {"Whether it's AI systems, data solutions, or creative"}
          {"collaborations, I'm always open to meaningful conversations."}
        </p>
        <div className="flex justify-center gap-8 mb-16">
          <a
            href="mailto:aakashhssehrawat@gmail.com"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Email
          </a>
          <a
            href="https://github.com/Aakash091-dark"
            target="_blank"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/akashhrsehrawat"
            target="_blank"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aakash Sehrawat
        </p>
      </div>
    </section>
  );
}
