import React, { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const TabBody = ({ category }) => {
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${category.value}`)
      .then((response) => response.json())
      .then((result) => {
        setCategoryPosts(result);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between items-center py-10">
        {categoryPosts.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </>
  );
};

export default TabBody;
