export const todaysPlan = [
  { time: '08:00 AM', title: 'Data Structures Lecture', location: 'Room 301', type: 'class' },
  { time: '10:00 AM', title: 'Machine Learning Lab', location: 'Lab 2', type: 'lab' },
  { time: '01:00 PM', title: 'Lunch Break', location: 'Mess', type: 'break' },
  { time: '02:30 PM', title: 'DBMS Tutorial', location: 'Room 205', type: 'tutorial' },
  { time: '05:00 PM', title: 'Basketball Practice', location: 'Sports Complex', type: 'sports' },
];

export const smartAlerts = [
  {
    id: '1',
    type: 'warning',
    title: 'Low Attendance Alert',
    message: 'Your Computer Networks attendance is at 72%. Need 3 more classes to reach 75%',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'urgent',
    title: 'Assignment Due Tomorrow',
    message: 'Software Engineering project submission due on 8th Feb, 11:59 PM',
    time: '5 hours ago',
  },
  {
    id: '3',
    type: 'info',
    title: 'Upcoming Seminar',
    message: 'Guest lecture on AI/ML by Prof. Rajesh Kumar - 9th Feb, 3:00 PM',
    time: '1 day ago',
  },
];

export const messCrowd = {
  currentStatus: 'Low',
  percentage: 25,
  bestTime: '08:30 AM - 09:15 AM',
  todaysMenu: [
    { meal: 'Breakfast', items: 'Poha, Idli, Tea, Banana' },
    { meal: 'Lunch', items: 'Dal Tadka, Paneer Curry, Roti, Rice, Salad' },
    { meal: 'Dinner', items: 'Rajma, Mixed Veg, Roti, Rice, Curd' },
  ],
};

export const travelMatches = [
  {
    id: '1',
    name: 'Rahul Verma',
    branch: 'CSE',
    year: '3rd',
    destination: 'Delhi',
    date: '2026-02-08',
    time: '06:00 PM',
    seats: 2,
    avatar: 'RV',
  },
  {
    id: '2',
    name: 'Ananya Singh',
    branch: 'IT',
    year: '2nd',
    destination: 'Mumbai',
    date: '2026-02-10',
    time: '08:00 AM',
    seats: 3,
    avatar: 'AS',
  },
  {
    id: '3',
    name: 'Karthik Rao',
    branch: 'ECE',
    year: '4th',
    destination: 'Bangalore',
    date: '2026-02-09',
    time: '05:30 PM',
    seats: 1,
    avatar: 'KR',
  },
];

export const plannerTasks = [
  {
    id: '1',
    time: '08:00',
    title: 'Data Structures Lecture',
    duration: '1h',
    type: 'class',
    completed: true,
  },
  {
    id: '2',
    time: '10:00',
    title: 'Machine Learning Lab',
    duration: '2h',
    type: 'lab',
    completed: true,
  },
  {
    id: '3',
    time: '13:00',
    title: 'Lunch Break',
    duration: '1h',
    type: 'break',
    completed: false,
  },
  {
    id: '4',
    time: '14:30',
    title: 'DBMS Tutorial',
    duration: '1h',
    type: 'tutorial',
    completed: false,
  },
  {
    id: '5',
    time: '17:00',
    title: 'Basketball Practice',
    duration: '1.5h',
    type: 'sports',
    completed: false,
  },
  {
    id: '6',
    time: '19:00',
    title: 'Study Group - OS',
    duration: '2h',
    type: 'study',
    completed: false,
  },
];

export const branches = ['CSE', 'IT', 'ECE', 'ME', 'Civil', 'Other'];
export const years = ['1st', '2nd', '3rd', '4th'];
