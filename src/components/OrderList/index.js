import React, { Component } from "react";
import OrderItem from "../OrderItem";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/mock/orders.json").then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          );
        })}
      </div>
    );
  }
  /**
   * 提交评论
   */
  handleSubmit = (id, comment, stars) => {
    // fetch("/saveComment").then(() => {});
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            isCommented: true
          }
        : item;
    });
    this.setState({ data: newData });
  };
}

export default OrderList;
