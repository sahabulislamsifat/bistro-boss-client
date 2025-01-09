import { Helmet } from "react-helmet-async";
import Cover from "../../components/cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Menu</title>
      </Helmet>
      {/* Banner / Cover  */}
      <Cover img={menuImage} title={"our menu"}></Cover>
      {/* main menu section  */}
      <SectionTitle
        heading={"today's offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      {/* offered menu  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu  */}
      <MenuCategory
        items={desserts}
        title={"Dessert"}
        image={dessertImage}
      ></MenuCategory>
      {/* pizza menu  */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        image={pizzaImage}
      ></MenuCategory>
      {/* salad menu  */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        image={saladImage}
      ></MenuCategory>
      {/* soup menu  */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        image={soupImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
