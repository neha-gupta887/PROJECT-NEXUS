import { useState } from 'react';
import { Calendar, Plus, Check, Clock, Book, Beaker, Coffee, GraduationCap, Dumbbell, Pencil } from 'lucide-react';
import { plannerTasks as initialTasks } from '../data/mockData';

interface Task {
  id: string;
  time: string;
  title: string;
  duration: string;
  type: string;
  completed: boolean;
}

export default function Planner() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTask, setNewTask] = useState({
    time: '',
    title: '',
    duration: '',
    type: 'study',
  });

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const addTask = () => {
    if (!newTask.time || !newTask.title || !newTask.duration) return;

    const task: Task = {
      id: Date.now().toString(),
      time: newTask.time,
      title: newTask.title,
      duration: newTask.duration,
      type: newTask.type,
      completed: false,
    };

    setTasks([...tasks, task].sort((a, b) => a.time.localeCompare(b.time)));
    setNewTask({ time: '', title: '', duration: '', type: 'study' });
    setShowAddForm(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'class':
        return <Book className="w-4 h-4" />;
      case 'lab':
        return <Beaker className="w-4 h-4" />;
      case 'break':
        return <Coffee className="w-4 h-4" />;
      case 'tutorial':
        return <GraduationCap className="w-4 h-4" />;
      case 'sports':
        return <Dumbbell className="w-4 h-4" />;
      case 'study':
        return <Pencil className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'class':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'lab':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'break':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'tutorial':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'sports':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400';
      case 'study':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/50">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Day Planner</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add New Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time
              </label>
              <input
                type="time"
                value={newTask.time}
                onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration
              </label>
              <input
                type="text"
                value={newTask.duration}
                onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
                placeholder="e.g., 1h, 30min"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                placeholder="Task title"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Type
              </label>
              <select
                value={newTask.type}
                onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              >
                <option value="class">Class</option>
                <option value="lab">Lab</option>
                <option value="tutorial">Tutorial</option>
                <option value="study">Study</option>
                <option value="sports">Sports</option>
                <option value="break">Break</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={addTask}
              className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Add Task
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Timeline</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`relative pl-8 pb-6 border-l-2 ${
                task.completed
                  ? 'border-green-500 dark:border-green-400'
                  : 'border-gray-300 dark:border-gray-600'
              } last:border-l-0 last:pb-0`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  task.completed
                    ? 'bg-green-500 border-green-500 dark:bg-green-400 dark:border-green-400'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
                }`}
              >
                {task.completed && <Check className="w-4 h-4 text-white" />}
              </button>

              <div
                className={`ml-4 p-4 rounded-xl transition-all ${
                  task.completed
                    ? 'bg-gray-50/50 dark:bg-gray-700/30 opacity-60'
                    : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {task.time}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getTypeColor(
                          task.type
                        )}`}
                      >
                        {getTypeIcon(task.type)}
                        {task.type}
                      </span>
                    </div>
                    <p
                      className={`font-semibold ${
                        task.completed
                          ? 'text-gray-500 dark:text-gray-400 line-through'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
