import React from "react";

import "./listCardImage.scss";

import CardImage from "../CardImage/CardImage";

export default function Content(props) {
  var getCardImage = props.data.map(e => {
    return <CardImage item={e} minWidth={props.minWidth} />
  });
  return <div className="list_card">
    <span className="list_card_title">{props.title}</span>
    <div className="list_card_item">
    { getCardImage }
    </div>
  </div>;
}
