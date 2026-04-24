// Helper to render project link buttons/icons for GitHub, Android, iOS
import React from 'react';
import { FaGithub, FaAndroid, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const linkMeta = [
  {
    key: 'github',
    icon: FaGithub,
    label: 'GitHub',
    color: 'from-gray-800 to-gray-700',
  },
  {
    key: 'android',
    icon: FaAndroid,
    label: 'Play Store',
    color: 'from-green-500 to-green-600',
  },
  {
    key: 'ios',
    icon: FaApple,
    label: 'App Store',
    color: 'from-gray-700 to-gray-500',
  },
];

export function ProjectLinks({ links, size = 'md', className = '' }) {
  if (!links) return null;
  return (
    <div className={`flex gap-3 ${size === 'sm' ? 'mt-2' : 'mt-4'} ${className}`}>
      {linkMeta.map(({ key, icon: Icon, label, color }) => {
        const url = links[key];
        if (!url) return null;
        if (typeof url !== 'string' || !url.trim()) return null;
        return (
          <motion.a
            key={key}
            href={url}
            className={`inline-flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm bg-gradient-to-r ${color} hover:from-primary/20 hover:to-purple-500/20 text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
          >
            <Icon className={size === 'sm' ? 'text-base' : 'text-lg'} />
            <span className={size === 'sm' ? 'text-xs' : 'text-sm'}>{label}</span>
          </motion.a>
        );
      })}
    </div>
  );
}
