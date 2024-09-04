import React from "react";
import { CardWeekMod } from "./Cards";
import dataWeekMod from "../constants/dataWeekMods.json";
const WeekMods = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col gap-8 items-center  max-[830px]:hidden">
      <h2 className="text-text_primary text-4xl font-semibold">Mods of the Week</h2>
      <div className="flex flex-wrap justify-around  min-h-64">
        {dataWeekMod.map((item) => {
          return (
            <CardWeekMod
              topNumber={item.topNumber}
              abstract={item.abstract}
              downloadNumbersWeek={item.downloadNumbersWeek}
              downloadNumbersTotal={item.downloadNumbersTotal}
              id={item.id}
              img={item.img}
              owner={item.owner}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WeekMods;
