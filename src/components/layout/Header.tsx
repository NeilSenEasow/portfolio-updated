import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useAnimation, Variants, motion } from 'framer-motion';

type HeaderVariant = 'grow' | 'shrink';

const headerVariants: Variants = {
  grow: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  shrink: {
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const location = useLocation();
  const controls = useAnimation();

  // Set initial dark mode
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = saved ? JSON.parse(saved) : prefersDark;
    
    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        controls.start(scrolled ? 'shrink' : 'grow');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, controls]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle dark mode with proper state management
  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  }, [isDarkMode]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <motion.header
        className={`w-full max-w-7xl bg-background/80 backdrop-blur-md rounded-3xl border border-border transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-0 max-w-3xl' : 'py-2 max-w-7xl'
        }`}
        initial="grow"
        animate={controls}
        variants={headerVariants}
        aria-label="Main navigation"
      >
        <div className={`mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="w-1/3">
            <NavLink to="/" className="text-2xl font-bold text-foreground hover:text-neon transition-colors">
              DC
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              id="mobile-menu-button"
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
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
          <div 
            id="mobile-menu"
            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted'
                }`}
                role="menuitem"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted'
                }`}
                role="menuitem"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted'
                }`}
                role="menuitem"
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted'
                }`}
                role="menuitem"
              >
                Contact
              </NavLink>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                role="menuitem"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" aria-hidden="true" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="w-1/3 flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;