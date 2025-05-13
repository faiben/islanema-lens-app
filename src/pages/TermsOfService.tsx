
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-islanema-blue mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none">
            <p>Welcome to Islanema. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our platform.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Islanema website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">2. Use of Services</h2>
            <p>Our services are intended for users who are at least 18 years of age or who have permission from a parent or guardian. By using our services, you represent and warrant that you meet these requirements.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">3. User Accounts</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">4. Intellectual Property</h2>
            <p>The Islanema website and its original content, features, and functionality are owned by Islanema and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">5. User Content</h2>
            <p>By submitting content to Islanema, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media. You retain all rights to your content.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">6. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following activities:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Using the service for any illegal purpose or in violation of any laws</li>
              <li>Posting unauthorized commercial communications</li>
              <li>Engaging in unauthorized framing or linking to the website</li>
              <li>Attempting to interfere with the proper working of the service</li>
              <li>Bypassing measures used to prevent or restrict access to the service</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">7. Termination</h2>
            <p>We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach the Terms.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">8. Limitation of Liability</h2>
            <p>In no event shall Islanema, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-serif font-semibold text-islanema-blue mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="my-4">
              Islanema Film Academy<br />
              Email: legal@islanema.org<br />
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

export default TermsOfService;
