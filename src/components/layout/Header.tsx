import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // Set initial dark mode and scroll listener
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <header 
        className={`w-full max-w-7xl bg-background/80 backdrop-blur-md rounded-3xl border border-border transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-0 max-w-3xl' : 'py-2 max-w-7xl'
        }`}
      >
        <div className={`mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-foreground hover:text-neon transition-colors">
          DC
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-background/95 backdrop-blur-md rounded-b-2xl border border-t-0 border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
        }`}>
          <div className="flex flex-col items-center space-y-4 px-6">
            <NavLink
              to="/"
              className={({ isActive }) => `block w-full text-center py-2 text-sm font-medium ${isActive ? 'text-neon' : 'text-foreground'} hover:text-neon transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `block w-full text-center py-2 text-sm font-medium ${isActive ? 'text-neon' : 'text-foreground'} hover:text-neon transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `block w-full text-center py-2 text-sm font-medium ${isActive ? 'text-neon' : 'text-foreground'} hover:text-neon transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `block w-full text-center py-2 text-sm font-medium ${isActive ? 'text-neon' : 'text-foreground'} hover:text-neon transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        </div>
      </header>
    </div>
  );
};

export default Header;