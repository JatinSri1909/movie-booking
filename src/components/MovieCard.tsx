import { motion } from 'framer-motion';
import { type Movie } from '../lib/movie';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div className="space-y-3">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
            loading="lazy"
          />
        </div>
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-900">
        {movie.title} ({movie.year})
      </h3>
    </div>
  );
};
