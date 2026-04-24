import { SiDart, SiFlutter, SiFirebase, SiSocketdotio, SiAppstore, SiGoogleplay, SiStripe, SiGithub } from "react-icons/si";
import { FaCubes, FaLayerGroup, FaCube, FaProjectDiagram, FaRoute, FaCreditCard } from "react-icons/fa";
import { MdApi, MdMessage, MdNotificationsActive, MdSpeed, MdDevices, MdSecurity } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { BiLayer, BiNetworkChart } from "react-icons/bi";

export const skills = [
  {
    title: 'Programming & Frameworks',
    items: [
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'OOP Concepts', icon: FaCubes, color: '#00b894' },
    ],
  },
  {
    title: 'Architecture & Patterns',
    items: [
      { name: 'MVC', icon: BiLayer, color: '#0984e3' },
      { name: 'MVVM', icon: BiNetworkChart, color: '#00cec9' },
      { name: 'Clean Architecture', icon: FaLayerGroup, color: '#6c5ce7' },
    ],
  },
  {
    title: 'State Management & Routing',
    items: [
      { name: 'BLoC', icon: FaCube, color: '#d63031' },
      { name: 'GetX', icon: MdSpeed, color: '#e17055' },
      { name: 'Provider', icon: FaProjectDiagram, color: '#00cec9' },
      { name: 'Riverpod', icon: IoWater, color: '#0984e3' },
      { name: 'GoRouter', icon: FaRoute, color: '#fdcb6e' },
    ],
  },
  {
    title: 'Backend & Network',
    items: [
      { name: 'REST API', icon: MdApi, color: '#00b894' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Token Management', icon: MdSecurity, color: '#d63031' },
      { name: 'WebSocket / socket.io', icon: SiSocketdotio, color: '' },
      { name: 'Real-time Messaging', icon: MdMessage, color: '#0984e3' },
    ],
  },
  {
    title: 'Deployment & Integrations',
    items: [
      { name: 'App Store Deployment', icon: SiAppstore, color: '#0f8ce6' },
      { name: 'Play Store Deployment', icon: SiGoogleplay, color: '#41cc00' },
      { name: 'Stripe Payment', icon: SiStripe, color: '#635bff' },
      { name: 'SSLCOMMERZ Integration', icon: FaCreditCard, color: '' },
      { name: 'Push Notifications', icon: MdNotificationsActive, color: '#fdcb6e' },
    ],
  },
  {
    title: 'Tools & Design',
    items: [
      { name: 'Git & GitHub', icon: SiGithub, color: '' },
      { name: 'Responsive Design', icon: MdDevices, color: '#00cec9' },
    ],
  },
];
