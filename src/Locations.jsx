import PropTypes from "prop-types";

function LocationsList({ pname, description, coordinates, owner }) {
  return (
    <div className="bg-gray-700/50 h-full rounded-lg p-4 hover:bg-gray-700/70 transition-all">
      <h3 className="font-bold text-lg text-purple-300 mb-2">{pname}</h3>
      <p className="text-gray-300 mb-3 italic">{description}</p>
      <span className="text-sm gray-400/50 italic">{coordinates}</span>
      <p className="text-gray-300 mb-3">Owned by: {owner}</p>
    </div>
  );
}

LocationsList.propTypes = {
  pname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default LocationsList;
