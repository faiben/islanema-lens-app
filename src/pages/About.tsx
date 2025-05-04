
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FeaturedQuote from '@/components/FeaturedQuote';
import InfoCard from '@/components/InfoCard';
import { Card } from '@/components/ui/card';
import { GraduationCap, FilmIcon, Globe, Users, BookOpen, Sparkles } from 'lucide-react';
import CallToActionBanner from '@/components/CallToActionBanner';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section fullWidth className="relative text-white min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-overlay z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be"
            alt="Islamic architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Meet Islanema</h1>
            <p className="text-xl md:text-2xl">
              A hybrid Islamic film academy cultivating Muslim filmmakers grounded in faith, ethics, and artistic excellence
            </p>
          </div>
        </div>
      </Section>
      
      {/* Vision & Mission */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-islanema-green">Our Vision</h2>
            <p className="text-gray-700 mb-6">
              Islanema envisions a world where Muslim storytellers shape global media with content that is spiritually rooted, ethically grounded, and artistically excellent—transforming how Islam and Muslims are represented while offering wisdom-centered narratives to audiences worldwide.
            </p>
            
            <h2 className="text-3xl font-serif font-bold mb-4 text-islanema-green mt-8">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To establish a premier Islamic film academy that equips Muslim filmmakers with world-class technical training, spiritual foundations, and industry connections—enabling them to create meaningful content that honors their faith while engaging diverse global audiences.
            </p>
          </div>
          
          <div>
            <FeaturedQuote 
              quote="Islanema isn't just about changing how Muslims are portrayed in film and television—it's about reviving a tradition of storytelling that nurtures the soul while delighting the senses."
              author="Faical Benhaida"
              source="Founder, Islanema Film Academy"
            />
            
            <div className="mt-8 bg-islanema-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium mb-3 text-islanema-blue">Why "Islanema"?</h3>
              <p className="text-gray-700">
                The name "Islanema" combines "Islam" and "cinema," reflecting our commitment to bringing Islamic wisdom and values into the art of filmmaking. It represents the bridge between faith and artistic expression, tradition and innovation, spiritual depth and cultural impact.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Program Details */}
      <Section 
        className="bg-gray-50"
        title="The Islanema Program"
        subtitle="A transformative one-year journey combining online learning and intensive residency"
      >
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white p-8 mb-12 shadow-md border-none overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-islanema-cream opacity-50 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-islanema-gold opacity-30 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-medium mb-6 text-islanema-green text-center">Program Structure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border-l-4 border-islanema-gold pl-4">
                  <h4 className="text-xl font-medium mb-3">10-Month Online Learning</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-islanema-gold mr-2">•</span>
                      <span>Islamic ethics and storytelling traditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-gold mr-2">•</span>
                      <span>Screenwriting and narrative structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-gold mr-2">•</span>
                      <span>Directing and visual storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-gold mr-2">•</span>
                      <span>Cinematography and production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-gold mr-2">•</span>
                      <span>Industry mentorship from established filmmakers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-islanema-green pl-4">
                  <h4 className="text-xl font-medium mb-3">6-Week Fez Residency</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-islanema-green mr-2">•</span>
                      <span>Immersive cultural and spiritual environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-green mr-2">•</span>
                      <span>Hands-on film production workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-green mr-2">•</span>
                      <span>Collaborative film projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-green mr-2">•</span>
                      <span>Master classes with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-islanema-green mr-2">•</span>
                      <span>Community building and networking</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-center">Program Outcomes</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Professional-quality short film portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Technical expertise in filmmaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Network of Muslim creative professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Industry connections and mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Framework for ethical storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-blue mr-2">•</span>
                    <span>Spiritual foundation for creative work</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Who Can Apply"
              description="Muslim creatives aged 20-35 with a passion for storytelling, demonstrated creative abilities, and commitment to faith-based work."
              icon={<Users size={36} className="text-islanema-gold" />}
              className="bg-white"
            />
            <InfoCard 
              title="Selection Process"
              description="Competitive application including creative portfolio, personal statement, and interview to assess talent, vision, and alignment with our mission."
              icon={<GraduationCap size={36} className="text-islanema-gold" />}
              className="bg-white"
            />
            <InfoCard 
              title="Financial Support"
              description="Scholarships and financial aid available based on need and merit. We're committed to making the program accessible to talented applicants."
              icon={<BookOpen size={36} className="text-islanema-gold" />}
              className="bg-white"
            />
          </div>
        </div>
      </Section>
      
      {/* Curriculum Highlights */}
      <Section 
        title="Curriculum Highlights" 
        subtitle="Blending technical excellence with spiritual foundations"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
                <FilmIcon className="text-islanema-green mr-2" size={24} />
                <span>Technical Training</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced screenwriting and story structure</li>
                <li>• Directing actors and managing production</li>
                <li>• Cinematography and visual storytelling</li>
                <li>• Sound design and music for film</li>
                <li>• Post-production and editing techniques</li>
                <li>• Distribution strategies and audience building</li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
                <BookOpen className="text-islanema-green mr-2" size={24} />
                <span>Islamic Foundations</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Islamic storytelling traditions and ethics</li>
                <li>• Prophetic methods of communication</li>
                <li>• Islamic aesthetics and visual arts</li>
                <li>• Ethics of representation and depiction</li>
                <li>• Cultural sensitivity and responsible storytelling</li>
                <li>• Spiritually-centered creative processes</li>
              </ul>
            </Card>
          </div>
          
          <div className="mt-12 bg-islanema-cream p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-medium mb-6 text-center">Our Teaching Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-islanema-green" size={32} />
                </div>
                <h4 className="font-medium mb-2">Global Perspective</h4>
                <p className="text-sm text-gray-600">
                  Drawing from diverse Islamic cultures and artistic traditions across the Muslim world.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-islanema-green" size={32} />
                </div>
                <h4 className="font-medium mb-2">Integration</h4>
                <p className="text-sm text-gray-600">
                  Seamlessly blending technical training, spiritual wisdom, and industry preparedness.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-islanema-green" size={32} />
                </div>
                <h4 className="font-medium mb-2">Community</h4>
                <p className="text-sm text-gray-600">
                  Building a supportive network of Muslim creatives committed to excellence and ethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Long-term Vision */}
      <Section className="bg-islanema-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Long-Term Vision</h2>
          <p className="text-xl mb-12">
            The current one-year program is just the beginning of a larger vision to transform Muslim representation in global media.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur p-6 border-none text-white">
              <h3 className="text-xl font-serif font-medium mb-3">Two-Year Academy</h3>
              <p className="opacity-80">
                Expanding to a comprehensive two-year film school with specialized tracks and advanced production facilities.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur p-6 border-none text-white">
              <h3 className="text-xl font-serif font-medium mb-3">Permanent Campus</h3>
              <p className="opacity-80">
                Establishing a dedicated campus combining state-of-the-art production facilities with an environment conducive to spiritual growth.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur p-6 border-none text-white">
              <h3 className="text-xl font-serif font-medium mb-3">Global Impact</h3>
              <p className="opacity-80">
                Creating a network of alumni actively transforming media representation and establishing an international presence for Muslim storytellers.
              </p>
            </Card>
          </div>
          
          <Button 
            asChild
            className="bg-islanema-gold hover:bg-white text-islanema-blue hover:text-islanema-blue text-lg px-8 py-6 h-auto"
          >
            <Link to="/support">Support Our Vision</Link>
          </Button>
        </div>
      </Section>
      
      {/* Benefits */}
      <Section 
        title="Multi-Dimensional Benefits" 
        subtitle="The impact of Islanema extends across spiritual, cultural, educational, and economic dimensions"
        className="pattern-bg"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">Spiritual Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Revival of ethical storytelling rooted in Islamic tradition</li>
                <li>• Content that nurtures spiritual growth and reflection</li>
                <li>• Media that affirms rather than undermines faith values</li>
                <li>• Creative expression that honors divine beauty and wisdom</li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">Cultural Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Authentic representation of Muslim identities and experiences</li>
                <li>• Preservation and evolution of Islamic artistic traditions</li>
                <li>• Cross-cultural dialogue and understanding</li>
                <li>• Counter-narratives to stereotypes and misconceptions</li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">Educational Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cultivation of Muslim talent in the creative industries</li>
                <li>• Integration of technical skills with ethical foundations</li>
                <li>• Development of critical media literacy</li>
                <li>• Mentorship and career pathway development</li>
              </ul>
            </Card>
            
            <Card className="p-6 border-none shadow-md">
              <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">Economic Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creation of ethical career pathways in creative industries</li>
                <li>• Development of halal entertainment ecosystem</li>
                <li>• Job creation and skills development</li>
                <li>• Long-term investment in Muslim creative economy</li>
              </ul>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <FeaturedQuote 
              quote="Islanema isn't just an educational institution—it's a movement to reclaim our narrative, honor our tradition, and shape the stories that will influence generations to come."
              author="Faical Benhaida"
              source="Founder, Islanema Film Academy"
            />
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToActionBanner 
        title="Join the Islanema Journey"
        description="Whether as a student, supporter, mentor, or partner—be part of transforming how stories are told and how Muslims are represented in global media."
        buttonText="Get Involved Today"
        buttonLink="/support"
        className="bg-islanema-green"
      />
      
      <Footer />
    </div>
  );
};

export default About;
