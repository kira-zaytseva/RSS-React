import React, { Component } from 'react';
import { CardProp } from './type';
import './Card.scss';

class Card extends Component<CardProp> {
  render() {
    const { classes, imgAlt, imgLink, imgAuthor, imgYear, cardTitle } = this.props;
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
  }
}

export default Card;
