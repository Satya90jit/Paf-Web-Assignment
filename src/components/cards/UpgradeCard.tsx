import React from 'react';

const UpgradeCard = () => {
  return (
    <div className="bg-purple-500 text-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Upgrade for more permissions control</h2>
      <p className="mb-4">Decide who can send invitations, edit team settings, and more with Business Class.</p>
      <button className="bg-white text-purple-500 rounded-full px-4 py-2">Try for 14 days</button>
    </div>
  );
};

export default UpgradeCard;
