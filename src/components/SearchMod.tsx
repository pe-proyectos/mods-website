import React, { useState } from "react";
import { CardMod } from "./Cards";
import { Pagination } from "./Pagination";
import { callAPI } from "../utils/callApi";

const SearchMod = () => {
  const [dataMod, setDataMod] = useState([]);

  React.useEffect(() => {//revisar la ruta del call api
    callAPI("/api/mods").then(([error, data]) => {
      console.log(data);
      setDataMod(data.mods);
    });
  },[]);

  return (
    <section className="w-[90%] mx-auto flex flex-col gap-2 items-center">
      <div className="flex flex-col w-full max-w-[630px] gap-3  items-center">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-success py-2  w-full  max-[700px]:w-[90%]  rounded-full bg-transparent"
        />
        <div className="flex flex-row gap-2 max-[700px]:flex-col ">
          <div className="flex flex-row gap-2  max-[700px]:justify-center">
            <select defaultValue="Todas las categorías" className="select w-fit bg-secundary">
              <option value="Todas las categorías">All categories</option>
              <option value="Homer">Homer</option>
              <option value="Marge">Marge</option>
              <option value="Bart">Bart</option>
              <option value="Lisa">Lisa</option>
              <option value="Maggie">Maggie</option>
            </select>

            <select defaultValue="Más recientes" className="select w-full max-fit bg-secundary">
              <option value="Más recientes" className="truncate">
                Latest
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
                <span className="label-text truncate ">Not approved</span>
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

      <div className="w-[88%]  mt-5 grid grid-flow-row gap-x-2 gap-y-5  grid-cols-3  max-[1450px]:w-full  max-xl:w-[75%]   max-xl:grid-cols-2   max-[1150px]:w-[85%] max-[1000px]:w-[95%] max-[900px]:grid-cols-1      justify-items-center">
        {dataMod.map((item:any) => {
          return (
            <CardMod
              key={item.code}
              title={item.name}
              type={item.type}
              img={item.thumbnail_url}
              owner={item.user_name}
              version={item.score}
              abstract={item.short_description}
              downloadNumbers={item.downloads}
              timeAgo={item.time_ago}
              nsfw={item.isNSFW}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SearchMod;
