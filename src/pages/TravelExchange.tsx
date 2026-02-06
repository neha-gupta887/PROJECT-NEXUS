import { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Users, Plus } from 'lucide-react';
import { travelMatches as initialMatches } from '../data/mockData';

export default function TravelExchange() {
  const [matches, setMatches] = useState(initialMatches);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    time: '',
    seats: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setFormData({ destination: '', date: '', time: '', seats: '', notes: '' });
  };

  const handleJoinRide = (id: string) => {
    setMatches(
      matches.map((match) =>
        match.id === id ? { ...match, seats: match.seats - 1 } : match
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Travel Exchange</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Find travel companions heading to the same destination
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Post Ride
          </button>
        </div>
      </div>

      {showForm && (
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Share Your Travel Plans
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Where are you going?"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Available Seats
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.seats}
                  onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                  placeholder="How many seats?"
                  min="1"
                  max="10"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any additional information..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Post Ride
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Available Rides
        </h2>
        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-700/30 rounded-2xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {match.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">{match.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {match.branch} - {match.year} Year
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium">{match.destination}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                      {new Date(match.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      {match.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-purple-700 dark:text-purple-400">
                      <Users className="w-4 h-4" />
                      {match.seats} {match.seats === 1 ? 'seat' : 'seats'} left
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleJoinRide(match.id)}
                  disabled={match.seats === 0}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {match.seats === 0 ? 'Full' : 'Join Ride'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
