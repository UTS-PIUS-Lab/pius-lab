// ── TEAM ────────────────────────────────────────
// category: 'Lab Director' | 'Postdoc' | 'Research Associate' | 'PhD Student' | 'Masters Student'
export const currentTeam = [
  { initials:'NS', name:'Prof. Nabin Sharma',  role:'Lab Director & Associate Professor', category:'Lab Director',       bio:'Leads PIUS Lab with expertise in computer vision, AI, and autonomous drone systems. Co-Founder of UTS Intelligent Drone Lab with 19+ years experience.', email:'nabin.sharma@uts.edu.au', scholar:'https://scholar.google.com/citations?user=qBY-a8gAAAAJ' },
  { initials:'TR', name:'Dr. Tirthankar Raychaudhuri', role:'Industry Fellow',             category:'Industry Fellow',            bio:'Multi-UAV coordination and distributed control algorithms for swarm robotics in GPS-denied environments.', email:'Tirthankar.Raychaudhuri@uts.edu.au' },
  { initials:'GS', name:'Ms Geetha Sundarajan',         role:'PhD Candidate',                      category:'PhD Student',        bio:'30+ Year in Industry, currently a PhD Candidate at UTS, working on TBT', email:'alex.johnson@student.uts.edu.au' },
  { initials:'AA', name:'Abdulrahaman Alharabi',          role:'PhD Candidate',                      category:'PhD Student',        bio:'Sentiment Analysis ffrom Arabic Social Media text', email:'priya.kumar@student.uts.edu.au' },
  { initials:'TN', name:'Tom Nguyen',           role:'Masters Student',                    category:'Masters Student',    bio:'Real-time LiDAR-based perception for aerial search and rescue drone systems.', email:'tom.nguyen@student.uts.edu.au' },
  { initials:'SW', name:'Sara Williams',        role:'PhD Candidate',                      category:'PhD Student',        bio:'Human-robot teaming interfaces for semi-autonomous drone operations in emergency response.', email:'sara.williams@student.uts.edu.au' },
  { initials:'LB', name:'Liam Brown',           role:'Research Associate',                 category:'Research Associate', bio:'Embedded systems and hardware integration for autonomous drone platforms.', email:'liam.brown@uts.edu.au' },
];

export const alumni = [
  { initials:'MS', name:'Dr. Muhummad Saqib',   degree:'PhD',     year:2019, nowAt:'CSIRO Data61',  nowRole:'Resarch Scientist',  thesis:'Distributed path planning for heterogeneous UAV swarms' },
  { initials:'DW', name:'Dr. Di Wu',  degree:'PhD',     year:2020, nowAt:'La Trobe University',            nowRole:'Senior Lecturer',        thesis:'Vision-based localisation for GPS-denied aerial vehicles' },
  { initials:'GV', name:'Gitarth R Vaishnav',       degree:'Bachelor of Computer Science (Hons)', year:2023, nowAt:'DroneShield',               nowRole:'AI Software Engineer' },
  { initials:'VS', name:'Vishesh Sompura', degree:'Master of IT',     year:2022, nowAt:'University of Melbourne', nowRole:'Postdoctoral Fellow',       thesis:'Multi-modal sensor fusion for autonomous ground vehicles' },
  { initials:'SSK', name:'Shudarshan Singh Kongan',    degree:'Master of Artifical Intelligence', year:2025, nowAt:'Aria',        nowRole:'Graduate Engineer' },
  { initials:'SS', name:'Suryansh Sharma',     degree:'Master of IT', year:2022, nowAt:'DroneShield',          nowRole:'Software Engineer' },
  { initials:'SV', name:'Shamsheer Verma',    degree:'Master of IT', year:2023, nowAt:'CommonWealth Bank',        nowRole:'Advanced Analytics Manager (Payments)' },
  { initials:'R', name:'Roszhin',     degree:'Master of Artifical Intelligence', year:2025, nowAt:'NSW Government',          nowRole:'Technical Policy Analyst' },
  { initials:'DB', name:'Debrit Bhattacharya',    degree:'Master of Artifical Intelligence', year:2025, nowAt:'University of Technology Sydney',        nowRole:'Casual Academic' },
  { initials:'AK', name:'Ankit Kapoor',     degree:'Master of IT', year:2022, nowAt:'Macquaire Group',          nowRole:'Senior Data Engineer' },
  { initials:'SS', name:'Shaurya Sharma',    degree:'Bachelor of Artifical Intellegence', year:2025, nowAt:'Boeing Australia',        nowRole:'Graduate Engineer' },
  { initials:'MN', name:'Mrunalini Nalamat',     degree:'PhD Candidate', year:2022, nowAt:'ASIC',          nowRole:'Technical Policy Analyst' },
  { initials:'AM', name:'Adit Mishra',    degree:'Master of Artifical Intelligence', year:2023, nowAt:'Boeing Australia',        nowRole:'Graduate Engineer' },
  { initials:'RV', name:'Radhika Verma',     degree:'Bachelor of Artifical Intellegence', year:2026, nowAt:'University of Technology Sydney',          nowRole:'Technical Policy Analyst' },

];

export const advisory = [
  { initials:'MB', name:'Prof. Michael Blumenstein',  title:'Co-Founder, Intelligent Drone Lab', org:'University of Technlogy Sydney',      bio:'Over 20 years of industry experience in robotics and autonomous systems deployment.' },
  { initials:'PSP', name:'Dr. Paul Scullt-Power',  title:'First Astronut, Australia',  org:'CSIRO Data61',                       bio:'Bridging academia and national research priorities in machine learning and autonomous systems.' },
  { initials:'JB', name:'Mr. Jason Young', title:'Chief Executive Officer',        org:'Ripper Corporation', bio:'Strategic perspective on defence applications of uncrewed systems.' },
  { initials:'AT', name:'Mr. Angus Bean',    title:'Maneging Director, CEO',        org:'DroneShield', bio:'Strategic perspective on defence applications of uncrewed systems.' },

]
export const teamCategories = ['All', ...new Set(currentTeam.map(m => m.category))];
