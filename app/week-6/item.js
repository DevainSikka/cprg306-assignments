
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
      <span className="font-medium">{name}</span>
      <span className="text-gray-600">Qty: {quantity}</span>
      <span className="text-sm text-blue-500">{category}</span>
    </li>
  );
}
