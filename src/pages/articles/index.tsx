import { PublicLayout } from "@/layouts";
import React, { useState, useEffect, useCallback } from "react";

const ArticlesMainPage = () => {
  console.log("...start..");
  // const intervalId = setInterval(() => {
  //   console.log("...running..");
  // }, 2000);
  // console.log("...end..", intervalId);

  // useEffect(() => {
  //   console.log("effect running---->");
  // }, []);
  // console.log("...end..");

  return (
    <PublicLayout
      title="Articles | Acharya Prashant"
      navClass="fixed top-0 left-0 z-50 w-screen"
      insideNavClass="hidden"
      innerBarClass="lg:mt-[48px] mt-[68px]"
    >
      <section className="flex flex-col justify-center items-center min-h-[80vh]">
        <div className="text-2xl font-semibold text-orange-700 mb-5">
          Debouncing Test Page
        </div>
        {/* <SearchBooks />
        <DebounceSearchAPI /> */}
      </section>
    </PublicLayout>
  );
};

export default ArticlesMainPage;

// Demo dataset to simulate API response
const booksDataset = [
  { _id: "1", name: "JavaScript: The Good Parts" },
  { _id: "2", name: "Eloquent JavaScript" },
  { _id: "3", name: "You Don’t Know JS" },
  { _id: "4", name: "JavaScript: The Definitive Guide" },
  { _id: "5", name: "Learn JavaScript VISUALLY" },
];

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Debounce function to limit the rate of function execution
  const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return (...args: any) => {
      if (timeoutId) clearTimeout(timeoutId); // Clear the previous timeout if there was one
      console.log(`Debounce: setting timeout for ${delay}ms`);
      timeoutId = setTimeout(() => {
        console.log(`Debounce: executing function with args:`, args);
        func.apply(null, args); // Execute the function after the delay
      }, delay);
    };
  };

  // Simulate fetching books based on the search term
  const fetchBooks = (name: any) => {
    console.log(`Fetching books for name: ${name}`);
    const filteredBooks = booksDataset.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
    setResults(filteredBooks as any);
  };

  // Create a debounced version of the fetchBooks function
  const debouncedFetchBooks = useCallback(debounce(fetchBooks, 500), []);

  // Effect to handle the search term changes
  useEffect(() => {
    if (searchTerm) {
      debouncedFetchBooks(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm, debouncedFetchBooks]);

  return (
    <div>
      <input
        type="text"
        className="px-4 py-3 border my-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books by name"
      />
      <ul>
        {results.map((book: any) => (
          <li className="text-lg font-semibold py-2" key={book._id}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DebounceSearchAPI = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Debounce function to limit the rate of API calls
  const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return (...args: any) => {
      if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout if exists
      console.log(`Debounce: setting timeout for ${delay}ms`);
      timeoutId = setTimeout(() => {
        console.log(`Debounce: executing function with args:`, args);
        func.apply(null, args); // Execute the function after the delay
      }, delay);
    };
  };

  // Function to fetch books based on the search term
  const fetchBooks = async (name: any) => {
    try {
      console.log(`Fetching books for name: ${name}`);
      const response = await fetch(
        `https://demo.dataverse.org/api/search?q=${name}`
      );
      const data = await response.json();
      console.log("API response:", data);
      setResults(data.data.items); // Set the results from the response
    } catch (error) {
      console.error("Error fetching books:", error);
      setResults([]);
    }
  };

  // Create a debounced version of the fetchBooks function
  const debouncedFetchBooks = useCallback(debounce(fetchBooks, 500), []);

  // Effect to handle the search term changes
  useEffect(() => {
    if (searchTerm) {
      debouncedFetchBooks(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm, debouncedFetchBooks]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books by name"
        className="px-6 py-3 border rounded-lg"
      />
      <ul className="my-8 mb-10">
        {results.map((book: any, index: any) => (
          <li className="text-gray-800 text-lg font-semibold py3" key={index}>
            <a href={book.url} target="_blank" rel="noopener noreferrer">
              {book.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
