
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Book, FilmIcon, GraduationCap, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("program");

  const faqCategories = [
    { id: "program", label: "Program", icon: <GraduationCap size={18} /> },
    { id: "application", label: "Application", icon: <FilmIcon size={18} /> },
    { id: "philosophy", label: "Philosophy", icon: <Book size={18} /> },
    { id: "general", label: "General", icon: <Info size={18} /> },
  ];

  const faqs = {
    program: [
      {
        question: "What is the structure of the Islanema program?",
        answer:
          "The Islanema program is a one-year transformative journey consisting of two main phases: a ten-month online learning phase that combines Islamic ethics, film theory, and practical training with industry mentors, followed by a six-week immersive residency experience in Fez, Morocco, where theory meets practice in collaborative film projects."
      },
      {
        question: "What tracks are available in the program?",
        answer:
          "The program offers three specialized tracks: Writing (8 students), Directing (4 students), and Producing (4 students). Each track provides focused training in the respective area while maintaining a foundation in Islamic ethics and storytelling."
      },
      {
        question: "How much time will I need to commit to the program?",
        answer:
          "The online portion requires 3-6 hours per week (self-paced lectures plus live discussions). The Fez residency is an 8-week full-time commitment. Students are responsible for travel costs, but lodging is provided."
      },
      {
        question: "What technical equipment do I need?",
        answer:
          "You'll need a laptop or tablet with reliable internet access. The program utilizes free software tools like Celtx for scriptwriting and Canva for storyboarding."
      },
      {
        question: "Is there a language requirement?",
        answer:
          "All coursework is delivered in English, so proficiency is required for assignments and discussions. Knowledge of Arabic is helpful for Qur'anic modules but is not mandatory."
      }
    ],
    application: [
      {
        question: "What are the academic prerequisites?",
        answer:
          "The minimum qualification is a high school diploma with 2+ years of relevant work experience in media, Islamic studies, or arts. Exceptions can be made for motivated applicants without formal degrees who submit a strong portfolio (creative work) and complete an interview."
      },
      {
        question: "How many students are accepted?",
        answer:
          "The 2025-2026 cohort has limited seats: 8 students for the Writing track, 4 students for the Directing track, and 4 students for the Producing track. Selection is based on application strength, diversity of backgrounds, and alignment with program values."
      },
      {
        question: "What materials do I need to submit with my application?",
        answer:
          "You need to provide proof of degree (scanned diploma or equivalent certification), a 500-word statement of purpose essay on your goals and Islamic storytelling vision, and a portfolio demonstrating your creativity (scripts, stories, short films, or essays)."
      },
      {
        question: "When is the application deadline?",
        answer:
          "Please check our website for the most current application deadlines. We typically accept applications several months before the program start date to allow time for the selection process and preparations."
      },
      {
        question: "Can I apply if I don't have a formal degree?",
        answer:
          "Yes, we consider applicants without formal degrees if they demonstrate talent and commitment through a portfolio submission and interview. Relevant experience in media, storytelling, or Islamic studies strengthens such applications."
      }
    ],
    philosophy: [
      {
        question: "What is Islanema's vision?",
        answer:
          "Islanema aims to transform storytelling through faith and ethics by cultivating Muslim filmmakers who are grounded in both spiritual wisdom and technical excellence. Our vision is to reshape film narratives through Islamic wisdom and create authentic representation in global media."
      },
      {
        question: "Why does media representation matter?",
        answer:
          "Today's mainstream media often misrepresents Muslim identities, lacks spiritual depth, and presents values that conflict with Islamic ethics. This impacts how others perceive Muslims and affects Muslim youth's understanding of their own identity and faith. The entertainment industry shapes cultural narratives globally, yet few Muslim voices have the necessary training and access."
      },
      {
        question: "What ethical frameworks guide the program?",
        answer:
          "Our program is values-driven, requiring content to align with Islamic ethics (no explicit material, interest-based financing, etc.). We promote collaboration and respect for diverse perspectives within Islamic frameworks. The creative work is rooted in Islamic wisdom and ethics that guides artistic expression."
      },
      {
        question: "How does Islanema aim to impact the media landscape?",
        answer:
          "Islanema works to develop skills in Muslim creatives to create content that authentically represents Muslim perspectives and values. By training a new generation of spiritually-grounded, technically skilled filmmakers, we hope to transform the global media narrative and provide counter-narratives to stereotypical portrayals."
      }
    ],
    general: [
      {
        question: "Who founded Islanema?",
        answer:
          "Islanema was founded by Faical Benhaida, who established the Islanema Film Academy to address the critical need for authentic Muslim representation in global media and to cultivate spiritually-grounded narratives."
      },
      {
        question: "Where is the residency program located?",
        answer:
          "The residency portion of our program takes place in the historic city of Fez, Morocco, known for its rich Islamic heritage, arts, and architecture. This location provides an inspiring environment for our students to create and collaborate."
      },
      {
        question: "How can I support Islanema if I'm not a student?",
        answer:
          "You can support Islanema through financial contributions, professional mentorship, or community engagement. Visit our Support page to learn more about specific ways to get involved and help establish our vision for a two-year film academy with a dedicated campus and scholarships."
      },
      {
        question: "Does Islanema offer scholarships?",
        answer:
          "Part of our vision for the future is to establish scholarships for talented Muslim filmmakers worldwide. Currently, we're working to secure funding for this initiative. Please check our website for updates on scholarship opportunities."
      },
      {
        question: "How can I stay updated about Islanema's progress?",
        answer:
          "Visit our website regularly for the latest news and developments. You can also sign up for our newsletter through the support form to receive updates directly in your inbox."
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-islanema-blue to-islanema-green text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about the Islanema Film Academy, our program, application process, and philosophy.
          </p>
        </div>
      </div>
      
      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue="program" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.keys(faqs).map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqs[category as keyof typeof faqs].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p className="pt-2">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-medium mb-4">Still have questions?</h2>
            <p className="mb-6 text-gray-700">
              If you couldn't find the answer you're looking for, please don't hesitate to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-islanema-gold hover:bg-islanema-green text-islanema-blue hover:text-white"
              >
                <Link to="/support-form">Contact Us</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-islanema-blue text-islanema-blue hover:bg-islanema-blue hover:text-white"
              >
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
