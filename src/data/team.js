// ── TEAM ────────────────────────────────────────
// category: 'Lab Director' | 'Postdoc' | 'Research Associate' | 'PhD Student' | 'Masters Student'
export const currentTeam = [
  { initials:'NS', name:'Prof. Nabin Sharma',  role:'Lab Director & Associate Professor', category:'Lab Director',       bio:'Leads PIUS Lab with expertise in computer vision, AI, and autonomous drone systems. Co-Founder of UTS Intelligent Drone Lab with 19+ years experience.', email:'nabin.sharma@uts.edu.au', scholar:'https://scholar.google.com/citations?user=qBY-a8gAAAAJ' },
  { initials:'TR', name:'Dr. Tirthankar Raychaudhuri', role:'Industry Fellow',             category:'Industry Fellow',            bio:'Multi-UAV coordination and distributed control algorithms for swarm robotics in GPS-denied environments.', email:'Tirthankar.Raychaudhuri@uts.edu.au' },
  { initials:'GS', name:'Ms Geetha Sundarajan',         role:'PhD Candidate',                      category:'PhD Student',        bio:'30+ Year in Industry, currently a PhD Candidate at UTS, working on TBT', email:'alex.johnson@student.uts.edu.au' },
  { initials:'AA', name:'Abdulrahaman Alharabi',          role:'PhD Completed',                      category:'PhD Student',        bio:'Sentiment Analysis ffrom Arabic Social Media text', email:'priya.kumar@student.uts.edu.au' },
  ];

export const alumni = [
  { initials:'MS', name:'Dr. Muhummad Saqib',   degree:'PhD',     year:2019, nowAt:'CSIRO Data61',  nowRole:'Resarch Scientist',  thesis:'Distributed path planning for heterogeneous UAV swarms' },
  { initials:'DW', name:'Dr. Di Wu',  degree:'PhD',     year:2020, nowAt:'La Trobe University',            nowRole:'Senior Lecturer',        thesis:'Vision-based localisation for GPS-denied aerial vehicles' },
  { initials:'GV', name:'Gitarth R Vaishnav',       degree:'Bachelor of Computer Science (Hons)', year:2023, nowAt:'DroneShield',               nowRole:'AI Software Engineer' },
  { initials:'VS', name:'Vishesh Sompura', degree:'Master of IT',     year:2022, nowAt:'University of Melbourne', nowRole:'Postdoctoral Fellow',       thesis:'Multi-modal sensor fusion for autonomous ground vehicles' },
  { initials:'SSK', name:'Shudarshan Singh Kongan',    degree:'Master of Artifical Intelligence', year:2025, nowAt:'Aria',        nowRole:'Graduate Engineer' },
  { initials:'SS', name:'Suryansh Sharma',     degree:'Master of IT', year:2022, nowAt:'DroneShield',          nowRole:'Software Engineer' },
  { initials:'SV', name:'Shamsheer Verma',    degree:'Master of IT', year:2023, nowAt:'CommonWealth Bank',        nowRole:'Advanced Analytics Manager (Payments)' },
  { initials:'R', name:'Rosihin',     degree:'Master of Artifical Intelligence', year:2025, nowAt:'NSW Government',          nowRole:'Technical Policy Analyst' },
  { initials:'DB', name:'Debrit Bhattacharya',    degree:'Master of Artifical Intelligence', year:2025, nowAt:'University of Technology Sydney',        nowRole:'Casual Academic' },
  { initials:'AK', name:'Ankit Kapoor',     degree:'Master of IT', year:2022, nowAt:'Macquaire Group',          nowRole:'Senior Data Engineer' },
  { initials:'SS', name:'Shaurya Sharma',    degree:'Bachelor of Artifical Intellegence', year:2025, nowAt:'Boeing Australia',        nowRole:'Graduate Engineer' },
  { initials:'MN', name:'Mrunalini Nalamat',     degree:'PhD Candidate', year:2022, nowAt:'ASIC',          nowRole:'Technical Policy Analyst' },
  { initials:'AM', name:'Adit Mishra',    degree:'Master of Artifical Intelligence', year:2023, nowAt:'Boeing Australia',        nowRole:'Graduate Engineer' },
  { initials:'RV', name:'Radhika Verma',     degree:'Bachelor of Artifical Intellegence', year:2026, nowAt:'University of Technology Sydney',          nowRole:'Technical Policy Analyst' },
];

export const advisory = [
  { initials:'MB', name:'Prof. Michael Blumenstein',  title:'Co-Founder, Intelligent Drone Lab', org:'University of Technlogy Sydney',      bio:'Currently VP and Executive Dean at Flinders University.' },
]
export const teamCategories = ['All', ...new Set(currentTeam.map(m => m.category))];
