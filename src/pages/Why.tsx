
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Card } from '@/components/ui/card';
import { Heart, Globe, BookOpen, Sparkles, Users } from 'lucide-react';
import CallToActionBanner from '@/components/CallToActionBanner';

const Why = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-islanema-blue text-white" fullWidth>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why It Matters</h1>
            <p className="text-xl opacity-90">
              The cultural, spiritual, and social impact of media representation and storytelling
            </p>
          </div>
        </div>
      </Section>
      
      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            The stories we consume shape our understanding of the world, inform our values, and influence how we relate to others. 
            For Muslims globally, the impact of media representation extends far beyond entertainment—it affects spiritual development, 
            cultural identity, and social cohesion.
          </p>
          
          {/* Removed FeaturedQuote component */}
          <div className="bg-islanema-cream p-8 rounded-lg text-center my-6">
            <p className="text-lg italic text-islanema-blue">
              Authentic storytelling is essential for preserving cultural identity and fostering understanding.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Impact Areas */}
      <Section 
        className="pattern-bg"
        title="The Multi-Dimensional Impact"
        subtitle="How media representation shapes individual lives and collective futures"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-green mb-6">
              <Heart size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Spiritual Development</h3>
            <p className="text-gray-600">
              Media that lacks spiritual depth reinforces materialistic worldviews, making it harder for youth 
              to connect with faith traditions and spiritual practices. The absence of positive religious 
              representation creates a false dichotomy between being "modern" and being faithful.
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-gold mb-6">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Identity Formation</h3>
            <p className="text-gray-600">
              For Muslim youth, rarely seeing positive reflections of their faith and culture in media 
              creates identity conflicts and internalized negative stereotypes. This affects self-esteem 
              and can lead to either rejection of faith or cultural isolation.
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-terracotta mb-6">
              <Globe size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Societal Perception</h3>
            <p className="text-gray-600">
              Persistent negative portrayals of Muslims contribute to Islamophobia, discrimination, and social 
              marginalization. For many non-Muslims, media becomes the primary source of information about 
              Islam and Muslim communities worldwide.
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-blue mb-6">
              <BookOpen size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Cultural Narrative</h3>
            <p className="text-gray-600">
              The rich artistic and intellectual traditions of Islamic civilization remain largely absent from 
              global storytelling. The wisdom, values, and aesthetic traditions that shaped world history 
              are often reduced to exotic backdrops or ignored entirely.
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-green mb-6">
              <Sparkles size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Ethical Frameworks</h3>
            <p className="text-gray-600">
              Mainstream content often normalizes behaviors that directly contradict Islamic ethical teachings, 
              creating tension between media consumption and religious values. Few alternatives exist that 
              entertain while respecting faith-based moral frameworks.
            </p>
          </Card>
          
          <Card className="p-8 bg-white shadow-md border-none">
            <div className="text-islanema-gold mb-6">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Community Cohesion</h3>
            <p className="text-gray-600">
              Media representation impacts how Muslim communities interact internally and with broader society. 
              Authentic storytelling can bridge divides, foster understanding, and create space for 
              meaningful dialogue across cultural and religious differences.
            </p>
          </Card>
        </div>
      </Section>
      
      {/* Youth Impact Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">The Impact on Muslim Youth</h2>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-serif font-medium mb-4 text-islanema-terracotta">The Challenge</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>Muslim youth report feeling their faith is misunderstood by wider society</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>Many have experienced discomfort with how Muslims are portrayed in media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>Struggle to reconcile religious values with popular entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>Feel pressure to choose between cultural/religious identity and "fitting in"</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">The Opportunity</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>Young Muslims want to see more positive representation in media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>Interest in content that engages with faith in meaningful ways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>Belief that sharing authentic Muslim stories could reduce Islamophobia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>Willingness to pursue careers in media with pathways that honor their values</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Removed FeaturedQuote component */}
          <div className="bg-islanema-cream p-8 rounded-lg text-center my-6">
            <p className="text-lg italic text-islanema-blue">
              Representation in media is crucial for developing a sense of belonging in society.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Expert Insights */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Expert Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-md">
              <p className="italic text-gray-600 mb-4">
                "Media shapes how we perceive ourselves and others. Authentic representation is essential for fostering understanding and empathy across cultural differences."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-islanema-blue flex items-center justify-center text-white font-serif text-xl">
                  MA
                </div>
                <div className="ml-4">
                  <p className="font-medium">Dr. Mustafa Akyol</p>
                  <p className="text-sm text-gray-500">Cultural Historian, Author</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-none shadow-md">
              <p className="italic text-gray-600 mb-4">
                "Ethical storytelling has the power to transform perceptions and build bridges between communities, creating space for meaningful dialogue and mutual respect."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-islanema-green flex items-center justify-center text-white font-serif text-xl">
                  SH
                </div>
                <div className="ml-4">
                  <p className="font-medium">Sarah Hasan</p>
                  <p className="text-sm text-gray-500">Filmmaker, Media Educator</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* The Vision Forward */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">The Vision Forward</h2>
          <p className="text-lg text-gray-700 mb-8">
            Addressing these challenges requires more than critique—it demands the cultivation of 
            a new generation of storytellers who can create content that is both technically excellent 
            and spiritually grounded.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              asChild
              className="bg-islanema-green hover:bg-islanema-blue text-white text-lg px-8 py-6 h-auto"
            >
              <Link to="/about">Discover the Islanema Solution</Link>
            </Button>
          </div>
          
          {/* Removed FeaturedQuote component */}
          <div className="bg-islanema-cream p-8 rounded-lg text-center my-6">
            <p className="text-lg italic text-islanema-blue">
              Training spiritually-grounded filmmakers is key to transforming media representation.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToActionBanner 
        title="Be Part of the Change"
        description="Support the development of a new generation of Muslim filmmakers who will transform media representation through faith-based, ethical storytelling."
        buttonText="Support Our Mission"
        buttonLink="/support"
        className="bg-islanema-gold text-islanema-blue"
      />
      
      <Footer />
    </div>
  );
};

export default Why;
