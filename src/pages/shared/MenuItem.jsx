const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt="item image"
      />
      <div>
        <h3 className="uppercase  font-semibold text-slate-600">
          {name}.........
        </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-blue-500 font-semibold">${price}</p>
    </div>
  );
};

export default MenuItem;
