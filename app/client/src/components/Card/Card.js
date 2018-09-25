import React from "react";
// import CardBtn from "../CardBtn";
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
    <img className="work-image" alt="place holder" src="https://cdn.shopify.com/s/files/1/1245/7671/products/Cosmic-Blizzard-Fluid-Painting-Splatter-Abstract-Art-Modern-Original_1024x1024.jpg?v=1471209003" />
  </div>
  <div className="content">
    <ul>
      <li>
        <strong>Title:</strong> {/* {props.name} */}
      </li>
      <li>
        <strong>Size:</strong> {/* {props.occupation} */}
      </li>
      <li>
        <strong>Qty:</strong> {/* {props.location} */}
      </li>
    </ul>
  </div>
  {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
    𝘅
  </span> */}
</div>
);

export default Card;
