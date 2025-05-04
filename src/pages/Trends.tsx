
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import StatCard from '@/components/StatCard';
import FeaturedQuote from '@/components/FeaturedQuote';
import { Tv, FilmIcon, Users, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

const Trends = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-islanema-blue text-white" fullWidth>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Trends in Global Media</h1>
            <p className="text-xl opacity-90">
              Exploring representation, narratives, and values in contemporary film and television
            </p>
          </div>
        </div>
      </Section>
      
      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Today's media landscape is more influential than ever, shaping how we perceive ourselves and others. 
            This analysis examines key trends in global film and television with a focus on representation, 
            storytelling approaches, and the values being communicated through mainstream content.
          </p>
          
          <FeaturedQuote 
            quote="What we see on screens becomes part of our mental framework—affecting everything from self-perception to how we understand and interact with those different from ourselves."
            author="Dr. Amina Rahman"
            source="Media Representation Studies, Oxford"
          />
        </div>
      </Section>
      
      {/* Key Trends Section */}
      <Section className="bg-gray-50" title="Key Media Trends">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 border-l-4 border-l-islanema-green">
            <div className="flex items-start mb-4">
              <Tv className="text-islanema-green mr-4" size={24} />
              <h3 className="text-xl font-serif font-medium">Limited Spiritual Depth</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Mainstream entertainment often avoids meaningful engagement with spirituality and faith, 
              presenting a materialistic worldview that lacks the richness of religious tradition and ethical frameworks.
            </p>
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Films addressing spirituality substantively</span>
                <span className="font-medium">7%</span>
              </div>
              <Progress value={7} className="h-2" />
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-islanema-terracotta">
            <div className="flex items-start mb-4">
              <Users className="text-islanema-terracotta mr-4" size={24} />
              <h3 className="text-xl font-serif font-medium">Misrepresentation of Muslims</h3>
            </div>
            <p className="text-gray-600 mb-4">
              When included, Muslim characters are frequently reduced to stereotypes, associated with terrorism, 
              or portrayed as culturally backward, reinforcing harmful biases and misconceptions.
            </p>
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Stereotypical portrayals of Muslims</span>
                <span className="font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-islanema-blue">
            <div className="flex items-start mb-4">
              <FilmIcon className="text-islanema-blue mr-4" size={24} />
              <h3 className="text-xl font-serif font-medium">Values Disconnect</h3>
            </div>
            <p className="text-gray-600 mb-4">
              The moral frameworks in popular content often directly conflict with Islamic ethics, 
              normalizing behaviors and relationships that challenge core religious and family values.
            </p>
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Content aligning with traditional religious values</span>
                <span className="font-medium">12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-islanema-gold">
            <div className="flex items-start mb-4">
              <MessageSquare className="text-islanema-gold mr-4" size={24} />
              <h3 className="text-xl font-serif font-medium">Homogeneous Narratives</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Despite calls for diversity, storytelling approaches remain largely Western-centric, 
              with limited exploration of non-Western narrative traditions and cultural perspectives.
            </p>
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-sm">
                <span>Films from non-Western narrative traditions</span>
                <span className="font-medium">9%</span>
              </div>
              <Progress value={9} className="h-2" />
            </div>
          </Card>
        </div>
      </Section>
      
      {/* Representation Stats */}
      <Section title="Muslim Representation in Media">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="<1%"
            description="of characters in top films and TV shows are identifiably Muslim"
          />
          <StatCard 
            number="80%"
            description="of Muslim characters are linked to violence or terrorism"
            color="bg-islanema-terracotta"
          />
          <StatCard 
            number="12%"
            description="of Americans say they personally know a Muslim person"
          />
          <StatCard 
            number="93%"
            description="of Americans say their perception of Muslims is influenced by media"
            color="bg-islanema-terracotta"
          />
        </div>
      </Section>
      
      {/* Case Studies */}
      <Section 
        className="bg-gray-50" 
        title="Media Impact Case Studies"
        subtitle="Examining how storytelling shapes perceptions and cultural understanding"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Film frames" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-2">Hollywood's Muslim Narrative</h3>
              <p className="text-gray-600 mb-4">
                A study of the top 200 films from 2015-2022 revealed that 87% of Muslim characters were associated 
                with violence, extremism, or cultural backwardness. Only 1.6% of speaking roles went to Muslim characters,
                despite Muslims representing 25% of the global population.
              </p>
              <p className="text-gray-600">
                The impact extends beyond entertainment—these portrayals shape public policy discussions, social 
                attitudes, and self-perception among Muslim youth.
              </p>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Video screens" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-2">Spiritual Storytelling Vacuum</h3>
              <p className="text-gray-600 mb-4">
                Content analysis of streaming platforms shows less than 4% of shows and films meaningfully 
                engage with spirituality or faith as central themes. When religion is portrayed, it's often 
                stereotyped, treated as an obstacle, or used merely as cultural backdrop.
              </p>
              <p className="text-gray-600">
                This creates a disconnection between media consumption and the lived experiences of billions 
                who consider faith an essential part of their identity and worldview.
              </p>
            </div>
          </Card>
        </div>
      </Section>
      
      {/* Media Consumption */}
      <Section title="Media Consumption Patterns">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-medium mb-6 text-center">Average Weekly Media Consumption</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Children (8-12)</span>
                  <span>42.5 hours</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Teens (13-18)</span>
                  <span>44.5 hours</span>
                </div>
                <Progress value={89} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Adults (18-34)</span>
                  <span>38 hours</span>
                </div>
                <Progress value={76} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Adults (35+)</span>
                  <span>28 hours</span>
                </div>
                <Progress value={56} className="h-3" />
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-center">
              <p className="text-lg font-medium mb-2">Media now consumes more of our waking hours than:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">School/Work</p>
                  <p className="text-sm text-gray-500">For most youth</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Family Interaction</p>
                  <p className="text-sm text-gray-500">By 3x margin</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Religious Activities</p>
                  <p className="text-sm text-gray-500">By 15x margin</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Reading</p>
                  <p className="text-sm text-gray-500">By 7x margin</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              These trends highlight the urgent need for content that represents diverse perspectives,
              engages meaningfully with faith and ethics, and offers alternatives to the dominant narratives.
            </p>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Trends;
