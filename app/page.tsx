'use client';

import { useState, useCallback } from 'react';
import { NameGate, Header, TodayTab, PlanTab, GroupTab, ReportTab } from './components';
import { useReaders, useProgress, useCurrentReader } from './hooks';
import { Calendar, Users, BarChart3, Home, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'today' | 'plan' | 'group' | 'report';

export default function AppPage() {
  const [tab, setTab] = useState<Tab>('today');
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
    setTab('today');
  };

  const tabs: Array<{ id: Tab; label: string; icon: any }> = [
    { id: 'today', label: 'Today', icon: Home },
    { id: 'plan', label: 'Plan', icon: Calendar },
    { id: 'group', label: 'Group', icon: Users },
    { id: 'report', label: 'Report', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentReader={currentReader}
        readers={readers}
        progress={progress}
        onOpenMenu={() => setMenuOpen(!menuOpen)}
      />

      {/* Reader Switch Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white border-b border-gray-200 shadow-md"
          >
            <div className="max-w-md mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Switch Reader</h3>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="space-y-2 mb-4">
                {readers.map((reader) => (
                  <motion.button
                    key={reader.name}
                    onClick={() => handleSwitchReader(reader.name)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                      reader.name === currentReader
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {reader.name}
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => {
                  setCurrentReader(null);
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-all text-sm font-semibold"
              >
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 sm:px-6 pt-4 pb-24">
        <AnimatePresence mode="wait">
          {tab === 'today' && (
            <motion.div
              key="today"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TodayTab
                currentReader={currentReader}
                readers={readers}
                progress={progress}
                onRefresh={handleRefresh}
                key={refreshTrigger}
              />
            </motion.div>
          )}
          {tab === 'plan' && (
            <motion.div
              key="plan"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <PlanTab
                currentReader={currentReader}
                progress={progress}
                onSelectDay={(day) => {
                  setTab('today');
                }}
              />
            </motion.div>
          )}
          {tab === 'group' && (
            <motion.div
              key="group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <GroupTab
                currentReader={currentReader}
                readers={readers}
                progress={progress}
              />
            </motion.div>
          )}
          {tab === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ReportTab readers={readers} progress={progress} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = tab === t.id;
            return (
              <motion.button
                key={t.id}
                onClick={() => setTab(t.id)}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-3 sm:py-4 transition-all flex flex-col items-center justify-center gap-1 min-h-[60px] ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'fill-current' : ''}`} />
                </motion.div>
                <span className={`text-xs font-semibold ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                  {t.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"
                    style={{ width: '100%' }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
