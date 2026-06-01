import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { Lock, LogIn } from "lucide-react";

interface NameGateProps {
  readers: Reader[];
  onSelectReader: (name: string) => void;
  loading: boolean;
}

export function NameGate({ readers, onSelectReader, loading }: NameGateProps) {
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [selectedReader, setSelectedReader] = useState<string | null>(null);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleSelectExisting = async (name: string) => {
    const stored = localStorage.getItem(`reader_${name}_password`);
    if (stored) {
      // Password is set, show password input
      setSelectedReader(name);
      setEnteredPassword("");
      setError("");
    } else {
      // No password set, allow direct entry (backward compatibility)
      onSelectReader(name);
    }
  };

  const handleVerifyPassword = () => {
    if (!selectedReader) return;
    const stored = localStorage.getItem(`reader_${selectedReader}_password`);
    if (stored === enteredPassword) {
      onSelectReader(selectedReader);
      setSelectedReader(null);
      setEnteredPassword("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleJoinNew = async () => {
    const trimmed = newName.trim();
    if (!trimmed) {
      setError("Please enter a name");
      return;
    }

    if (!newPassword) {
      setError("Please set a password to protect your account");
      return;
    }

    if (newPassword.length < 2) {
      setError("Password must be at least 2 characters");
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
      // Store password locally for this reader
      localStorage.setItem(`reader_${trimmed}_password`, newPassword);
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

  // Show password verification screen
  if (selectedReader) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-parchment to-gold bg-opacity-20 flex items-center justify-center px-4">
        <motion.div 
          className="max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="bg-white rounded-2xl shadow-elevation p-6 sm:p-8 border border-gold border-opacity-30 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <motion.div 
                className="w-12 h-12 bg-gold bg-opacity-10 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock className="w-6 h-6 text-gold" />
              </motion.div>
            </div>
            
            <h2 className="text-2xl font-serif text-center text-ink mb-2">Welcome Back</h2>
            <p className="text-center text-ink-light mb-6 text-sm uppercase tracking-widest font-medium">{selectedReader}</p>
            
            <div className="mb-4">
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-widest">Password</label>
              <input
                type="password"
                value={enteredPassword}
                onChange={(e) => {
                  setEnteredPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleVerifyPassword();
                  }
                }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl mb-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50"
                autoFocus
              />
              {error && (
                <motion.p 
                  className="text-red-600 text-sm font-medium"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}
            </div>
            
            <div className="space-y-3">
              <motion.button
                onClick={handleVerifyPassword}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm border-0 cursor-pointer group overflow-hidden relative"
              >
                <span className="relative z-10">Unlock Account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
              <motion.button
                onClick={() => {
                  setSelectedReader(null);
                  setEnteredPassword("");
                  setError("");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-gray-100 text-ink rounded-lg hover:bg-gray-200 transition-all font-medium text-sm"
              >
                Back
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
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
              <h2 className="text-xs sm:text-sm font-semibold text-ink mb-3 uppercase tracking-widest text-center">
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
            <h2 className="text-xs sm:text-sm font-semibold text-ink mb-4 uppercase tracking-widest text-center">
              ✨ Create New Account
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest">Your Name</label>
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
              <div>
                <label className="block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest">Password (2+ characters)</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Create a password"
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isJoining) {
                    handleJoinNew();
                  }
                }}
                disabled={isJoining}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm disabled:opacity-50 mt-2 border-0 cursor-pointer hover:from-gold-dark hover:to-gold relative overflow-hidden group"
              >
                <span className="relative z-10">{isJoining ? "Creating Account..." : "Create Account"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-center text-ink-light text-xs mt-6 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          🔒 Your account is password protected
        </motion.p>
      </motion.div>
    </div>
  );
}
