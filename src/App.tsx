import { useState, useCallback } from "react";
import { NameGate, Header, TodayTab, PlanTab, GroupTab } from "./components";
import { useReaders, useProgress, useCurrentReader } from "./hooks";
import "./App.css";

type Tab = "today" | "plan" | "group";

function App() {
  const [tab, setTab] = useState<Tab>("today");
  const [menuOpen, setMenuOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { currentReader, setCurrentReader } = useCurrentReader();
  const { readers, loading } = useReaders();
  const { progress } = useProgress();

  const handleRefresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  if (!currentReader) {
    return (
      <NameGate
        readers={readers}
        onSelectReader={setCurrentReader}
        loading={loading}
      />
    );
  }

  const handleSwitchReader = (newReader: string) => {
    setCurrentReader(newReader);
    setMenuOpen(false);
    setTab("today");
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Header
        currentReader={currentReader}
        readers={readers}
        progress={progress}
        onOpenMenu={() => setMenuOpen(!menuOpen)}
      />

      {menuOpen && (
        <div className="bg-white border-b-2 border-gold">
          <div className="max-w-md mx-auto px-4 py-4">
            <p className="text-sm text-gray-600 mb-3">Switch reader:</p>
            <div className="space-y-2 mb-4">
              {readers.map((reader) => (
                <button
                  key={reader.name}
                  onClick={() => handleSwitchReader(reader.name)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    reader.name === currentReader
                      ? "bg-gold text-white font-medium"
                      : "bg-gray-100 text-ink hover:bg-gray-200"
                  }`}
                >
                  {reader.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setCurrentReader(null);
                setMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        <div className="mb-6 pb-20">{tab === "today" && (
            <TodayTab
              currentReader={currentReader}
              readers={readers}
              progress={progress}
              onRefresh={handleRefresh}
              key={refreshTrigger}
            />
          )}
          {tab === "plan" && (
            <PlanTab
              currentReader={currentReader}
              progress={progress}
              onSelectDay={(day) => {
                // Could implement scroll to day, for now just switch to today tab
                setTab("today");
              }}
            />
          )}
          {tab === "group" && (
            <GroupTab
              currentReader={currentReader}
              readers={readers}
              progress={progress}
            />
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gold">
        <div className="max-w-md mx-auto flex items-center justify-around">
          <button
            onClick={() => setTab("today")}
            className={`flex-1 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors min-h-[44px] flex items-center justify-center ${
              tab === "today"
                ? "text-gold border-t-2 border-gold"
                : "text-ink hover:text-gold"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTab("plan")}
            className={`flex-1 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors min-h-[44px] flex items-center justify-center ${
              tab === "plan"
                ? "text-gold border-t-2 border-gold"
                : "text-ink hover:text-gold"
            }`}
          >
            Plan
          </button>
          <button
            onClick={() => setTab("group")}
            className={`flex-1 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors min-h-[44px] flex items-center justify-center ${
              tab === "group"
                ? "text-gold border-t-2 border-gold"
                : "text-ink hover:text-gold"
            }`}
          >
            Group
          </button>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}

export default App;
