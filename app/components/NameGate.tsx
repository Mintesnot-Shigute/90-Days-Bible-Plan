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
      className="min-h-screen flex flex-col items-center justify-center px-5 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8f5f0 0%, #f0e8e0 100%)" }}
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(184,134,11,0.12)" }}
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(196,154,60,0.10)" }}
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      {/* main container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* header section */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6"
            style={{
              background: "linear-gradient(145deg, #d4af37 0%, #b8860b 60%, #8b6f47 100%)",
              boxShadow: "0 12px 32px -8px rgba(184,134,11,0.6)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl font-black mb-3" style={{ color: "#2a1f15" }}>
            90-Day Bible
          </h1>
          
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.2)" }}>
            <Users className="w-4 h-4" style={{ color: "#a9801a" }} />
            <span className="text-sm font-semibold" style={{ color: "#8a6a16" }}>{GROUP_NAME}</span>
          </div>
          
          <p className="text-base font-medium" style={{ color: "#9a8568" }}>
            Read together · {readers.length} {readers.length === 1 ? "reader" : "readers"}
          </p>
        </div>

        {/* existing readers section */}
        {readers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full mb-10 p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(184,134,11,0.15)", backdropFilter: "blur(10px)" }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" style={{ color: "#b8860b" }} />
             <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "#a9926f" }}
                  >
               Welcome back
                </span>
              </div>
            <div className="flex flex-col gap-2">
              {readers.map((reader) => (
                <motion.button
  key={reader.name}
  onClick={() => onSelectReader(reader.name)}
  whileHover={{ x: 4 }}
  whileTap={{ scale: 0.98 }}
  className="w-full px-4 py-3 rounded-lg font-bold text-xl transition-all text-center"
  style={{
    background: "#fbf5e9",
    border: "6px solid rgba(184,134,11,0.15)",
    color: "#5a4423",
    fontSize: "20px",
  }}

>
  {reader.name}
</motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* divider */}
        {readers.length > 0 && (
          <div className="w-full flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.15)" }} />
            <span className="text-xs font-semibold uppercase" style={{ color: "#b3a081" }}>or</span>
            <div className="h-px flex-1" style={{ background: "rgba(184,134,11,0.15)" }} />
          </div>
        )}

        {/* join section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full p-8 rounded-2xl"
          style={{ background: "rgba(255,253,248,0.95)", border: "1px solid rgba(184,134,11,0.2)", backdropFilter: "blur(10px)" }}
        >
          <h2 className="text-xl font-bold mb-6 text-center" style={{ color: "#2a1f15" }}>Begin Your Journey</h2>

          {/* form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2.5" style={{
  color: "#8a7456",
  fontSize: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "center",
}}
>Your name</label>
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
                className="w-full px-4 py-3.5 rounded-lg text-base font-medium outline-none transition-all disabled:opacity-50"
                style={{
                  background: "#fbf5e9",
                  color: "#3a2a18",
                  fontSize: "24px",
                  textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  border: focused ? "2px solid #b8860b" : "1.5px solid #e2d3b6",
                  boxShadow: focused ? "0 0 0 3px rgba(184,134,11,0.1)" : "none",
                }}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-3.5 py-2.5 rounded-lg"
                style={{ background: "#fbeaea", border: "1px solid #e9c4c4" }}
              >
                <p className="text-sm font-medium" style={{ color: "#b4453c" }}>{error}</p>
              </motion.div>
            )}

            <motion.button
              onClick={handleJoinNew}
              disabled={isJoining || !newName.trim()}
              whileHover={!isJoining && newName.trim() ? { scale: 1.02, y: -2 } : {}}
              whileTap={!isJoining && newName.trim() ? { scale: 0.98 } : {}}
              className="w-full py-3.5 rounded-lg text-white font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)",
                boxShadow: "0 10px 24px -6px rgba(0, 0, 0, 0.5)", paddingTop: "10px",
                    paddingBottom: "10px",color: "#000000",
              }}
            >
              {isJoining ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                <>
                  Begin the journey
                  <ArrowRight className="w-4 h-4 text-black font-bold" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* footer */}
        <p className="text-center text-sm font-medium mt-8" style={{ color: "#070400" }}>
          ✨ Begin your 90-day spiritual transformation
        </p>
      </motion.div>
    </div>
  );
}