
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-islanema-blue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-islanema-gold">Islanema</h3>
            <p className="text-sm text-gray-300">
              An Islamic film academy cultivating Muslim filmmakers grounded in faith, ethics, and artistic excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 text-islanema-gold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-islanema-gold transition-colors">Home</Link></li>
              <li><Link to="/trends" className="hover:text-islanema-gold transition-colors">Media Trends</Link></li>
              <li><Link to="/why" className="hover:text-islanema-gold transition-colors">Why It Matters</Link></li>
              <li><Link to="/about" className="hover:text-islanema-gold transition-colors">About Islanema</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 text-islanema-gold">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="hover:text-islanema-gold transition-colors">Support the Vision</Link></li>
              <li><Link to="/contact" className="hover:text-islanema-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/apply" className="hover:text-islanema-gold transition-colors">Apply for Program</Link></li>
              <li><Link to="/faq" className="hover:text-islanema-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 text-islanema-gold">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-islanema-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-islanema-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-islanema-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-islanema-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-300">Sign up for updates</p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm bg-white/10 rounded-l text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-islanema-gold"
              />
              <button
                type="submit"
                className="bg-islanema-gold text-islanema-blue px-3 py-2 rounded-r text-sm font-medium hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Islanema. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
