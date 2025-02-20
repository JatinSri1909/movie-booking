import { useState } from 'react';
import { Layout } from '../components/Layout';
import { MovieCard } from '../components/MovieCard';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { movies } from '../lib/movie';
import { Search, User } from 'lucide-react';
import { useStore } from '../lib/store';

const Booking = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full space-y-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-[800px]">
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg bg-[#d9d9d9] px-4 py-3 pr-12 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
          </div>

          {user && (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900">Naval</span>
                <span className="text-base font-bold text-gray-900">Ravikant</span>
              </div>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Good Morning Mr. Naval Ravikant!
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => navigate(`/selection/${movie.id}`)}
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Booking;