import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // LOAD ITEMS FROM BACKEND
  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ADD NEW ITEM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) return alert("Fill all fields");

    try {
      await axios.post("http://localhost:5000/api/items", {
        name,
        description,
      });

      alert("Item added!");

      setName("");
      setDescription("");

      fetchItems(); // reload items
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Items App</h1>

      {/* ADD ITEM FORM */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Item name"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 w-full mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </form>

      {/* SHOW ITEMS */}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item._id} className="p-3 border rounded">
            <strong>{item.name}</strong>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
