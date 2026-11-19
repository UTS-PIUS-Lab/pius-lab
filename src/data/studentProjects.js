// ── STUDENT PROJECTS ────────────────────────────
// Add new objects to this array to add student projects.
//   youtubeId:    the part after "watch?v=" in the YouTube link
//                 (https://www.youtube.com/watch?v=5NoXNYZFsEk → '5NoXNYZFsEk')
//   previewStart: second of the video the 5-second hover preview starts at
//                 (a link ending in &t=20s → 20)
//   noPreview:    true if the video's owner has disabled embedding; the card
//                 then shows only the thumbnail and still opens YouTube on click
//   description:  optional short summary shown on the card
export const studentProjects = [
  {
    id: 'lipi-sort',
    title: 'LiPi Sort',
    youtubeId: '5NoXNYZFsEk',
    previewStart: 0,
    event: 'UTS AI Showcase 2026',
    description: '',
  },
  {
    id: 'wastearm',
    title: 'WasteArm',
    youtubeId: 'p-g-D6q3rNA',
    previewStart: 0,
    noPreview: true, // embedding disabled on YouTube
    event: 'UTS AI Showcase 2026',
    description: '',
  },
  {
    id: 'autonav',
    title: 'AutoNav',
    youtubeId: 'KLLbJHyO2d4',
    previewStart: 0,
    event: 'UTS AI Showcase 2025',
    description: '',
  },
  {
    id: 'gesturefly',
    title: 'GestureFly',
    youtubeId: 'pyhoSb_k95A',
    previewStart: 20,
    event: 'UTS AI Showcase 2024',
    description: '',
  },
  {
    id: 'smart-autonomous-car',
    title: 'Smart Autonomous Car',
    youtubeId: 'SW-aHdWAClU',
    previewStart: 0,
    event: 'UTS AI Showcase 2024',
    description: '',
  },
];
