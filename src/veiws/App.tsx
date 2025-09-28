import { useState } from "react";

// export interface Task {
//   id: number;
//   done: boolean;
//   text: string;
// }
export default function App() {
  const [items, setItems] = useState<number[]>([]);
  const [done, setDone] = useState<boolean>(false);

  const handleCheck = () => {
    if(done !== done) {
      setDone(false);
    }
    else {
      setDone(true);
    }
  };


  const handleAddItem = () => {
    setItems([...items, items.length + 1]);
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
          {items.map((num) => (
            <div key={num} className="w-full lg:w-6/12 p-2 items-center">
              <div className="w-full flex gap-4 items-center">
                {/* checkbox */}
                <input
                  type="checkbox"
                  className="w-4 h-4 lg:w-6 lg:h-6 accent-purple-600 text-center"
                  onClick={handleCheck}
                />
                {/* task */}
                <div className="w-11/12 flex bg-purple-200 p-4 rounded-lg text-xl">
                  <input
                    type="text"
                    className={`outline-none bg-transparent w-10/12 ${done ? "line-through" : "" } `}
                  />

                  {/* delete btn */}
                  <div className="w-2/12 flex justify-end gap-2">
                    <button className="text-purple-800">
                      <i className="fa-solid fa-trash-can text-xs lg:text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Formik
        initialValues={{
          dueDate: "",
          title: "",
          detail: "",
        }}
        // validationSchema={}
        onSubmit={(values) => {
          console.log("a", values);
        }}
      >
        {({ setFieldValue, values, touched, errors }) => (
          <Form>
            <div className="w-6/12 p-4 bg-white rounded-lg mt-8">
              <p className="text-xl md:text-4xl"> Add New Task </p>
              <hr className="hr" />
              <div className="w-full mt-4">
                <TextField
                  id="title"
                  name="title"
                  value={values.title}
                  placeholder="Task title.."
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", e.target.value)
                  }
                />
              </div>
              <div className="w-full mt-4">
                <TextField
                  id="detail"
                  name="detail"
                  value={values.detail}
                  placeholder="Task detail.."
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("detail", e.target.value)
                  }
                />
              </div>
              <div className="w-full mt-4">
                <InputDateFormat
                  name="dueDate"
                  value={values.dueDate}
                  onChange={(dueDate) => setFieldValue("dueDate", dueDate)}
                  className={`${
                    getIn(touched, "dueDate")
                      ? getIn(errors, "dueDate")
                        ? "input_error h-10"
                        : "input_success h-10"
                      : "input_default"
                  }`}
                />
              </div>
              <div className="mt-4 w-full flex gap-2 justify-center">
                <button
                  type="submit"
                  className="btn-base bg-blue-950 text-white"
                >
                  Save
                </button>
                <button type="reset" className="btn-base bg-gray-200">
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik> */}
    </section>
  );
}
