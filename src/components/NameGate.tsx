import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface NameGateProps {
  readers: Reader[];
  onSelectReader: (name: string) => void;
  loading: boolean;
}

export function NameGate({ readers, onSelectReader, loading }: NameGateProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please enter your name");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    if (password.length < 2) {
      setError("Password must be at least 2 characters");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      // Check if user exists
      const existingUser = readers.find((r) => r.name.toLowerCase() === trimmed.toLowerCase());
      
      if (existingUser) {
        // User exists - verify password
        const stored = localStorage.getItem(`reader_${existingUser.name}_password`);
        if (stored === password) {
          // Password matches
          onSelectReader(existingUser.name);
        } else {
          // Password doesn't match
          setError("Incorrect password");
        }
      } else {
        // User doesn't exist - create new account with password
        const { error: insertError } = await supabase.from("readers").insert({
          name: trimmed,
        });

        if (insertError) throw insertError;
        
        // Store password locally for this reader
        localStorage.setItem(`reader_${trimmed}_password`, password);
        onSelectReader(trimmed);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsProcessing(false);
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
          <div className="flex justify-center mb-4">
            <motion.div 
              className="w-12 h-12 bg-gold bg-opacity-10 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-6 h-6 text-gold" />
            </motion.div>
          </div>

          <h2 className="text-2xl font-serif text-center text-ink mb-6">Welcome</h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest pl-3">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isProcessing) {
                    handleLogin();
                  }
                }}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50"
                disabled={isProcessing}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-widest pl-3">Password (2+ characters)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isProcessing) {
                    handleLogin();
                  }
                }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold focus:ring-opacity-50 focus:shadow-glow transition-all hover:border-opacity-50 bg-white hover:bg-gray-50"
                disabled={isProcessing}
                autoFocus
              />
            </div>

            {error && (
              <motion.p 
                className="text-red-600 text-sm font-medium pl-3"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              onClick={handleLogin}
              disabled={isProcessing}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 bg-gradient-to-r from-gold to-gold-light text-white rounded-xl hover:shadow-elevation transition-all font-semibold uppercase tracking-widest text-sm disabled:opacity-50 mt-4 border-0 cursor-pointer group overflow-hidden relative"
            >
              <span className="relative z-10">{isProcessing ? "Processing..." : "Login or Create"}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="mt-6 text-center space-y-2">
          <motion.p 
            className="text-ink-light text-xs tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            🔒 Password required for all accounts
          </motion.p>
          <motion.p 
            className="text-ink-light text-xs tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            New account created automatically on first login
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
