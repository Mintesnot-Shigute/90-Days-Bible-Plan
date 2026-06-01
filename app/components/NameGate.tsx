import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Sparkles, Users, Loader2 } from "lucide-react";

interface NameGateProps {
  readers: Reader[];
  onSelectReader: (name: string) => void;
  loading: boolean;
}

const GROUP_NAME = "Naioth in Ramah";

export function NameGate({ readers, onSelectReader, loading }: NameGateProps) {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleJoinNew = async () => {
    const trimmed = newName.trim();
    if (!trimmed) {
      setError("Please enter a name");
      return;
    }
    if (readers.some((r) => r.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("That name is already taken");
      return;
    }
    setIsJoining(true);
    setError("");
    try {
      const { error: insertError } = await supabase.from("readers").insert({ name: trimmed });
      if (insertError) throw insertError;
      onSelectReader(trimmed);
    } catch (err) {
      setError("Failed to join. Please try again.");
      console.error(err);
    } finally {
      setIsJoining(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isJoining && newName.trim()) handleJoinNew();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f0e4]">
        <div className="text-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}>
            <Loader2 className="w-9 h-9 mx-auto mb-3" style={{ color: "#b8860b" }} />
          </motion.div>
          <p className="font-medium" style={{ color: "#8a7456" }}>Loading your journey…</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-12 relative overflow-hidden"
      style={{ background: "radial-gradient(125% 125% at 50% 0%, #fbf6ec 0%, #f1e7d4 55%, #e9dcc3 100%)" }}
    >
      {/* warm ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "rgba(184,134,11,0.18)" }}
          animate={{ y: [0, 36, 0], x: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "rgba(196,154,60,0.16)" }}
          animate={{ y: [0, -36, 0], x: [0, -18, 0] }}
          transition={{ duration: 13, repeat: Infinity }}
        />
      </div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm rounded-[28px] px-8 py-10"
        style={{
          background: "rgba(255,253,248,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid #ece0c8",
          boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset, 0 24px 60px -20px rgba(120,86,30,0.28)",
        }}
      >
        {/* badge */}
        <div className="flex justify-center mb-7">
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full"
            style={{ background: "rgba(184,134,11,0.10)", border: "1px solid rgba(184,134,11,0.25)" }}
          >
            <Users className="w-3.5 h-3.5" style={{ color: "#a9801a" }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: "#8a6a16" }}>{GROUP_NAME}</span>
          </div>
        </div>

        {/* icon + title */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
            style={{
              background: "linear-gradient(145deg, #cda23a 0%, #b8860b 60%, #9c6f08 100%)",
              boxShadow: "0 10px 24px -8px rgba(184,134,11,0.55)",
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>
          <h1
            className="text-[2rem] leading-none font-bold tracking-tight"
            style={{ color: "#2a1f15", fontFamily: "'Fraunces', Georgia, serif" }}
          >
            90-Day Bible
          </h1>
          <p className="text-sm font-medium mt-2.5" style={{ color: "#9a8568" }}>
            Read together · {readers.length} {readers.length === 1 ? "reader" : "readers"} on the journey
          </p>
        </div>

        {/* existing readers */}
        {readers.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#b8860b" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "#a9926f" }}>Welcome back</span>
            </div>
            <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto">
              {readers.map((reader) => (
                <motion.button
                  key={reader.name}
                  onClick={() => onSelectReader(reader.name)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors"
                  style={{ background: "#f4ecdc", border: "1px solid #e4d6ba", color: "#5a4423" }}
                >
                  {reader.name}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* divider */}
        {readers.length > 0 && (
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: "#e7d9bd" }} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#b3a081" }}>or join</span>
            <div className="h-px flex-1" style={{ background: "#e7d9bd" }} />
          </div>
        )}

        {/* form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-2" style={{ color: "#8a7456" }}>Your name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                setError("");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your name"
              disabled={isJoining}
              className="w-full px-4 py-3 rounded-xl text-base font-medium outline-none transition-all disabled:opacity-50"
              style={{
                background: "#fbf5e9",
                color: "#3a2a18",
                border: focused ? "1px solid #b8860b" : "1px solid #e2d3b6",
                boxShadow: focused ? "0 0 0 4px rgba(184,134,11,0.12)" : "none",
              }}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-3 py-2 rounded-lg"
              style={{ background: "#fbeaea", border: "1px solid #e9c4c4" }}
            >
              <p className="text-sm font-medium" style={{ color: "#b4453c" }}>{error}</p>
            </motion.div>
          )}

          <motion.button
            onClick={handleJoinNew}
            disabled={isJoining || !newName.trim()}
            whileHover={!isJoining && newName.trim() ? { scale: 1.02, y: -1 } : {}}
            whileTap={!isJoining && newName.trim() ? { scale: 0.98 } : {}}
            className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #c79a30 0%, #b8860b 100%)",
              boxShadow: "0 12px 26px -10px rgba(184,134,11,0.6)",
            }}
          >
            {isJoining ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating…
              </>
            ) : (
              <>
                Begin the journey
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </div>

        <p className="text-center text-[11px] mt-7 font-medium" style={{ color: "#b3a081" }}>
          ✨ Begin your 90-day spiritual transformation today
        </p>
      </motion.div>
    </div>
  );
}