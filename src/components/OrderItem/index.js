import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || ""
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
                    onClick={this.handleOpenEditArea}
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
  /**
   * 评论框
   */
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="orderItem__comment"
        />
        {this.renderStars()}
        <button
          className="orderItem__btn orderItem__btn--red"
          onClick={this.handleSubmitComment}
        >
          提交
        </button>
        <button
          className="orderItem__btn orderItem__btn--gray"
          onClick={this.handleCancelComment}
        >
          取消
        </button>
      </div>
    );
  }
  /**
   * 评分
   */
  renderStars() {
    const { stars } = this.state;
    return (
      <div className="orderItem__stars">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = stars >= item ? "orderItem_star--light" : "";
          return (
            <span
              key={index}
              onClick={this.handleClickStars.bind(this, item)}
              className={"orderItem_star " + lightClass}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }
  /**
   * 评价
   */
  handleOpenEditArea = () => {
    this.setState({
      editing: true
    });
  };
  /**
   * 评论框数据变化
   */
  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  /**
   * 修改评分
   */
  handleClickStars(stars) {
    this.setState({
      stars: stars
    });
  }
  /**
   * 取消评论
   */
  handleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.stars || ""
    });
  };
  /**
   * 确认评论
   */
  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, stars } = this.state;
    this.setState({
      editing: false
    });
    //调用父级方法
    this.props.onSubmit(id, comment, stars);
  };
}

export default OrderItem;
