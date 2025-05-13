
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-islanema-blue mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <p>At Islanema, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Register for our program or services</li>
              <li>Sign up for our newsletter</li>
              <li>Complete a contact form</li>
              <li>Make a donation</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Communicate about news, events, and opportunities related to Islanema</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Sharing Your Information</h2>
            <p>We may share your personal information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction or deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:</p>
            <p className="my-4">
              Islanema Film Academy<br />
              Email: privacy@islanema.org<br />
              Address: 123 Film Street, Suite 100<br />
              Los Angeles, CA 90001
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
