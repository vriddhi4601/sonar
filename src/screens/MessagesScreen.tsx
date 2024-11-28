import React from 'react';

export const MessagesScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-400">
          The messaging feature will be available in a future update.
        </p>
      </div>
    </div>
  );
};