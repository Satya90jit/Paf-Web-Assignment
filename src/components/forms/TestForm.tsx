import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";

const TestForm = () => {
  const [nameArray, setNameArray] = useState([{ firstName: "", lastName: "" }]);
  const [email, setEmail] = useState("");

  console.log("...nameArray", nameArray);

  // Handles changes for both first and last name fields
  const handleNameChange = (index: number, field: string, value: string) => {
    const newNameArray = nameArray.map((nameField, i) =>
      i === index ? { ...nameField, [field]: value } : nameField
    );
    setNameArray(newNameArray);
  };

  // const handleFirstNameChange = (index: any, value: any) => {
  //   const newNameArray = [...nameArray];
  //   newNameArray[index].firstName = value;
  //   setNameArray(newNameArray);
  // };

  // const handleLastNameChange = (index: any, value: any) => {
  //   const newNameArray = [...nameArray];
  //   newNameArray[index].lastName = value;
  //   setNameArray(newNameArray);
  // };

  const addNameField = () => {
    setNameArray([...nameArray, { firstName: "", lastName: "" }]);
  };

  const removeNameField = (index: any) => {
    const newNameArray = nameArray.filter((_, i) => i !== index);
    setNameArray(newNameArray);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  let formArray = {
    email: email,
    details: nameArray,
  };

  console.log("....send to ...>", formArray);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required");
      return;
    }
    for (const nameField of nameArray) {
      if (!nameField.firstName || !nameField.lastName) {
        alert("Both first name and last name are required for all fields");
        return;
      }
    }
    // Form submission logic
    console.log("Form Data:", { email, details: nameArray });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-blue-100 p-10"
      >
        <div>
          {nameArray.map((nameField, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg m-2 p-2 flex gap-4 items-center"
            >
              <input
                name={`firstName-${index}`}
                id="1"
                type="text"
                value={nameField.firstName}
                placeholder="Enter name"
                className="p-2"
                required
                // onChange={(e) => handleFirstNameChange(index, e.target.value)}
                onChange={(e) =>
                  handleNameChange(index, "firstName", e.target.value)
                }
              />
              <input
                name={`lastName-${index}`}
                id="2"
                type="text"
                value={nameField.lastName}
                placeholder="Enter name"
                className="p-2"
                required
                // onChange={(e) => handleLastNameChange(index, e.target.value)}
                onChange={(e) =>
                  handleNameChange(index, "lastName", e.target.value)
                }
              />
              <div className="flex gap-2">
                {nameArray.length > 1 && (
                  <Remove
                    className="bg-red-500 p-2 !text-4xl text-white rounded-3xl common-transition hover:bg-red-700 cursor-pointer"
                    onClick={() => removeNameField(index)}
                  />
                )}
              </div>
            </div>
          ))}
          <div>
            <Add
              className="bg-blue-700 text-white p-2 rounded-lg !text-4xl hover:bg-blue-600 cursor-pointer mt-5 w-full common-transition"
              onClick={addNameField}
            />
          </div>
        </div>
        <input
          name="email"
          type="text"
          value={email}
          placeholder="Enter email"
          className="p-2"
          required
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg mt-5 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TestForm;
