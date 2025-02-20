import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../lib/store';
import { useToast } from '../hooks/use-toast-context';
import { Globe, User, Keyboard } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'naval.ravikant' && password === '05111974') {
      setUser(username);
      navigate('/booking');
    } else {
      toast({
        title: "Error",
        description: "Wrong credentials",
        variant: "destructive"
      });
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-lg bg-black p-8"
      >
        <div className="mb-8 flex items-center justify-center gap-2 text-center">
          <Globe className="h-7 w-7 text-white" />
          <h1 className="text-3xl text-white">Almanack</h1>
        </div>
        
        <form onSubmit={handleLogin} className="mx-auto max-w-[240px] space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full rounded-md bg-white px-10 py-2 text-black font-medium text-center placeholder:text-black placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          
          <div className="relative">
            <Keyboard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-md bg-white px-10 py-2 text-black font-medium text-center placeholder:text-black placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-2xl bg-white py-2 text-black font-semibold transition-colors hover:bg-white/90"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;