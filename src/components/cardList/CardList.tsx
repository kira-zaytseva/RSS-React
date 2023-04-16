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
            id={el.id}
            imgId={el.image_id}
            imgAlt={el.title}
            cardTitle={el.title}
            imgAuthor={el.artist_title}
            place={el.place_of_origin}
            imgDepartment={el.department_title}
            imgYear={el.date_end}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
