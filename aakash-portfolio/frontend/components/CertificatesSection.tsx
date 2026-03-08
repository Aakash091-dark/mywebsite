export default function CertificatesSection() {
  const certificates = [
    {
      name: "Microsoft Azure AI-102",
      description: "Designing and Implementing AI Solutions on Microsoft Azure",
      link: "https://learn.microsoft.com/en-us/users/aakashsehrawat-2952/credentials/certification/azure-ai-engineer?tab=credentials-tab"
    },
    {
      name: "Azure AZ-104",
      description: "Azure Administrator Certification",
      link: "https://learn.microsoft.com/en-us/users/aakashsehrawat-2952/credentials/726fb597892764da"
    },
    {
      name: "AI-900",
      description: "Microsoft Azure AI Fundamentals",
      link: "https://www.credly.com/badges/f2c9c49c-db94-496d-be0a-3c7691f670e2/public_url"
    },
    {
      name: "DP-900",
      description: "Microsoft Azure Data Fundamentals",
      link: "https://www.credly.com/badges/7f98965f-db01-491c-8712-f8b7de81c7d5/public_url"
    }
  ];

  return (
    <section className="relative py-32 bg-transparent text-white overflow-hidden" id="certificates">
      {/* Background is handled globally in page.tsx */}
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          AAKASH SEHRAWAT AS ACHIEVER
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-100 group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4 line-clamp-3">
                {cert.description}
              </p>
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-2 group-hover:text-indigo-300">
                View Certificate
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
