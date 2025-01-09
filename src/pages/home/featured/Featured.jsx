import SectionTitle from "../../../components/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./FeaturedBackground.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-10">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-15 bg-slate-600">
        <div>
          <img src={featuredImage} alt="featured image" />
        </div>
        <div className="md:ml-8 text-yellow-400">
          <p>Jan 08, 2025</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
            corporis dolorem. Quod, cumque voluptatum harum saepe sit quisquam,
            ullam, quibusdam fugiat modi provident aliquid officiis eaque esse
            hic suscipit maxime tenetur repellendus magni earum omnis. Nesciunt
            vero mollitia nihil maxime, deleniti libero quibusdam, rem facilis
            suscipit recusandae perferendis delectus!
          </p>
          <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
