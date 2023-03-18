import Card from '../card/Card';
import React from 'react';
import paintings from './../../data/paintings';
import { CardListProp } from './type';
import { Painting } from './../../data/type';
import './CardList.scss';

const CardList = ({ classes }: CardListProp) => {
  return (
    <ul className={`list card-list ${classes}`}>
      {paintings.map((el: Painting) => {
        return (
          <Card
            key={el.id}
            imgLink={el.imgLink}
            imgAlt={el.name}
            cardTitle={el.name}
            imgAuthor={el.author}
            imgYear={el.year}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
