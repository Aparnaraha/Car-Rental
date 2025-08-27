// src/components/Layout/SiteLayout.jsx
import React from 'react';
import TopHeader from './TopHeader';
import NavigationBar from './NavigationBar';
import TopFooter from './TopFooter';
import SiteFooter from './SiteFooter';
import EnquiryLocateUs from '../ui/EnquiryLocateUs';

// The SiteLayout component is a container for all pages, providing a consistent header and footer.
const SiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <NavigationBar />
      {/* Main content of the page */}
      <main className="flex-grow">
        {children}
      </main>
      <TopFooter />
      <EnquiryLocateUs/>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
