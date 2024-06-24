"use client";
import { useState, useEffect } from "react";

const fetchdataAPI = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Error loading data");
  }
};

export default function Home() {
  const [fetched, setFetched] = useState([]);

  const intShop = async () => {
    try {
      const data = await fetchdataAPI();
      setFetched(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    intShop();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
      {fetched.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover"
            src={item.image}
            alt={item.title}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>
            <p className="text-gray-500 mb-4">{item.category}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <p className="text-gray-700">{item.rating.rate}</p>
                <span className="text-gray-500 ml-1">
                  ({item.rating.count} reviews)
                </span>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
