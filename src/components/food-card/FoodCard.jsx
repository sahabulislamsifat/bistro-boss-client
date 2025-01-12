const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 shadow-md rounded-md">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="absolute mr-4 right-0 bg-slate-600 text-white px-4 py-1 mt-3 rounded-sm">
        ${price}
      </p>
      <div className="card-body flex">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className=" font-semibold mx-auto btn w-3/5 py-3 mt-3 bg-gray-700 hover:bg-gray-800 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
