import React from 'react';

export default function Settings() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Settings</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-900 font-medium">Username</label>
            <input type="text" id="username" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-900 font-medium">Email</label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-900 font-medium">Password</label>
            <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="theme" className="block text-gray-900 font-medium">Theme</label>
            <select id="theme" className="p-2 border rounded-md">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">Save</button>
          </div>
        </form>
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Account</h2>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign in</button>
          <button className="w-full mt-4 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">Sign out</button>
        </div>
      </div>
    </div>
  );
}
