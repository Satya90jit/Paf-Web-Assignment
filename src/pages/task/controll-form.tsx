import React, { useState } from "react";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2</h2>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button onClick={() => setStep(1)}>Previous</button>
          <button onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3</h2>
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <button onClick={() => setStep(2)}>Previous</button>
          <button onClick={() => alert(JSON.stringify(formData, null, 2))}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
