import Card from '../card/Card';
import React from 'react';
import { CardListProp } from './type';
import { ArtWork } from '../../API/types';
import './CardList.scss';

const CardList = ({ classes, list }: CardListProp) => {
  return (
    <ul className={`list card-list ${classes}`} data-testid="card-list">
      {list.map((el: ArtWork) => {
        return (
          <Card
            key={el.id}
            imgId={el.image_id}
            imgAlt={el.title}
            cardTitle={el.title}
            // imgAuthor={el.author}
            // imgYear={el.year}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
