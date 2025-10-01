import { useState } from "react";

export interface Task {
  id: number;
  done: boolean;
  text: string;
}
export default function App() {
  const [items, setItems] = useState<Task[]>([]);
  // const [done, setDone] = useState<boolean>(false);
  // const toggleCheck = () => setDone((prev) => !prev);

  const toggleCheck = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const newTask: Task = {
    id: Date.now(),
    text: "input",
    done: false,
  };

  const handleAddItem = () => {
    setItems((prev) => [...prev, newTask]);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="w-full min-h-screen p-4 lg:p-10 flex justify-center items-center">
      {/* card */}
      <div className="w-full min-h-screen bg-white rounded-lg p-2 lg:p-8 shadow-md">
        <p className="font-bold text-center text-xl md:text-4xl text-purple-950">
          To do list
        </p>

        {/* add task btn */}
        <div className="mt-4">
          <button
            className="btn-base bg-purple-800 text-white"
            onClick={handleAddItem}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        {/* task input */}
        <div className="mt-4 w-full flex flex-wrap gap-y-2 lg:gap-y-8">
          {items.map((task) => (
            <div key={task.id} className="w-full lg:w-6/12 p-2 items-center">
              <div className="w-full flex gap-4 items-center">
                {/* checkbox */}
                <input
                  type="checkbox"
                  className="w-4 h-4 lg:w-6 lg:h-6 accent-purple-600 text-center"
                  onClick={() => toggleCheck(task.id)}
                />
                {/* task */}
                <div className="w-11/12 flex bg-purple-200 p-4 rounded-lg text-xl">
                  <input
                    type="text"
                    className={`outline-none bg-transparent w-10/12 ${
                      task.done ? "line-through" : ""
                    } `}
                  />

                  {/* delete btn */}
                  <div className="w-2/12 flex justify-end gap-2">
                    <button
                      className="text-purple-800"
                      onClick={() => handleDelete(task.id)}
                    >
                      <i className="fa-solid fa-trash-can text-xs lg:text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
