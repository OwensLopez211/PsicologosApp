import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow pt-[calc(32px+60px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;