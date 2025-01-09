import { Helmet } from "react-helmet-async";
import Cover from "../../components/cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Menu</title>
      </Helmet>
      {/* Banner / Cover  */}
      <Cover img={menuImage} title={"our menu"}></Cover>
    </div>
  );
};

export default Menu;
