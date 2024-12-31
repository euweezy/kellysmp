import { useState } from "react";
import PropTypes from "prop-types";

export function Tab({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tab-list flex border-b border-gray-700 mb-4">
                {children.map((child, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 ${
                            index === activeTab
                                ? "text-purple-400 border-b-2 border-purple-400"
                                : "text-gray-400 hover:text-purple-300"
                        }`}
                    >
                        {child.props.title}
                    </button>
                ))}
            </div>
            <div className="tab-content-mt-4">
                {children[activeTab]}
            </div>
        </div>
    );
}

export function TabPanel({ children }) {
    return <div>{children}</div>;
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
  };

  Tab.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };
  