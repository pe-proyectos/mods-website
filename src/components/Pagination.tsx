import React, { useState } from 'react';

export const Pagination: React.FC<{ total: number; selected: number }> = ({
  total,
  selected,
}) => {
  const numbers = Array(total).fill(1);
  const [numSelected, setNumSelected] = useState(selected);

  const onhandleClick = (num: number) => {
    setNumSelected(num);
  };

  return (
    <div className="bg-secundary grid grid-flow-col grid-rows-1 ">
      {numbers.map((_item, index) => {
        return (
          <button
            key={index}
            onClick={() => onhandleClick(index + 1)}
            className={
              '  py-1 px-2.5 ' +
              (index + 1 === numSelected ? 'bg-shadow' : 'hover:bg-zinc-800')
            }
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
