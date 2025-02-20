import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Image, Download } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isBookingActive = location.pathname === '/booking' || location.pathname.startsWith('/selection');
  const isActivityActive = location.pathname === '/activity';

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed left-[27px] top-[39px] h-[calc(100vh-78px)] w-[250px] rounded-xl bg-black p-6">
        <div className="mb-12 flex items-center justify-center gap-2">
          <Globe className="h-7 w-7 text-white" />
          <h1 className="text-2xl text-white">Almanack</h1>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => navigate('/booking')}
            className={`flex w-[200px] items-center gap-3 rounded-lg px-4 py-2 transition-colors ${
              isBookingActive 
                ? 'bg-white text-black' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Image className={`h-6 w-6 ${isBookingActive ? 'text-black' : 'text-white'}`} />
            <span className="font-bold">Booking</span>
          </motion.button>
          
          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => navigate('/activity')}
            className={`flex w-[200px] items-center gap-3 rounded-lg px-4 py-2 transition-colors ${
              isActivityActive 
                ? 'bg-white text-black' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Download className={`h-6 w-6 ${isActivityActive ? 'text-black' : 'text-white'}`} />
            <span className="font-bold">Activity</span>
          </motion.button>
        </div>
      </nav>
      
      <main className="ml-[277px] min-h-screen">
        <div className="mt-[39px] flex items-center justify-between px-[39px]">
          {children}
        </div>
      </main>
    </div>
  );
};