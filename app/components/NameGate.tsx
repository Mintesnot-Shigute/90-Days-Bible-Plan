import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Sparkles, Users } from "lucide-react";

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
  const [focusedInput, setFocusedInput] = useState(false);

  const handleSelectExisting = (name: string) => {
    onSelectReader(name);
  };

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
      const { error: insertError } = await supabase.from("readers").insert({
        name: trimmed,
      });

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
    if (e.key === "Enter" && !isJoining && newName.trim()) {
      handleJoinNew();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="text-center">
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            </motion.div>
            <p className="text-indigo-200 font-medium text-lg">Loading your journey...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(to bottom right, #1e1b4b, #581c87, #000000)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-10"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="w-full max-w-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Group Name */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          {/* Group Name Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 bg-opacity-20 border border-indigo-400 border-opacity-50 mb-6"
          >
            <Users className="w-4 h-4 text-indigo-300" />
            <span className="text-indigo-300 font-semibold text-sm tracking-wide">{GROUP_NAME}</span>
          </motion.div>

          {/* Main Icon */}
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl"
            animate={{ y: [0, -12, 0], rotateZ: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title and Tagline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">
              90-Day Bible
            </h1>
            <p className="text-xl text-indigo-200 font-light tracking-wide mb-2">Read Together, Grow Together</p>
            <p className="text-sm text-indigo-300 font-medium">Join {readers.length} {readers.length === 1 ? "reader" : "readers"} on this spiritual journey</p>
          </motion.div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
          variants={itemVariants}
        >
          {/* Existing Readers */}
          {readers.length > 0 && (
            <motion.div 
              className="mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-indigo-300" />
                <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {readers.map((reader, idx) => (
                  <motion.button
                    key={reader.name}
                    onClick={() => handleSelectExisting(reader.name)}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="group relative px-5 py-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/40 hover:border-indigo-400/80 backdrop-blur-sm transition-all overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"
                      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="font-bold text-white text-lg">{reader.name}</span>
                      <ArrowRight className="w-5 h-5 text-indigo-300 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="my-8 border-t border-white/10" />
            </motion.div>
          )}

          {/* Create New Account */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkles className="w-6 h-6 text-pink-400" />
              </motion.div>
              Join The Journey
            </h2>
            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-indigo-200 mb-3">Your Name</label>
                <motion.div
                  className="relative"
                  animate={focusedInput ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => {
                      setNewName(e.target.value);
                      setError("");
                    }}
                    onFocus={() => setFocusedInput(true)}
                    onBlur={() => setFocusedInput(false)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your name"
                    disabled={isJoining}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-indigo-400/50 text-white placeholder-indigo-300/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all disabled:opacity-50 text-lg"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 pointer-events-none"
                    animate={{ opacity: focusedInput ? 0.1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div 
                  className="p-4 bg-red-500/20 border border-red-400/50 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm font-medium text-red-300">{error}</p>
                </motion.div>
              )}

              {/* Join Button */}
              <motion.button
                onClick={handleJoinNew}
                disabled={isJoining || !newName.trim()}
                whileHover={!isJoining && newName.trim() ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isJoining && newName.trim() ? { scale: 0.95 } : {}}
                className="w-full mt-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center justify-center gap-2">
                  {isJoining ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="text-center text-indigo-300 text-sm mt-8 font-medium"
          variants={itemVariants}
        >
          ✨ Begin your 90-day spiritual transformation today
        </motion.p>
      </motion.div>
    </div>
  );
}
