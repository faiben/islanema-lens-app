
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-islanema-blue text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-islanema-gold font-serif text-2xl font-bold">Islanema</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-islanema-gold transition-colors">Home</Link>
          <Link to="/trends" className="hover:text-islanema-gold transition-colors">Media Trends</Link>
          <Link to="/why" className="hover:text-islanema-gold transition-colors">Why It Matters</Link>
          <Link to="/about" className="hover:text-islanema-gold transition-colors">About Islanema</Link>
          <Link to="/support" className="hover:text-islanema-gold transition-colors">Support</Link>
        </div>
        
        <Button 
          className="hidden md:block bg-islanema-gold hover:bg-islanema-green text-islanema-blue hover:text-white" 
          asChild
        >
          <Link to="/contact">Get Involved</Link>
        </Button>
        
        <Button
          variant="ghost"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-islanema-blue py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-islanema-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/trends" className="hover:text-islanema-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              Media Trends
            </Link>
            <Link to="/why" className="hover:text-islanema-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              Why It Matters
            </Link>
            <Link to="/about" className="hover:text-islanema-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Islanema
            </Link>
            <Link to="/support" className="hover:text-islanema-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              Support
            </Link>
            <Button 
              className="w-full mt-2 bg-islanema-gold text-islanema-blue hover:bg-islanema-green hover:text-white" 
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
