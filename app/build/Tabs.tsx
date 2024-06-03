"use client"
import React, { useState } from "react";

const Tabs = () => {
  const initialTabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ];
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    const newTabs = [
      ...tabs,
      {
        title: `Tab ${tabs.length + 1}`,
        content: `Content for Tab ${tabs.length + 1}`,
      },
    ];
    setTabs(newTabs);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
        <button className="px-4 py-2 text-white bg-green-500" onClick={addTab}>
          Add Tab
        </button>
      </div>
      <div className="mt-4">
        {tabs?.map((tab, index) => (
          <div key={index} className={activeTab === index ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
