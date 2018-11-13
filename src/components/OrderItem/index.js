import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  render() {
    const { shop, product, price, picture, isCommented } = this.props.data;
    return (
      <div className="orderItem">
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
        {this.renderEditArea()}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea className="rderItem__comment" />
        <button className="orderItem__btn orderItem__btn--red">提交</button>
        <button className="orderItem__btn orderItem__btn--gray">取消</button>
      </div>
    );
  renderStars() {
    return (
      <div className="orderItem__commentContainer">
        <textarea className="rderItem__comment" />
        <button className="orderItem__btn orderItem__btn--red">提交</button>
        <button className="orderItem__btn orderItem__btn--gray">取消</button>
      </div>
    );
  }
}

export default OrderItem;
