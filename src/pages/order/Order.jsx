import { useState } from "react";
import orderImage from "../../assets/shop/banner2.jpg";
import Cover from "../../components/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Order Food</title>
      </Helmet>
      <Cover img={orderImage} title={"Order Food"}></Cover>
      {/* React Tabs  */}
      <div className={"flex mx-auto justify-center items-center my-10"}>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"flex justify-center mb-10 gap-2"}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
