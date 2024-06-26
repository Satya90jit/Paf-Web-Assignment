import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white text-black rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <img
          src="/path/to/profile-picture.jpg" // Replace with actual path
          alt="Profile Picture"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Annie Freeman</h2>
          <p className="text-gray-500">annie-freeman</p>
        </div>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="material-icons">visibility</span>
          <span>Profile and Visibility</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="material-icons">bar_chart</span>
          <span>Activity</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="material-icons">credit_card</span>
          <span>Cards</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="material-icons">settings</span>
          <span>Settings</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="material-icons">logout</span>
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
