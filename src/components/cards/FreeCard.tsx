import React from 'react';

const FreeCard = () => {
  return (
    <div className="bg-white text-black rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Free</h2>
      <p className="mb-4">Basics for teams and developers</p>
      <p className="text-2xl font-bold mb-4">$0/month</p>
      <button className="bg-purple-500 text-white rounded-full px-4 py-2">Sign up</button>
    </div>
  );
};

export default FreeCard;
