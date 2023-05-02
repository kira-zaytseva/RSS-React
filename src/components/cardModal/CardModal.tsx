import React from 'react';
import { CardModalProp } from './type';
import './CardModal.scss';

const CardModal = ({
  classes,
  imgAlt,
  imgId,
  cardTitle,
  imgAuthor,
  imgYear,
  place,
  imgDepartment,
  onClose,
}: CardModalProp) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-bg" onMouseDown={handleClickOutside}>
      <section className={`card-modal ${classes}`} data-testid="CardModal">
        <img
          src={`https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`}
          alt={imgAlt}
          className="card-modal-img"
        ></img>
        <ul className="card-modal-description">
          <li className="card-modal-row">
            Title: <span className="card-modal-info">{cardTitle}</span>
          </li>
          <li className="card-modal-row">
            Author: <span className="card-modal-info">{imgAuthor}</span>
          </li>
          <li className="card-modal-row">
            Department: <span className="card-modal-info">{imgDepartment}</span>
          </li>
          <li className="card-modal-row">
            Place: <span className="card-modal-info">{place || 'unknown'}</span>
          </li>
          <li className="card-modal-row">
            Year: <span className="card-modal-info">{imgYear}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CardModal;
