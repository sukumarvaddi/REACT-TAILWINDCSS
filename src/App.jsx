import React from 'react';

function App() {
  return (
    <div className=" ml-10 mt-10 max-w-sm rounded overflow-hidden shadow-2xl">
      <img className="w-full" src={require('./profile.jpg')} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Sukumar Vaddi</div>
        <p className="text-gray-700 text-base">
          Principal Software Engineer - Paycor <span></span>
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Javascript lover</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#React Enthusiast</span>
      </div>
    </div>
  );
}

export default App;
