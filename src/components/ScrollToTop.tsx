import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Optional: Adds a smooth scrolling effect
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}
