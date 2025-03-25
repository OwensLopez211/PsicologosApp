import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow pt-[92px]"> {/* 32px announcement + 60px navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;