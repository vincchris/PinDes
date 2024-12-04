import React from "react";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 w-16 h-full bg-gray-900 flex flex-col items-center py-4 z-10">
            <button className="mb-4 p-3 text-white bg-gray-700 rounded-full hover:bg-gray-600">
                +
            </button>
            <button className="mb-4 p-3 text-white bg-gray-700 rounded-full hover:bg-gray-600">
                ?
            </button>
            <button className="mb-4 p-3 text-white bg-gray-700 rounded-full hover:bg-gray-600">
                🖼️
            </button>
            <button className="mb-4 p-3 text-white bg-gray-700 rounded-full hover:bg-gray-600">
                ⚙️
            </button>
        </div>
    );
};

export default Sidebar;
