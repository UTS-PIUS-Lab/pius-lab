import {
  Plane,
  Network,
  Search,
  Eye,
  Brain,
  Bot,
  Cog,
  Truck
} from "lucide-react";

import dronesGif from "./gifs/drones-uav.gif";
import swarmsGif from "./gifs/swarms-multi-agent.gif";
import searchRescueGif from "./gifs/aerial-search-rescue.gif";
import perceptionGif from "./gifs/perception-sensing.gif";
import aiAutonomyGif from "./gifs/ai-autonomy.gif";
import groundRobotsGif from "./gifs/ground-robots-ugvs.gif";

// ── RESEARCH AREAS ──────────────────────────────
// gif: shown on the homepage "What we work on" cards — drop a replacement
// file with the same name in src/data/gifs/ to swap the placeholder out.
export const researchAreas = [
  {
    icon: Plane,
    gif: dronesGif,
    color: 'orange',
    title: 'Drones & UAV Systems',
    summary:
      'Advanced UAV platforms with autonomous navigation, obstacle avoidance, and mission planning for complex real-world environments.',
  },
  {
    icon: Network,
    gif: swarmsGif,
    color: 'blue',
    title: 'Swarms & Multi-Agent Systems',
    summary:
      'Coordination algorithms and communication protocols enabling large teams of uncrewed vehicles to operate collectively.',
  },
  {
    icon: Search,
    gif: searchRescueGif,
    color: 'green',
    title: 'Aerial Search & Rescue',
    summary:
      'Autonomous aerial systems for life-saving missions in disaster-affected and hard-to-reach environments.',
  },
  {
    icon: Eye,
    gif: perceptionGif,
    color: 'orange',
    title: 'Perception & Sensing',
    summary:
      'Robust sensing stacks using cameras, LiDAR, radar, and sensor fusion for reliable situational awareness.',
  },
  {
    icon: Brain,
    gif: aiAutonomyGif,
    color: 'purple',
    title: 'AI & Autonomy',
    summary:
      'Machine learning and AI frameworks enabling vehicles to reason, plan, and adapt in dynamic, uncertain environments.',
  },
  {
    icon: Truck,
    gif: groundRobotsGif,
    color: 'blue',
    title: 'Ground Robots & UGVs',
    summary:
      'Uncrewed ground vehicles for agriculture, logistics, infrastructure inspection, and disaster response.',
  },
];