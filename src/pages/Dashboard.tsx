import { useAuth } from '../contexts/AuthContext';
import { Clock, AlertCircle, UtensilsCrossed, Car, Calendar, MapPin, Users } from 'lucide-react';
import { todaysPlan, smartAlerts, messCrowd, travelMatches } from '../data/mockData';

export default function Dashboard() {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {getGreeting()}, {user?.fullName}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening on your campus today
        </p>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Today's AI Plan</h2>
        </div>
        <div className="space-y-3">
          {todaysPlan.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-16 text-center">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.time}
                  </p>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  item.type === 'class'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : item.type === 'lab'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : item.type === 'break'
                    ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    : item.type === 'tutorial'
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400'
                }`}
              >
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Smart Alerts</h2>
        </div>
        <div className="space-y-3">
          {smartAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border-l-4 ${
                alert.type === 'warning'
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                  : alert.type === 'urgent'
                  ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">{alert.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-4">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Mess Crowd Prediction</h2>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current Status</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {messCrowd.currentStatus}
              </p>
            </div>
            <div className="w-20 h-20">
              <div className="relative w-full h-full">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - messCrowd.percentage / 100)}`}
                    className="text-green-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {messCrowd.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <p className="font-semibold text-blue-900 dark:text-blue-300">Best Time to Visit</p>
            </div>
            <p className="text-blue-700 dark:text-blue-400">{messCrowd.bestTime}</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-900 dark:text-white">Today's Menu</p>
            {messCrowd.todaysMenu.map((menu, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{menu.meal}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{menu.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <Car className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Travel Matches</h2>
        </div>
        <div className="space-y-3">
          {travelMatches.map((match) => (
            <div
              key={match.id}
              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {match.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white">{match.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {match.branch} - {match.year} Year
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {match.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(match.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {match.seats} seats
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-sm font-medium">
                  Join Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
