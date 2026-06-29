"use client";

import { motion } from "framer-motion";
import Kaleidoscope from "../components/Kaleidoscope";

const WORD = "Kaleidoscopical";

const container = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.5, staggerChildren: 0.045 },
  },
};

const letter = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  return (
    <main
      className="relative flex h-screen w-screen items-center justify-center"
      style={{ fontFamily: "var(--font-display), serif" }}
    >
      <Kaleidoscope />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.75, letterSpacing: "0.62em" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="mb-6 pl-[0.62em] text-[0.7rem] font-light uppercase sm:text-xs"
          style={{ color: "var(--glow)" }}
        >
          A hall of mirrors
        </motion.span>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={WORD}
          className="flex flex-wrap justify-center font-light leading-none"
          style={{
            fontSize: "clamp(2.6rem, 11vw, 11rem)",
            letterSpacing: "0.01em",
            textShadow: "0 0 50px rgba(255,233,199,0.35)",
          }}
        >
          {WORD.split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block"
              style={{
                background:
                  "linear-gradient(180deg, #fff7e8 0%, #f4eede 45%, #d9b27e 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 1.4, delay: 1.4, ease: "easeOut" }}
          className="mt-9 h-px w-40 origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--glow), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7, ease: "easeOut" }}
          className="mt-7 max-w-lg text-base font-light sm:text-lg"
          style={{ color: "#cfc6b3" }}
        >
          <span style={{ color: "var(--glow)" }}>kaleidoscopical</span>
          <span className="mx-2 opacity-40">|</span>
          <span className="opacity-50">kə·ˌlaɪ·də·ˈskɒp·ɪk·əl</span>
          <span className="mx-2 opacity-40">|</span>
          <span className="italic opacity-70">adjective</span>
          <br />
          <span className="opacity-80">
            of or like a kaleidoscope; something that is continually shifting,
            rapidly changing.
          </span>
          <br />
          <span className="text-sm opacity-45">
            <span className="italic">derivatives</span>
            <span className="mx-2">·</span>
            kaleidoscope <span className="italic">noun</span>
            <span className="mx-2 opacity-50">·</span>
            kaleidoscopically <span className="italic">adverb</span>
          </span>
        </motion.div>
      </div>
    </main>
  );
}
