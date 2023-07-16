import React from 'react';

const Malt = ({el}) => {
      return (
            <p>{el.name}{" "}{el.amount.value}{" "}{el.amount.unit}</p>
      );
}

export default Malt;
