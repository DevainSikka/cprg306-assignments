import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userID) {
  const q = query(collection(db, "users", userID, "items"));
  var item = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    item.push({ id: doc.id, ...doc.data() });
  });
  return item;
}

/*
This function adds a new item to a specific user's list of items in Firestore. It takes a userId and an item as parameters. It uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. It returns the id of the newly created document.*/
async function addItem(userID, item) {
  var collectionRef = collection(db, "users", userID, "items");
  var newDoc = await addDoc(collectionRef, item);

  return newDoc.id;
}
export { getItems, addItem };
