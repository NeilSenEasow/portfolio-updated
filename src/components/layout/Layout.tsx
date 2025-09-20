import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  useEffect(() => {
    // Custom cursor logic
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;