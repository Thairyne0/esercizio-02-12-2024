import { Component } from "react";

class MySingleBook extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center bg-gray-500 rounded-lg w-60 h-96 shadow-md p-4">
        <img src={this.props.img} alt="book" className="" />

        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default MySingleBook;
