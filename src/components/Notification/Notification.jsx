import React from 'react';
import * as S from './Notification.style';

function Notification({ message, type }) {
  return <S.NotificationText type={type}>{message}</S.NotificationText>;
}

export default Notification;
