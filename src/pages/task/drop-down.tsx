import { useState } from "react";

const data = [
  { country: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { country: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
  { country: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
];

function DependentDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e: any) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const foundCountry = data.find((c) => c.country === country);
    setCities(foundCountry ? foundCountry.cities : ([] as any));
  };

  return (
    <div className="p-4">
      <label className="block mb-2">Select Country:</label>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="block w-full p-2 border rounded-md"
      >
        <option value="">Select Country</option>
        {data.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <>
        <label className="block mt-4 mb-2">Select City:</label>
        <select
          disabled={cities.length === 0}
          className="block w-full p-2 border rounded-md"
        >
          <option value="">Select Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </>
    </div>
  );
}

export default DependentDropdown;
