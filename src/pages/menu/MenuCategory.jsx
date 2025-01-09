import MenuItem from "../shared/MenuItem";
import Cover from "../../components/cover/Cover";

const MenuCategory = ({ items, title, image }) => {
  return (
    <section className="pt-8">
      {title && <Cover img={image} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
