import React from 'react';

const MashTemp = ({el}) => {
      return (
            <div>
                  <p>temp: {el.temp.value}{" "}{el.temp.unit}</p>
                  <p>duration: {el.duration===null?'null':el.duration}</p>
            </div>
      );
}

export default MashTemp;
