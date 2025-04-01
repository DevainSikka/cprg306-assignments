"use client";
import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "../_utils/item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = (item) => {
    console.log(item);
    addItem(user.uid, item)
      .then((response) => {
        setItems([...items, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items || []);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  loadItems();

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
