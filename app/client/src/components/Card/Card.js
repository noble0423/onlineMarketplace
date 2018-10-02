import React from "react";
// import CardBtn from "../CardBtn";
// import Test from "../../components/Test";
import "./Card.css";

const Card = props => (
  // <div
  //   className="card"
  //   style={{
  //     backgroundImage: props.image ? `url(${props.image})` : "none"
  //   }}
  // >
  //   {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
  //   <CardBtn
  //     style={{ opacity: props.image ? 1 : 0 }}
  //     onClick={props.handleBtnClick}
  //     data-value="pass"
  //   />
  //   <CardBtn
  //     style={{ opacity: props.image ? 1 : 0 }}
  //     onClick={props.handleBtnClick}
  //     data-value="pick"
  //   />
  // </div>
  <div className="card">
  <div className="img-container">
    {/* <img alt={props.name} src={props.image} /> */}
    <img className="work-image" alt="place holder" src={props.image} />
  </div>
  <div className="content">
    <ul>
      <li>
        <strong>Title:</strong> {props.title}
      </li>
      <li>
        <strong>Size:</strong> {props.width} x {props.height}
      </li>
      <li>
        <strong>Qty:</strong> {props.quantity}
      </li>
      {/* <li>
        <Test testComponent={props.test} />
      </li> */}
    </ul>
  </div>
  {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
    𝘅
  </span> */}
</div>
);

export default Card;
