import PropTypes from "prop-types";

function PlayerList({ players }) {
    return (
        <div className="bg-gray-800/50 h-full rounded-lg p-4">
            <h3 className="font-bold text-lg text-purple-300 mb-2">Meet The Gang!</h3>
            <ul className="text-gray-300">
                {players.map(player => (
                    <li key={player.id} className="mb-1 flex justify-between">
                        <span className="font-black mr-5">{player.name}:</span> 
                        <span className="italic text-right opacity-50 whitespace-nowrap">{player.role}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

PlayerList.propTypes = {
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired
        })
    ).isRequired
}

export default PlayerList