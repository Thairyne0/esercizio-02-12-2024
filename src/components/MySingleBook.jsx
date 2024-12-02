import { Component } from "react";

class MySingleBook extends Component {
  render() {
    return (
      <a href="">
        <div className="flex flex-col justify-between items-center rounded-lg w-60 h-96 p-7 border border-white text-white gap-3">
          <img src={this.props.img} alt="book" className="" />

          <h2>{this.props.title}</h2>
        </div>
      </a>
    );
  }
}

export default MySingleBook;
