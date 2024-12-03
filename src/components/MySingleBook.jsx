const MySingleBook = ({ img, title, value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <a onClick={handleClick}>
      <div className="flex flex-col justify-between items-center rounded-lg w-60 h-96 p-7 border border-white text-white gap-3 hover:bg-gray-500">
        <img src={img} alt="book" />

        <h2>{title}</h2>
      </div>
    </a>
  );
};

export default MySingleBook;
