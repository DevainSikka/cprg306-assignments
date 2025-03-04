"use client";
import { useState } from "react";
import Item from "./item"; 
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on the selected sorting preference
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Item List</h2>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-xl font-medium shadow-md transition-colors duration-200 ${
            sortBy === "name *:" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-900"
            }`}

        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-xl font-medium shadow-md transition-colors duration-200 ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-900"
            }`}

        >
          Sort by Category  #sikka bai ikk bar harsimrat badal di chattan da mauka mil jave ta swaad aa javee aahaa ahaha
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
