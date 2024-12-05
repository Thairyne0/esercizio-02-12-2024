import { useParams } from "react-router-dom";
import MyDetailsCard from "../components/MyDetailsCard";
import books from "../data/fantasy.json";
import React, { useState, useEffect } from "react";

const DetailsBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  const getBookById = (asin) => {
    // return book.find((book) => book.asin === id);
    console.log(asin);
    console.log(books);
    console.log(books.find((b) => b.asin === "0316389706"));
    const book = books.find((b) => b.asin === asin.id);
    console.log(book);
    return book;
  };

  useEffect(() => {
    const foundBook = getBookById({ id });
    setBook(foundBook);
    console.log("CIAO");
  }, [id]);

  console.log({ id });
  console.log(book);

  return (
    <div>
      <main>
        <div className="flex justify-center mt-12">
          <MyDetailsCard
            imgUrl={book.img}
            title={book.title}
            price={book.price}
          ></MyDetailsCard>
        </div>
      </main>
    </div>
  );
};

export default DetailsBook;
