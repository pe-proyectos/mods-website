import React, { useState } from 'react';

import { Pagination } from './Pagination';
const SearchMod = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col gap-2 items-center">
      <div className="flex flex-col w-full max-w-[630px] gap-3  items-center">
        <input
          type="text"
          placeholder="Escribe aquí"
          className="input input-bordered input-success py-2  w-full  max-[700px]:w-[90%]  rounded-full bg-transparent"
        />
        <div className="flex flex-row gap-2 max-[700px]:flex-col ">
          <div className="flex flex-row gap-2  max-[700px]:justify-center">
            <select defaultValue="Todas las categorías" className="select w-fit bg-secundary">
              <option value="Todas las categorías">Todas las categorías</option>
              <option value="Homer">Homer</option>
              <option value="Marge">Marge</option>
              <option value="Bart">Bart</option>
              <option value="Lisa">Lisa</option>
              <option value="Maggie">Maggie</option>
            </select>

            <select
              defaultValue="Más recientes"
              className="select w-full max-fit bg-secundary"
            >
              <option value="Más recientes" className="truncate">
                Más recientes
              </option>
              <option value="Homer">Homer</option>
              <option value="Marge">Marge</option>
              <option value="Bart">Bart</option>
              <option value="Lisa">Lisa</option>
              <option value="Maggie">Maggie</option>
            </select>
          </div>
          <div className="flex flex-row gap-2  max-[700px]:justify-center">
            <div className="form-control w-fit bg-secundary  rounded-md px-1 ">
              <label className="label cursor-pointer flex gap-2  h-full">
                <span className="label-text truncate ">No aprobados</span>
                <input type="checkbox" className="toggle toggle-accent" />
              </label>
            </div>
            <div className="form-control w-fit bg-secundary  rounded-md px-1 ">
              <label className="label cursor-pointer flex gap-2 h-full">
                <span className="label-text ">NSFW</span>
                <input type="checkbox" className="toggle toggle-accent" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <Pagination total={5} selected={1} />
    </section>
  );
};

export default SearchMod;
