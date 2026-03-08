export default function WriterSection() {
  return (
    <section id="writer" className="relative py-32 bg-transparent text-[#e5e5e5] overflow-hidden">
      {/* Background is handled globally in page.tsx */}
      
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">AAKASH SEHRAWAT AS WRITER</h2>
        <p className="text-center text-gray-400 mb-16">
          Stories, reflections, and thoughts beyond technology.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Book 1 */}
          <div className="p-8 border border-gray-800 rounded-xl">
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/notastart.png" 
                alt="Not A Start, Not The End Cover" 
                className="w-full h-auto object-cover border border-gray-800"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Not A Start, Not The End
            </h3>
            <p className="text-green-400 mb-4">Status: Completed</p>
            <p className="text-gray-400 mb-6">
              A reflective narrative exploring identity, loneliness,
              and personal growth through storytelling and inner dialogue.
            </p>
            <div className="flex gap-4">
              <a
                href="/books/not-a-start.pdf"
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded-lg"
              >
                Read
              </a>
              <a
                href="/books/not-a-start.pdf"
                download
                className="px-4 py-2 border border-white rounded-lg"
              >
                Download
              </a>
            </div>
          </div>

          {/* Book 2 */}
          <div className="p-8 border border-gray-800 rounded-xl">
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/and-yet-i-rise.png" 
                alt="And Yet I Rise Cover" 
                className="w-full h-auto object-cover border border-gray-800"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">And Yet I Rise</h3>
            <p className="text-yellow-400 mb-4">Status: In Progress</p>
            <p className="text-gray-400 mb-6">
              A journey of emotional rebirth exploring healing,
              hope, and rediscovering life after hardship.
            </p>
            <div className="flex gap-4">
              <a
                href="/books/and-yet-i-rise.pdf"
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded-lg"
              >
                Read Preview
              </a>
              <a
                href="/books/and-yet-i-rise.pdf"
                download
                className="px-4 py-2 border border-white rounded-lg"
              >
                Download Draft
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
