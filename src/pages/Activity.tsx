import { Layout } from '../components/Layout';
import { useStore } from '../lib/store';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Activity = () => {
  const bookings = useStore((state) => state.bookings);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full space-y-6"
      >
        <div className="flex items-start justify-between">
          <div className="w-[867px]">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Activity</h1>

            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black">
                    <th className="pb-4 text-left text-sm font-bold text-black">ID</th>
                    <th className="pb-4 text-left text-sm font-bold text-black">Movie</th>
                    <th className="pb-4 text-left text-sm font-bold text-black">Tickets</th>
                    <th className="pb-4 text-left text-sm font-bold text-black">Amount</th>
                    <th className="pb-4 text-left text-sm font-bold text-black">Time</th>
                    <th className="pb-4 text-left text-sm font-bold text-black">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={booking.id} className="border-b border-black">
                      <td className="py-4 text-gray-900">{(index + 1).toString().padStart(2, '0')}</td>
                      <td className="py-4 text-gray-900">{booking.movie}</td>
                      <td className="py-4 text-gray-900">{booking.tickets}</td>
                      <td className="py-4 text-gray-900">${booking.amount.toFixed(2)}</td>
                      <td className="py-4 text-gray-900">{booking.time}</td>
                      <td className="py-4 text-gray-900">{booking.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      </motion.div>
    </Layout>
  );
};

export default Activity;