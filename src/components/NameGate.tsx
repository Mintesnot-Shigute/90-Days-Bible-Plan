import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Reader } from "../types";

interface NameGateProps {
  readers: Reader[];
  onSelectReader: (name: string) => void;
  loading: boolean;
}

export function NameGate({ readers, onSelectReader, loading }: NameGateProps) {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleSelectExisting = async (name: string) => {
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
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <p className="text-ink text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-serif text-center text-ink mb-2">
          90-Day Bible
        </h1>
        <p className="text-center text-ink mb-8">
          Share the journey with friends
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {readers.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-ink mb-3">
                Join as existing reader:
              </h2>
              <div className="space-y-2">
                {readers.map((reader) => (
                  <button
                    key={reader.name}
                    onClick={() => handleSelectExisting(reader.name)}
                    className="w-full px-4 py-2 rounded border border-gold text-gold hover:bg-gold hover:text-white transition-colors text-sm"
                  >
                    {reader.name}
                  </button>
                ))}
              </div>
              <div className="my-4 border-t border-gray-300" />
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold text-ink mb-3">
              Or join as new reader:
            </h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleJoinNew();
                }
              }}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gold rounded mb-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold"
              disabled={isJoining}
            />
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <button
              onClick={handleJoinNew}
              disabled={isJoining}
              className="w-full px-4 py-2 bg-gold text-white rounded hover:bg-gold-light transition-colors font-medium disabled:opacity-50"
            >
              {isJoining ? "Joining..." : "Join"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
