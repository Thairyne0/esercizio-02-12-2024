//   fetchComments = () => {
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

import { useState, useEffect } from "react";

//   componentDidMount() {
//     this.fetchBooks();
//   }
/*
componentDidMount = () => {
    if(this.props.asin){
        this.fetchComments();
    }

}

componentDidUpdate = () =>{
    if(this.props.asin !== prevProps.asin){
        this.fetchComments();
    }
    
    }

    */

const MyCommentsArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGIzMzhhZDEyOTAwMTU4NzZiYzMiLCJpYXQiOjE3MzMxNDkyOTcsImV4cCI6MTczNDM1ODg5N30.HUif1aJ5tANq0uTrQEF5kJCoXnQRzU9576VKM6IFRow",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta dell’API");
        }
        return response.json(); // Converte la risposta in JSON
      })
      .then((books) => {
        setComments(books);
        console.log(books);
      })
      .catch((error) => {
        setError(error.message); // Gestisce eventuali errori
      });
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div>
      {comments.map((data) => {
        return (
          <p
            key={data._id}
            className=" m-3 bg-gray-400 rounded-lg font-bold p-2"
          >
            {data.author}:<strong className=" block">{data.comment}</strong>
          </p>
        );
      })}
    </div>
  );
};

export default MyCommentsArea;
