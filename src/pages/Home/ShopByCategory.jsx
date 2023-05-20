import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabBody from "../../components/TabBody/TabBody";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  return (
    <>
      <section className="section-shopby-category">
        <div className="container px-10 py-10">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h3>
          <div className="shop-tab">
            <Tabs>
              <TabList>
                {categories.map((category, index) => (
                  <Tab key={index}>{category.label}</Tab>
                ))}
              </TabList>

              {categories.map((category, index) => (
                <TabPanel key={index}>
                  <TabBody category={category} />
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
