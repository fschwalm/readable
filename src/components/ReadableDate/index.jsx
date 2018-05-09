import React from 'react';

const getHumanReadableDate = (timestamp) => {
  const [, month, day, year, hours] = new Date(timestamp).toString().split(' ');
  const [hour, minute] = hours.split(':');

  return `${day} ${month} ${year} - ${hour}:${minute}`;
};

function ReadableDate({ timestamp }) {
  return (
    <div>
      <span>{getHumanReadableDate(timestamp)}</span>
    </div>
  );
}

export default ReadableDate;
