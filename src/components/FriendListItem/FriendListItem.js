import React from 'react';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      {isOnline ? (
        <span className="statusOn"></span>
      ) : (
        <span className="statusOff"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
