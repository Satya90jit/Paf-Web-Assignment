import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

function FormValidation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle form submission and validation
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: FormErrors = validateForm(formData);
    setErrors(validationErrors);

    // If no errors, submit form
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  // Validate form fields
  const validateForm = (data: FormData): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!data.name) validationErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(data.email))
      validationErrors.email = "Email is invalid";
    if (data.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters long";

    return validationErrors;
  };

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default FormValidation;
