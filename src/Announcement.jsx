// src/Announcement.jsx
import PropTypes from 'prop-types'

function Announcement({ title, content, date }) {
  return (
    <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all">
      <h3 className="font-bold text-lg text-purple-300 mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{content}</p>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  );
}

Announcement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Announcement