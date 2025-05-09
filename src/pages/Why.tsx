import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FeaturedQuote from '@/components/FeaturedQuote';
import { Card } from '@/components/ui/card';
import { Heart, Globe, BookOpen, Sparkles, Users } from 'lucide-react';
import CallToActionBanner from '@/components/CallToActionBanner';
import Citation from '@/components/Citation';
import SourcesList from '@/components/SourcesList';

const Why = () => {
  // Keep track of all citations used on this page
  const citationsUsed = [
    "pew2021", "ahmed2022", "yusuf2019", "iiit2023", "gallup2020", 
    "muslim_youth_survey", "akyol2023", "hasan2022", "abdullah2022"
  ];

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
            cultural identity, and social cohesion. <Citation sourceId="iiit2023" />
          </p>
          
          <FeaturedQuote 
            quote="He who controls the narrative controls the destiny of a people. Our duty is not merely to critique existing stories, but to tell our own with beauty, wisdom, and excellence."
            author="Sheikh Hamza Yusuf"
            sourceId="yusuf2019"
          />
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
              to connect with faith traditions and spiritual practices. <Citation sourceId="abdullah2022" /> The absence of positive religious 
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
              creates identity conflicts and internalized negative stereotypes. <Citation sourceId="ahmed2022" /> This affects self-esteem 
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
              marginalization. <Citation sourceId="gallup2020" /> For many non-Muslims, media becomes the primary source of information about 
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
              global storytelling. <Citation sourceId="akyol2023" /> The wisdom, values, and aesthetic traditions that shaped world history 
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
              creating tension between media consumption and religious values. <Citation sourceId="abdullah2022" page="42" /> Few alternatives exist that 
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
              <Citation sourceId="pew2021" /> Authentic storytelling can bridge divides, foster understanding, and create space for 
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
                    <span>70% of Muslim youth report feeling their faith is misunderstood by wider society <Citation sourceId="muslim_youth_survey" page="23" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>63% have experienced discomfort with how Muslims are portrayed in media <Citation sourceId="muslim_youth_survey" page="27" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>42% struggle to reconcile religious values with popular entertainment <Citation sourceId="pew2021" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-terracotta mr-2">•</span>
                    <span>56% feel pressure to choose between cultural/religious identity and "fitting in" <Citation sourceId="ahmed2022" page="114" /></span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-serif font-medium mb-4 text-islanema-green">The Opportunity</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>89% of young Muslims want to see more positive representation in media <Citation sourceId="muslim_youth_survey" page="42" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>76% are interested in content that engages with faith in meaningful ways <Citation sourceId="muslim_youth_survey" page="45" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>91% believe sharing authentic Muslim stories could reduce Islamophobia <Citation sourceId="gallup2020" /></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islanema-green mr-2">•</span>
                    <span>67% would pursue careers in media if they saw pathways that honored their values <Citation sourceId="muslim_youth_survey" page="51" /></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <FeaturedQuote 
            quote="When young people don't see themselves represented in the stories that shape our culture, they begin to question their place in that culture. Media representation isn't just about inclusion—it's about belonging."
            author="Dr. Nadia Ahmed"
            sourceId="ahmed2022"
          />
        </div>
      </Section>
      
      {/* Expert Insights */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Expert Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-md">
              <p className="italic text-gray-600 mb-4">
                "The stories we consume shape our imagination of what's possible. When Muslims are consistently 
                portrayed as 'the other,' it not only distorts how others see us but limits how we see ourselves. 
                Reclaiming our narrative tradition is both a spiritual and cultural imperative." <Citation sourceId="akyol2023" page="87" />
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
                "Media doesn't just reflect our world—it actively shapes it. By training a generation of 
                Muslim filmmakers grounded in both technical excellence and spiritual wisdom, we can 
                transform the cultural landscape and revive a tradition of ethical storytelling." <Citation sourceId="hasan2022" />
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
            and spiritually grounded. <Citation sourceId="hasan2022" page="34" />
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              asChild
              className="bg-islanema-green hover:bg-islanema-blue text-white text-lg px-8 py-6 h-auto"
            >
              <Link to="/about">Discover the Islanema Solution</Link>
            </Button>
          </div>
          
          <FeaturedQuote 
            quote="We don't just need different stories; we need different storytellers—those who bring spiritual depth, cultural wisdom, and ethical frameworks to their creative work."
            author="Ismail Abdullah"
            sourceId="abdullah2022"
          />
        </div>
      </Section>
      
      {/* Sources Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SourcesList citations={citationsUsed} />
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
