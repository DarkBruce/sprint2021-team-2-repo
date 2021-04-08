import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faFlag } from '@fortawesome/free-solid-svg-icons';

import './CommentBox.css';

const DEFAULT_PROFILE_PIC = 'https://s3-media3.fl.yelpcdn.com/photo/O8CmQtEeOUvMTFk0iMn5sw/o.jpg';

export default ({ text, author, profile, commentId, hidden, onClose, onReport }) => {
  const onDeleteClick = e => {
    fetch(`/restaurant/profile/${restaurantId}/comment_delete/${commentId}`).then(res => {
      if (res.ok) {
        location.reload();
      }
    });
  };

  return commentId ? (
    <div className="d-flex" className="comment__wrapper">
      <div className="comment__alignment"></div>
      <div className="comment__container">
        <img className="comment__profile__pic" src={profile ? profile : DEFAULT_PROFILE_PIC} />
        <div className="text-muted text-sm text-truncate comment__text">
          { text }
        </div>
        <i className="text-primary btn btn-sm ml-1" onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faBackspace} />
        </i>
        <i className="text-secondary btn btn-sm ml-1" onClick={onReport}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      </div>
    </div>
  ) : (
    <div className="comment__wrapper">
      <div className="comment__alignment"></div>
      <div className="comment__container">
        <input type="text" name="text" className="form-control form-control-sm w-50 d-inline-block"></input>
        <button type="submit" className="btn btn-sm btn-primary ml-2">Submit</button>
        <button type="button" className="btn btn-sm btn-secondary ml-2" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
