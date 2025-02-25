"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name Input */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-sm"
          />
        </div>

        {/* Quantity Controls */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 mb-3">Quantity: {quantity}</p>
          <div className="flex justify-center gap-6">
            <button type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-md disabled:opacity-50 hover:bg-red-600 transition"
            >
              -
            </button>
            <button
            type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-4 py-2 bg-green-500 text-white rounded-xl shadow-md disabled:opacity-50 hover:bg-green-600 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-sm"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
