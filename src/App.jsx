import { useState, useEffect } from 'react';
import Announcement from './Announcement';
import PlayerList from './PlayerList';
import LocationsList from './Locations'
import { Tab, TabPanel } from './Tabs'
import discordLogo from '../icons/discord-logo-white.svg'
import CustomButton from './CustomButton';

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
    { id: 1, uname: "The_Kelly", role: "Owner" },
    { id: 2, uname: "GasGasGonna", role: "Panday" },
    { id: 3, uname: "EuweeAsian", role: "IT Department" },
    { id: 4, uname: "Awohi1", role: "Batman" },
    { id: 5, uname: "GoyaChocolate", role: "Slave"},
    { id: 6, uname: "LittleClevie", role: "firstcottonman"}
  ]);

  const [locations] = useState([
    {
      id: 1,
      pname: "Spawn",
      description: "Where all great things begin.",
      coordinates: "x-100 y-64 z-200",
      owner: "N/A"
    },
    {
      id: 2,
      pname: "The josh cave",
      description: "josh cyril tito mola dealca",
      coordinates: "Nether: X:-6 Y:52 Z:21",
      owner: "Awohi1"
    }
  ]);

  const handleLink = () => {
    navigator.clipboard.writeText('kellyisthegreatest.apexmc.co');
    alert('Server IP copied to clipboard!');
  }

  const handleDiscord = () => {
    window.open('https://discord.gg/TKNyFvtJfc', '_blank')
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8 relative">
      <div className="max-w-4xl mx-auto h-full overflow-y-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-purple-400">Kelly SMP</h1>
          <p className="text-gray-400">Welcome to our server!</p>

          {/* Global Buttons */}
          <div className="flex gap-4 justify-center mt-6">
          <button 
          onClick={handleDiscord}
          className="font-gg bg-gradient-to-r from-[#5865f2] via-[#404eed] to-[#7289da] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#5865f2]/50 dark:focus:ring-[#404eed]/80 shadow-lg shadow-[#5865f2]/50 dark:shadow-lg dark:shadow-[#404eed]/80 text-white font-medium rounded-lg text-[16px] px-6 py-2 text-center w-48 h-12 transition-all duration-300">
          <img src={discordLogo} alt="Discord Logo" className="transform scale-80 mr-2"/>
        </button>

        <CustomButton 
          text="Copy Server IP"
          onClick={handleLink}
          variant='primary'
        />

          </div>
        </header>

        <Tab>
          <TabPanel title="Announcements">
            {/* Announcements Section */}

            {/* Add Announcement Button */}
            <div className="flex gap-4 mb-6">
              <CustomButton 
                text="Add Announcements"
                variant='primary'
              />
            </div>
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
          </TabPanel>
          <TabPanel title="Locations">
            {/* Locations Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Locations</h2>
              <div className="space-y-4">
                {locations.map((location) => (
                  <LocationsList 
                    key={location.id}
                    pname={location.pname}
                    description={location.description}
                    coordinates={location.coordinates}
                    owner={location.owner}
                  />
                ))}
              </div>
            </div>
          </TabPanel>
        </Tab>
      </div>

      {/* Player List */}
      <div className="absolute top-0 right-0 w-72 h-full overflow-y-auto p-4">
        <PlayerList players={players} />
      </div>
    </div>
  );
}

export default App;