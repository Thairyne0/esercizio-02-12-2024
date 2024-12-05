const MyDetailsCard = ({ imgUrl, title, price }) => {
  console.log(imgUrl);
  return (
    <div className="flex flex-col rounded-lg bg-gray-700 text-white p-11 gap-6">
      <img src={imgUrl} alt="Book Cover" className="rounded-lg"></img>
      <div className="rounded-lg bg-slate-500">
        <h2>{title}</h2>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default MyDetailsCard;
