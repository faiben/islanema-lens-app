
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, FilmIcon, Globe, GraduationCap, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import StatCard from '@/components/StatCard';
import InfoCard from '@/components/InfoCard';
import CallToActionBanner from '@/components/CallToActionBanner';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-overlay z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            alt="Film frames"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Reshaping Film Narratives Through Islamic Wisdom
            </h1>
            <p className="text-xl mb-8">
              Exploring global media representation and cultivating a new generation of Muslim storytellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-islanema-gold hover:bg-white text-islanema-blue hover:text-islanema-blue text-lg px-8 py-6 h-auto"
              >
                <Link to="/about">Discover Islanema</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-black hover:bg-white/20 hover:text-white text-lg px-8 py-6 h-auto"
              >
                <Link to="/trends">Explore Media Trends</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <Section 
        title="Transforming Storytelling through Faith and Ethics" 
        subtitle="Islanema responds to the critical need for authentic Muslim representation and spiritually-grounded narratives in global media."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-medium mb-4 text-islanema-green">The Challenge We Face</h3>
            <p className="text-gray-700 mb-4">
              Today's mainstream media often misrepresents Muslim identities, lacks spiritual depth, and presents values that conflict with Islamic ethics. This not only affects how others perceive Muslims but also impacts Muslim youth's understanding of their own identity and faith.
            </p>
            <p className="text-gray-700 mb-6">
              The entertainment industry shapes cultural narratives globally, yet few Muslim voices have the technical training, industry access, and spiritual grounding needed to create authentic, compelling content that reflects Islamic values.
            </p>
            <div className="flex justify-start">
              <Button asChild variant="outline" className="border-islanema-green text-islanema-green hover:bg-islanema-green hover:text-white">
                <Link to="/why">Why This Matters</Link>
              </Button>
            </div>
          </div>
          
          <div>
            {/* Removed FeaturedQuote component */}
            <div className="bg-islanema-cream p-8 rounded-lg">
              <p className="text-center text-gray-700 italic">
                Media shapes our perceptions and understanding of the world around us.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Stats Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="87%"
            description="of Muslim characters in Western media are depicted stereotypically or as violent"
          />
          <StatCard 
            number="<2%"
            description="of TV show writers and directors in major studios identify as Muslim"
            color="bg-islanema-gold"
          />
          <StatCard 
            number="500+"
            description="hours of content consumed by the average child annually"
          />
          <StatCard 
            number="$720B"
            description="global entertainment market size projected by 2030"
            color="bg-islanema-gold"
          />
        </div>
      </Section>
      
      {/* Quick Access Sections */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/trends" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Media Trends" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-islanema-green transition-colors">Trends in Media</h3>
                <p className="text-gray-600 mb-4">Explore the current landscape of global film and television, examining representation, narratives, and values.</p>
                <span className="text-islanema-green font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/why" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                alt="Why It Matters" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-islanema-green transition-colors">Why It Matters</h3>
                <p className="text-gray-600 mb-4">Understand the profound impact of media on spiritual development, cultural identity, and societal values.</p>
                <span className="text-islanema-green font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/about" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform group-hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Meet Islanema" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-islanema-green transition-colors">Meet Islanema</h3>
                <p className="text-gray-600 mb-4">Discover our vision for an Islamic film academy that cultivates spiritually grounded, technically skilled filmmakers.</p>
                <span className="text-islanema-green font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Section>
      
      {/* Program Overview */}
      <Section 
        title="The Islanema Program"
        subtitle="A hybrid Islamic film academy designed to cultivate Muslim filmmakers grounded in faith, ethics, and artistic excellence."
        pattern={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <InfoCard
            title="Spiritual Foundation"
            description="Training rooted in Islamic wisdom and ethics that guides creative expression and storytelling."
            icon={<Book size={36} />}
          />
          <InfoCard
            title="Technical Excellence"
            description="Comprehensive filmmaking education covering directing, writing, cinematography, and production."
            icon={<FilmIcon size={36} />}
          />
          <InfoCard
            title="Global Network"
            description="Connect with Muslim creatives worldwide and build relationships with industry professionals."
            icon={<Globe size={36} />}
          />
          <InfoCard
            title="Cultural Impact"
            description="Develop skills to create content that authentically represents Muslim perspectives and values."
            icon={<Users size={36} />}
          />
        </div>
        
        <div className="mt-12 bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h3 className="text-2xl font-serif font-medium mb-4 text-islanema-green text-center">One-Year Transformative Journey</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start mb-6">
                <div className="bg-islanema-gold rounded-full p-2 mr-4 mt-1">
                  <GraduationCap className="text-islanema-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Online Learning Phase</h4>
                  <p className="text-gray-600">
                    Ten months of virtual education combining Islamic ethics, film theory, and practical training with industry mentors.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-islanema-gold rounded-full p-2 mr-4 mt-1">
                  <FilmIcon className="text-islanema-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Residency in Fez</h4>
                  <p className="text-gray-600">
                    Six-week immersive experience in Morocco, where theory meets practice in collaborative film projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start mb-6">
                <div className="bg-islanema-gold rounded-full p-2 mr-4 mt-1">
                  <Users className="text-islanema-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Community Building</h4>
                  <p className="text-gray-600">
                    Collaborative projects and networking events fostering a supportive community of Muslim creatives.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-islanema-gold rounded-full p-2 mr-4 mt-1">
                  <Globe className="text-islanema-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Industry Launch</h4>
                  <p className="text-gray-600">
                    Portfolio development and industry connections to help graduates enter the media landscape with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild className="bg-islanema-green hover:bg-islanema-blue text-white">
              <Link to="/about">Learn More About Our Program</Link>
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Vision for the Future */}
      <CallToActionBanner
        title="Join the Vision for the Future"
        description="Support our goal to establish a two-year film academy with a dedicated campus and scholarships for talented Muslim filmmakers worldwide."
        buttonText="Support Islanema"
        buttonLink="/support-form"
        imageBackground={true}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
