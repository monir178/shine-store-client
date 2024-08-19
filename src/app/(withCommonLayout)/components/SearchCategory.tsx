"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const categories = [
  { name: "Dishwashing Items", image: "/dishwashing-supplies.png" },
  { name: "Laundry Products", image: "/Laundry Products.jpg" },
  { name: "Toilet Cleaners", image: "/Toilet Cleaners.jpg" },
  { name: "Cleaning Accessories", image: "/Cleaning Accessories.jpg" },
  { name: "Napkins", image: "/Napkins.jpg" },
  { name: "Pest Control Products", image: "/Pest Control Products.png" },
];

const SearchCategory = () => {
  const router = useRouter();

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      router.push(`/products?category=${selectedCategory}`);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-xl lg:text-3xl mb-4 font-bold text-green-400">
          Filter by Category
        </h1>
        <select
          onChange={handleCategoryChange}
          className="bg-gray-600 text-white px-3 py-2 rounded-xl "
          defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchCategory;
