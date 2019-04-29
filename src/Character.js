import React from 'react';

// pull character from props
function Character({data}) {
    return (
      <ul>
        <li>name: {data.name}</li>
        <li>born: {data.born}</li>
        <li>culture: {data.culture}</li>
      </ul>        
    );
}

export default Character;