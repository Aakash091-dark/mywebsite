import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";
import bookCover from '../assets/book-cover.png';

const Book = () => {
  const chapters = [
    "Chapter 1: Starting, But Not A Start",
    "Chapter 2: The Lost One",
    "Chapter 3: Tired of Listening",
    "Chapter 4: The Founder",
    "Chapter 5: The Longest Night",
    "Chapter 6: Confusion",
    "Chapter 7: The Big Step",
    "Chapter 8: Is It The End?",
  ];

  return (
    <section id="book" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 animate-fade-in-up">
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Presenting Aakash Sehrawat as
          </p>
        </div>

        <div className="text-center mb-12 animate-slide-3d">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent px-4"
            style={{
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              wordBreak: "keep-all",
            }}
          >
            Writer
          </h2>
        </div>

        <Card
          className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50 animate-slide-3d"
          style={{
            transform: "perspective(1000px)",
            boxShadow:
              "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Not A Start, Not The End
                </h3>
                <p className="text-primary font-medium">
                  by Aakash Sehrawat
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong>“Not A Start, Not The End – It’s Just Something That You
                Blabber In Your Head”</strong> is a poetic journey through pain,
                silence, and rediscovery. It unravels the voice of a soul that
                forgets everything but never stops feeling. Through fragments of
                English and Hindi verse, Aakash explores confusion, healing, and
                the beauty of finding light in your own darkness. It’s not a
                story about giving up—it’s about learning to breathe again,
                softly, honestly, and with courage.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Contents:
                </h4>
                <ul className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary">•</span>
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* Read Online Button */}
                <Button
                  className="bg-gradient-primary hover:shadow-glow"
                  asChild
                >
                  <a
                    href="/not a start.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Online
                  </a>
                </Button>

                {/* Download Button */}
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="/not a start.pdf"
                    download="not a start.pdf"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={bookCover} 
                alt="Book Cover: Not A Start, Not The End" 
                className="rounded-lg shadow-2xl w-64 h-80 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Book;
