
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeaturedQuote from '@/components/FeaturedQuote';
import { Heart, GraduationCap, Users, Sparkles, BookOpen, GlobeIcon } from 'lucide-react';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-islanema-gold text-islanema-blue" fullWidth>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Support the Vision</h1>
            <p className="text-xl mb-8">
              Join us in transforming media representation and cultivating the next generation of Muslim storytellers
            </p>
            <Link to="/support-form">
              <Button size="lg" className="bg-white hover:bg-islanema-blue text-islanema-blue hover:text-white">
                Get Involved Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      
      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Islanema represents a critical investment in reshaping how Muslim stories are told and how Islamic wisdom is shared with the world. Your support enables us to train a new generation of filmmakers who combine technical excellence with spiritual depth—creating content that enriches rather than diminishes our collective understanding.
          </p>
          
          <div className="bg-islanema-cream p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-medium mb-4 text-islanema-blue text-center">Our Funding Priorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-islanema-green mr-2">1.</span>
                  <span>Scholarship Fund</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Ensuring that talented Muslim creatives from diverse backgrounds can access our program regardless of financial constraints.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-islanema-green mr-2">2.</span>
                  <span>Campus Development</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Working toward establishing a permanent campus with state-of-the-art production facilities in a spiritually enriching environment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-islanema-green mr-2">3.</span>
                  <span>Equipment & Technology</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Providing students with access to professional-grade equipment and software for world-class production quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <span className="text-islanema-green mr-2">4.</span>
                  <span>Faculty & Mentorship</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Attracting top industry professionals and Islamic scholars to provide comprehensive education and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Ways to Support */}
      <Section 
        title="Ways to Support" 
        subtitle="Join us in building a future where Muslim stories are told with authenticity, excellence, and wisdom"
        className="bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-t-4 border-islanema-green shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-islanema-green/10 p-3 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-islanema-green" />
                </div>
                <h3 className="text-xl font-serif font-medium">Financial Support</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-islanema-green mr-2">•</span>
                  <span>One-time donations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-green mr-2">•</span>
                  <span>Monthly giving program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-green mr-2">•</span>
                  <span>Endowment contributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-green mr-2">•</span>
                  <span>Scholarship sponsorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-green mr-2">•</span>
                  <span>Equipment donation</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/support-form">
                  <Button className="bg-islanema-green hover:bg-islanema-blue text-white">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </Card>
            
            <Card className="p-6 border-t-4 border-islanema-gold shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-islanema-gold/10 p-3 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-islanema-gold" />
                </div>
                <h3 className="text-xl font-serif font-medium">Professional Support</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-islanema-gold mr-2">•</span>
                  <span>Industry mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-gold mr-2">•</span>
                  <span>Guest teaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-gold mr-2">•</span>
                  <span>Internship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-gold mr-2">•</span>
                  <span>Equipment lending</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-gold mr-2">•</span>
                  <span>Project collaboration</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/support-form">
                  <Button className="bg-islanema-gold hover:bg-islanema-blue text-islanema-blue hover:text-white">
                    Become a Mentor
                  </Button>
                </Link>
              </div>
            </Card>
            
            <Card className="p-6 border-t-4 border-islanema-blue shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-islanema-blue/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-islanema-blue" />
                </div>
                <h3 className="text-xl font-serif font-medium">Community Support</h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-islanema-blue mr-2">•</span>
                  <span>Volunteer opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-blue mr-2">•</span>
                  <span>Spreading awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-blue mr-2">•</span>
                  <span>Community fundraising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-blue mr-2">•</span>
                  <span>Event hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islanema-blue mr-2">•</span>
                  <span>Student recruitment</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/support-form">
                  <Button className="bg-islanema-blue hover:bg-islanema-green text-white">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Giving Levels */}
      <Section title="Giving Levels">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center shadow-md border-none bg-islanema-cream">
              <h3 className="text-xl font-serif font-medium mb-2">Supporter</h3>
              <p className="text-3xl font-bold text-islanema-green mb-6">$100-$999</p>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>• Recognition on website</li>
                <li>• Newsletter updates</li>
                <li>• Early access to student films</li>
              </ul>
              <Button 
                className="bg-islanema-green hover:bg-islanema-blue text-white w-full transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/support-form?level=supporter">Become a Supporter</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center shadow-md border-none bg-gradient-to-b from-islanema-gold/10 to-islanema-gold/30">
              <h3 className="text-xl font-serif font-medium mb-2">Patron</h3>
              <p className="text-3xl font-bold text-islanema-green mb-6">$1,000-$9,999</p>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>• All Supporter benefits</li>
                <li>• Named recognition in program</li>
                <li>• Private screening invitations</li>
                <li>• Annual impact report</li>
              </ul>
              <Button 
                className="bg-islanema-gold hover:bg-islanema-blue text-islanema-blue hover:text-white w-full transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/support-form?level=patron">Become a Patron</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center shadow-md border-none bg-gradient-to-b from-islanema-blue/10 to-islanema-blue/30">
              <h3 className="text-xl font-serif font-medium mb-2">Founder</h3>
              <p className="text-3xl font-bold text-islanema-green mb-6">$10,000+</p>
              <ul className="text-left text-gray-700 space-y-2 mb-6">
                <li>• All Patron benefits</li>
                <li>• Named scholarship opportunity</li>
                <li>• Advisory board consideration</li>
                <li>• VIP program events</li>
                <li>• Special project involvement</li>
              </ul>
              <Button 
                className="bg-islanema-blue hover:bg-islanema-green text-white w-full transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/support-form?level=founder">Become a Founder</Link>
              </Button>
            </Card>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-serif font-medium mb-3">Corporate & Institutional Partnerships</h3>
            <p className="text-gray-700 mb-4">
              We welcome partnerships with organizations that share our vision for transforming media representation. Custom partnership packages are available for media companies, educational institutions, and foundations.
            </p>
            <Button 
              variant="outline" 
              className="border-islanema-green text-islanema-green hover:bg-islanema-green hover:text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/support-form?type=partnership">Contact Our Partnership Team</Link>
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Impact */}
      <Section className="pattern-bg" title="Your Impact">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-none shadow-md">
              <div className="bg-islanema-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-islanema-green" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-2">Student Support</h3>
              <p className="text-gray-600">
                $5,000 provides a partial scholarship for one student to complete the program
              </p>
            </Card>
            
            <Card className="p-6 text-center border-none shadow-md">
              <div className="bg-islanema-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-islanema-gold" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-2">Curriculum Development</h3>
              <p className="text-gray-600">
                $10,000 supports the creation of specialized course materials integrating Islamic wisdom
              </p>
            </Card>
            
            <Card className="p-6 text-center border-none shadow-md">
              <div className="bg-islanema-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-islanema-blue" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-2">Equipment Fund</h3>
              <p className="text-gray-600">
                $25,000 provides professional-grade cameras and production equipment for student projects
              </p>
            </Card>
            
            <Card className="p-6 text-center border-none shadow-md">
              <div className="bg-islanema-terracotta/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeIcon className="text-islanema-terracotta" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-2">Global Program</h3>
              <p className="text-gray-600">
                $50,000 supports the six-week residency program in Fez for an entire student cohort
              </p>
            </Card>
          </div>
          
          <FeaturedQuote 
            quote="Your support isn't just funding an educational program—it's investing in a movement to transform how stories are told, how Muslims are represented, and how wisdom is shared through the powerful medium of film."
            author="Ismail Abdullah"
            source="Founder, Islanema Film Academy"
          />
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section className="bg-islanema-blue text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-8">
            We welcome the opportunity to discuss how you can be part of the Islanema vision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
              <p className="opacity-80">info@islanema.org</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Donor Relations</h3>
              <p className="opacity-80">giving@islanema.org</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Partnerships</h3>
              <p className="opacity-80">partners@islanema.org</p>
            </div>
          </div>
          
          <Link to="/support-form">
            <Button 
              className="bg-islanema-gold hover:bg-white text-islanema-blue hover:text-islanema-blue text-lg px-8 py-6 h-auto"
            >
              Complete Support Form
            </Button>
          </Link>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Support;
