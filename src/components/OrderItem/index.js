import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: 0
    };
  }
  render() {
    const { shop, product, price, picture, isCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__container">
          <div className="orderItem__picContainer">
            <img className="orderItem__pic" src={picture} alt="商品名称" />
          </div>
          <div className="orderItem__content">
            <div className="orderItem__product">{product}</div>
            <div className="orderItem__shop">{shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">{price}</div>
              <div>
                {isCommented ? (
                  <button className="orderItem__btn orderItem__btn--gray">
                    已评价
                  </button>
                ) : (
                  <button
                    className="orderItem__btn orderItem__btn--red"
                    onClick=""
                  >
                    评价
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea className="orderItem__comment" />
        {this.renderStars()}
        <button className="orderItem__btn orderItem__btn--red">提交</button>
        <button className="orderItem__btn orderItem__btn--gray">取消</button>
      </div>
    );
  }
  renderStars() {
    const { stars } = this.state;
    return (
      <div className="orderItem__stars">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const light = stars >= item ? "orderItem_star--light" : "";
          return <span key={index}>★</span>;
        })}
      </div>
    );
  }
}

export default OrderItem;
