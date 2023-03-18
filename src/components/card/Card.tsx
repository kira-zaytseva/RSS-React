import React from 'react';
import { CardProp } from './type';
import './Card.scss';

const Card = ({ classes, imgLink, imgAlt, cardTitle, imgAuthor, imgYear }: CardProp) => {
  return (
    <li className={`card ${classes}`}>
      <img src={imgLink} alt={imgAlt} className="card-img"></img>
      <div className="card-description">
        <p className="card-title">{cardTitle}</p>
        <span>{imgAuthor}</span>
        <span>{imgYear}</span>
      </div>
    </li>
  );
};

export default Card;
