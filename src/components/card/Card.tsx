import React, { useState } from 'react';
import { CardProp } from './type';
import CardModal from '../../components/cardModal/CardModal';
import './Card.scss';

const Card = ({
  classes,
  imgAlt,
  imgId,
  imgAuthor,
  cardTitle,
  place,
  imgDepartment,
  imgYear,
}: CardProp) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const cardOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsCardModalOpen(true);
  };

  const onClose = () => {
    setIsCardModalOpen(false);
  };

  return (
    <li className={`card ${classes}`} onClickCapture={cardOnClick} id={imgId} data-testid="Card">
      <img
        src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}
        alt={imgAlt}
        className="card-img"
      ></img>
      <div className="card-description">
        <p className="card-title">{cardTitle}</p>
        <span>{imgAuthor}</span>
      </div>
      {isCardModalOpen && (
        <CardModal
          imgAlt={imgAlt}
          imgAuthor={imgAuthor}
          imgId={imgId}
          imgDepartment={imgDepartment}
          cardTitle={cardTitle}
          imgYear={imgYear}
          place={place}
          onClose={onClose}
        />
      )}
    </li>
  );
};

export default Card;
