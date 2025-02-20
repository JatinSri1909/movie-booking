import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { movies } from '../lib/movie';
import { useStore } from '../lib/store';
import { motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast-context';
import { format } from 'date-fns';
import { Sun, Sun as SunMedium, Moon, Calendar, User } from 'lucide-react';

const Selection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const addBooking = useStore((state) => state.addBooking);
  
  const movie = movies.find((m) => m.id === id);
  const [tickets, setTickets] = useState(1);
  const [time, setTime] = useState('12:00');
  const [date, setDate] = useState(format(new Date(), 'dd-MM-yyyy'));

  const showTimes = [
    { time: '09:00', icon: Sun },
    { time: '12:00', icon: SunMedium },
    { time: '18:00', icon: Moon },
  ];

  if (!movie) return null;

  const handleBook = () => {
    addBooking({
      id: Math.random().toString(36).substr(2, 9),
      movie: movie.title,
      tickets,
      amount: tickets * 25,
      time,
      date,
    });

    toast({
      title: "Success",
      description: "Tickets Booked Successfully!",
    });

    navigate('/activity');
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full space-y-8"
      >
        <div className="flex items-start justify-between">
          <div className="h-[300px] w-[967px] overflow-hidden rounded-[10px]">
            <img
              src={movie.image}
              alt={movie.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">Naval</span>
              <span className="text-base font-bold text-gray-900">Ravikant</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          {movie.title} ({movie.year})
        </h1>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-[120px]">
              <label className="text-sm font-bold text-black">Ticket Count</label>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTickets(Math.max(1, tickets - 1))}
                className="text-xl text-black"
              >
                -
              </button>
              <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-black">
                <span className="text-xl text-white">{tickets}</span>
              </div>
              <button
                onClick={() => setTickets(tickets + 1)}
                className="text-xl text-black"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[120px]">
              <label className="text-sm font-bold text-black">Show Time</label>
            </div>
            <div className="flex gap-4">
              {showTimes.map(({ time: t, icon: Icon }) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 transition-colors ${
                    time === t 
                      ? 'bg-black text-white' 
                      : 'bg-[#d9d9d9] text-black hover:bg-[#c4c4c4]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[120px]">
              <label className="text-sm font-bold text-black">Date</label>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-[#d9d9d9] px-4 py-2 text-black">
              <Calendar className="h-4 w-4" />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBook}
            className="w-[200px] rounded-lg bg-black py-3 text-white transition-colors hover:bg-black/90"
          >
            Book Ticket
          </motion.button>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Selection;