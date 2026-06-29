"use client";

import { motion } from "framer-motion";

const SEGMENTS = 24;
const STEP = 360 / SEGMENTS;

export default function Kaleidoscope() {
  const wedges = Array.from({ length: SEGMENTS });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Square stage, sized to cover the viewport, centred */}
      <div className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2">
        {/* Two mirrored mandalas counter-rotating at different speeds = living shimmer */}
        <Mandala duration={90} blend="normal" opacity={1} scale={1} />
        <Mandala duration={130} reverse blend="screen" opacity={0.7} scale={1.35} />
      </div>

      {/* Soft bloom from the centre, behind the wordmark */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,233,199,0.12) 0%, rgba(255,233,199,0.03) 32%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette to seat everything in the dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 45%, rgba(5,3,8,0.35) 78%, #050308 100%)",
        }}
      />
    </div>
  );
}

function Mandala({ duration, reverse = false, blend, opacity, scale }) {
  const wedges = Array.from({ length: SEGMENTS });

  return (
    <motion.div
      className="absolute inset-0"
      style={{ mixBlendMode: blend, opacity }}
      initial={{ rotate: 0 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {/* The source cell drifts slowly so the reflected pattern keeps morphing */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: ["-4%", "5%", "-4%"], y: ["3%", "-5%", "3%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        {wedges.map((_, i) => (
          <div
            key={i}
            className="wedge"
            style={{
              transform: `rotate(${i * STEP}deg)${i % 2 ? " scaleX(-1)" : ""}`,
            }}
          >
            <div className="source" style={{ transform: `scale(${scale})` }} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
