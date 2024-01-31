import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, onToggleFavorite, isFavorite, toggleModal }) => {
  const modalInfo = { id: photo.id,
                      location: photo.location,
                      urls: photo.urls.full,
                      user: { name: photo.user.name,
                              profile: photo.user.profile
                            }
                    }

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} id={photo.id}/>
      <img onClick={() => toggleModal(modalInfo)} className="photo-list__image" src={photo.urls.full} />
      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.name}
          <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
