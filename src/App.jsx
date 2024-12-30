import { useState, useEffect } from 'react';
import Announcement from './Announcement';
import PlayerList from './PlayerList';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#111827";
  });

  const [announcements] = useState([
    {
      id: 1,
      title: "Welcome to Kelly SMP!",
      content: "Server rules: No griefing, be respectful, have fun!",
      date: "Dec 30, 2024",
    },
    {
      id: 2,
      title: "Carlos Sand",
      content: "Carlos has been banned for griefing.",
      date: "Dec 31, 2024",
    },
  ]);

  const [players] = useState([
    { id: 1, name: "The_Kelly", role: "Owner" },
    { id: 2, name: "GasGasGonna", role: "Asshole" },
    { id: 3, name: "EuweeAsian", role: "IT Department" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 relative">
      <div className="max-w-4xl mx-auto h-full overflow-y-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-purple-400">Kelly SMP</h1>
          <p className="text-gray-400">Welcome to our server!</p>
        </header>

        {/* Announcements Section */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Announcement
                key={announcement.id}
                title={announcement.title}
                content={announcement.content}
                date={announcement.date}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Player List */}
      <div className="absolute top-0 right-0 w-72 h-full overflow-y-auto p-4">
        <PlayerList players={players} />
      </div>
    </div>
  );
}

export default App;
