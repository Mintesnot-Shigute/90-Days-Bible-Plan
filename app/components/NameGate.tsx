import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-bounce" />
            <p className="text-gray-600 font-medium">Loading...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-4"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Bible Reading</h1>
          <p className="text-gray-600 text-base font-medium">90-Day Journey</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Existing Readers */}
          {readers.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-h4 text-gray-900 mb-4">Welcome Back</h2>
              <div className="space-y-2">
                {readers.map((reader, idx) => (
                  <motion.button
                    key={reader.name}
                    onClick={() => handleSelectExisting(reader.name)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + idx * 0.08 }}
                    className="w-full group px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl hover:border-blue-400 hover:from-blue-100 hover:to-indigo-100 transition-all flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900">{reader.name}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                ))}
              </div>
              <div className="my-6 border-t border-gray-200" />
            </motion.div>
          )}

          {/* Create New Account */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <h2 className="text-h4 text-gray-900 mb-4">Join The Journey</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your name"
                  className="input-modern"
                  disabled={isJoining}
                />
              </div>
              {error && (
                <motion.div 
                  className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </motion.div>
              )}
              <motion.button
                onClick={handleJoinNew}
                disabled={isJoining}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isJoining ? "Creating..." : "Create Account"}
                {!isJoining && <ArrowRight className="w-4 h-4" />}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="text-center text-gray-500 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Start your 90-day Bible reading journey today
        </motion.p>
      </motion.div>
    </div>
  );
}
