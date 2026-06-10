'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AbstractVisualizer() {
  // SVG grid and path properties for clean premium vectors
  const nodes = [
    { id: 1, cx: 300, cy: 300, r: 60, title: 'Precision Core', label: 'Diagnostics', color: '#0F5E4E', delay: 0 },
    { id: 2, cx: 120, cy: 200, r: 35, title: 'CT Scan', label: 'Imaging', color: '#C78B42', delay: 0.2 },
    { id: 3, cx: 480, cy: 150, r: 40, title: 'Pathology', label: 'Cellular', color: '#0F5E4E', delay: 0.4 },
    { id: 4, cx: 460, cy: 450, r: 38, title: 'Cardiology', label: 'ECG/Eco', color: '#C78B42', delay: 0.6 },
    { id: 5, cx: 140, cy: 420, r: 35, title: 'Preventive', label: 'Wellness', color: '#0F5E4E', delay: 0.8 },
  ];

  const connections = [
    { from: 0, to: 1, path: 'M 300 300 L 120 200' },
    { from: 0, to: 2, path: 'M 300 300 L 480 150' },
    { from: 0, to: 3, path: 'M 300 300 L 460 450' },
    { from: 0, to: 4, path: 'M 300 300 L 140 420' },
    { from: 1, to: 2, path: 'M 120 200 Q 300 100 480 150' },
    { from: 3, to: 4, path: 'M 460 450 Q 300 500 140 420' },
  ];

  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto flex items-center justify-center p-4">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 grid-dots opacity-40 rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-brand-emerald/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl" />

      <svg
        viewBox="0 0 600 600"
        className="w-full h-full relative z-10 select-none overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow Filters */}
        <defs>
          <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Ring Wave (ECG/Ultrasound style) */}
        <motion.circle
          cx="300"
          cy="300"
          r="180"
          fill="none"
          stroke="rgba(15, 94, 78, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="300"
          cy="300"
          r="230"
          fill="none"
          stroke="rgba(199, 139, 66, 0.1)"
          strokeWidth="1"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Diagnostic Sine Wave Sweep */}
        <motion.path
          d="M 50 300 Q 112.5 220 175 300 T 300 300 T 425 300 T 550 300"
          fill="none"
          stroke="rgba(199, 139, 66, 0.08)"
          strokeWidth="2"
          animate={{
            d: [
              'M 50 300 Q 112.5 220 175 300 T 300 300 T 425 300 T 550 300',
              'M 50 300 Q 112.5 380 175 300 T 300 300 T 425 300 T 550 300',
              'M 50 300 Q 112.5 220 175 300 T 300 300 T 425 300 T 550 300'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Connection Network Paths */}
        {connections.map((conn, idx) => (
          <g key={idx}>
            {/* Background solid link */}
            <path
              d={conn.path}
              fill="none"
              stroke="rgba(26, 26, 26, 0.04)"
              strokeWidth="2"
            />
            {/* Pulsing signal dot along the line */}
            <motion.path
              d={conn.path}
              fill="none"
              stroke="url(#emerald-gradient)"
              strokeWidth="1.5"
              strokeDasharray="10 120"
              animate={{ strokeDashoffset: [-130, 130] }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </g>
        ))}

        {/* Gradient Defs */}
        <defs>
          <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F5E4E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C78B42" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Nodes Layer */}
        {nodes.map((node) => {
          const isCore = node.id === 1;
          return (
            <motion.g
              key={node.id}
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: node.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Outer Glowing Ring */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 12}
                fill="none"
                stroke={node.color}
                strokeOpacity="0.08"
                strokeWidth="2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3 + node.id, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Node Glassmorphic Backdrop */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={node.color === '#0F5E4E' ? 'rgba(248, 246, 242, 0.95)' : 'rgba(248, 246, 242, 0.95)'}
                stroke={node.color}
                strokeWidth={isCore ? 3 : 1.5}
                filter={node.color === '#0F5E4E' ? 'url(#glow-emerald)' : 'url(#glow-gold)'}
                style={{ filter: `drop-shadow(0 10px 15px rgba(26, 26, 26, 0.05))` }}
              />



              {/* Node Labels */}
              <text
                x={node.cx}
                y={node.cy - 2}
                textAnchor="middle"
                className={`font-serif text-brand-charcoal font-semibold select-none`}
                style={{ fontSize: isCore ? '12px' : '10px', letterSpacing: '0.05em' }}
              >
                {node.title}
              </text>
              <text
                x={node.cx}
                y={node.cy + 10}
                textAnchor="middle"
                className="font-sans text-[8px] uppercase tracking-wider text-brand-charcoal/60 font-semibold select-none"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
