import { Component } from "react";
import MyNavBar from "../components/MyNavBar";
import product from "../data/fantasy.json";
import MySingleBook from "../components/MySingleBook";
import MyCommentsArea from "../components/MyCommentsArea";

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//     headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzMxNDkyOTcsImV4cCI6MTczNDM1ODg5N30.HUif1aJ5tANq0uTrQEF5kJCoXnQRzU9576VKM6IFRow"
//     }
//     })

class Home extends Component {
  state = {
    asinBook: "",
    obj: [],
  };

  //   fetchBooks = () => {
  //     fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.asin, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzMxNDkyOTcsImV4cCI6MTczNDM1ODg5N30.HUif1aJ5tANq0uTrQEF5kJCoXnQRzU9576VKM6IFRow",
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Errore nella risposta dell’API");
  //         }
  //         return response.json(); // Converte la risposta in JSON
  //       })
  //       .then((books) => {
  //         console.log(books);
  //       })
  //       .catch((error) => {
  //         this.setState({ error: error.message, loading: false }); // Gestisce eventuali errori
  //       });
  //   };

  //   componentDidMount() {
  //     this.fetchBooks();
  //   }

  changeBookListState = (newAsin) => {
    this.setState({
      asin: newAsin,
    });
  };

  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <div className="grid grid-cols-12">
          <div className="col-span-6 bg-gray-800 rounded-lg flex flex-col items-center m-5 gap-4 p-3 pt-5">
            <div className="grid grid-cols-2 gap-6">
              {product.slice(0, 10).map((book) => {
                return (
                  <MySingleBook
                    key={book.asin}
                    img={book.img}
                    title={book.title}
                  ></MySingleBook>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 bg-gray-600 rounded-lg m-5">
            <MyCommentsArea asin={"0316438960"}></MyCommentsArea>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
