import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

interface NameGateProps {
  readers: Reader[];
  onSelectReader: (name: string) => void;
  loading: boolean;
}

export function NameGate({ readers, onSelectReader, loading }: NameGateProps) {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [isJoining, setIsJoining] = useState(false);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center">
        <motion.p 
          className="text-ink text-lg font-serif"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text-center mb-8">
          <motion.p
            className="text-xs sm:text-sm text-gold font-light tracking-widest mb-2 font-serif italic"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Naioth in Ramah
          </motion.p>
          <motion.h1 
            className="text-5xl sm:text-6xl font-serif text-ink mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            90-Day Bible
          </motion.h1>
          <motion.p 
            className="text-ink-light text-lg font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Share the journey with friends
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-3xl shadow-elevation p-6 sm:p-8 border-2 border-gold border-opacity-40 backdrop-blur-sm hover:border-opacity-60 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -2 }}
        >
          {readers.length > 0 && (
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h2 className="text-xs sm:text-sm font-semibold text-ink mb-3 uppercase tracking-widest text-center pl-3">
                👥 Existing Readers
              </h2>
              <div className="space-y-2">
                {readers.map((reader, idx) => (
                  <motion.button
                    key={reader.name}
                    onClick={() => handleSelectExisting(reader.name)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-white hover:shadow-glow transition-all text-sm font-medium uppercase tracking-wide group"
                  >
                    <div className="flex items-center justify-between">
                      <span>{reader.name}</span>
                      <LogIn className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
              <motion.div 
                className="my-4 border-t-2 border-gold border-opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <h2 className="text-xs sm:text-sm font-semibold text-ink mb-4 uppercase tracking-widest text-center pl-3">
              ✨ Create New Account
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest pl-3">Your Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50"
                  disabled={isJoining}
                />
              </div>
              {error && (
                <motion.p 
                  className="text-red-600 text-sm font-medium"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}
              <motion.button
                onClick={handleJoinNew}
                disabled={isJoining}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm disabled:opacity-50 mt-2 border-0 cursor-pointer group overflow-hidden relative"
              >
                <span className="relative z-10">{isJoining ? "Creating Account..." : "Create Account"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
