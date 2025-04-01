"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "../_utils/item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const user = { uid: "some-uid" }; // Replace with actual user authentication logic

  useEffect(() => {
    const loadItems = async () => {
      const items = await getItems(user.uid);
      setItems(items || []);
    };

    loadItems();
  }, []);

  const handleAddItem = (item) => {
    addItem(item, user.uid).then((newItemId) => {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: newItemId,
          name: item.name,
          quantity: item.quantity,
          userId: user.uid,
        },
      ]);
    });
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .replace(/s$/, "");

    console.log(cleanedItemName);
    setSelectedItemName(cleanedItemName);
  };

  console.log("The file loads");

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="flex-1">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
