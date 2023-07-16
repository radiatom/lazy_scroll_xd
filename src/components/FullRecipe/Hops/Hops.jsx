import React from 'react';

const Hops = ({el}) => {
      return (
            <div>
                  <p>{el.name}{" "}{el.amount.value}{" "}{el.amount.unit}</p>
                  <p>add: {el.add}</p>
                  <p>attribute: {el.attribute}</p>
            </div>
      );
}

export default Hops;
