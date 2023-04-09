import React from 'react';
import { CardProp } from './type';
import './Card.scss';

const Card = ({ classes, imgAlt, imgId, cardTitle }: CardProp) => {
  return (
    <li className={`card ${classes}`} data-testid="Card">
      <img
        src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}
        alt={imgAlt}
        className="card-img"
      ></img>
      <div className="card-description">
        <p className="card-title">{cardTitle}</p>
        {/* <span>{imgAuthor}</span>
        <span>{imgYear}</span> */}
      </div>
    </li>
  );
};

export default Card;
