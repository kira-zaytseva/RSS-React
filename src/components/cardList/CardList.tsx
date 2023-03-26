import Card from '../card/Card';
import React, { Component } from 'react';
import paintings from './../../data/paintings';
import { CardListProp } from './type';
import { Painting } from './../../data/type';
import './CardList.scss';

class CardList extends Component<CardListProp> {
  render() {
    const { classes } = this.props;
    return (
      <ul className={`list card-list ${classes}`} data-testid="card-list">
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
  }
}

export default CardList;
