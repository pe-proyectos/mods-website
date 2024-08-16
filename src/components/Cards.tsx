import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { PiTimerFill } from 'react-icons/pi';
import useHover from '../utils/useHover';

interface CardModProps {
  id: string;
  title: string;
  type: string;
  img: string;
  owner: string;
  score: number;
  abstract: string;
  downloadNumbers: number;
  timeAgo: number;
}

export const CardMod: React.FC<CardModProps> = ({
  id,
  title,
  type,
  img,
  owner,
  score,
  abstract,
  downloadNumbers,
  timeAgo,
}) => {
  return (
    <div className="max-w-[370px] min-w-[300px]   bg-secundary rounded-xl overflow-hidden  ">
      <figure className="w-full overflow-hidden object-cover relative h-[40%] min-h-[200px]">
        <img src={img} alt={title} className="opacity-80" />
        <p className="absolute right-3 top-3 bg-[#1d1c1c63] px-3 py-0.5 rounded-md text-xs ">
          {type}
        </p>
      </figure>
      <div className="w-full flex flex-col gap-2 py-2 px-4 text-text_primary ">
        <div className="w-full">
          <p className="flex flex-row gap-2 items-center">
            <span className="font-semibold text-xl">{title}</span>
            <sup className="text-[#09CDB3]">{score}</sup>
          </p>
        </div>
        <p className="text-[14px]">
          by <span className="text-btn_primary">{owner}</span>
        </p>
        <p className="text-[14px] line-clamp-3 text-ellipsis">{abstract}</p>
        <div className="w-full flex justify-end">
          <button
            className="btn btn-outline btn-accent py-1 min-h-[2.5rem] h-[2.5rem]"
            onClick={() => alert(`ID: ${id}`)}
          >
            Ver más
          </button>
        </div>
        <div className="flex flex-row gap-3 w-full justify-end text-[11px]">
          <p className="flex flex-row gap-2 text-btn_primary">
            {`${downloadNumbers} descargas`}
            <HiMiniArrowTrendingUp className="size-4" />
          </p>
          <p className="flex flex-row gap-2">
            <PiTimerFill className="size-4" />
            {`${timeAgo} days ago`}
          </p>
        </div>
      </div>
    </div>
  );
};

interface CardWeekModProps {
  topNumber: number;
  id: string;
  title: string;
  img: string;
  owner: string;
  abstract: string;
  downloadNumbersWeek: number;
  downloadNumbersTotal: number;
}

export const CardWeekMod: React.FC<CardWeekModProps> = ({
  topNumber,
  id,
  title,
  img,
  owner,
  abstract,
  downloadNumbersWeek,
  downloadNumbersTotal,
}) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <a
      className="mb-5 max-w-[370px] min-w-[300px] min-h-[225px]    rounded-xl   overflow-hidden object-cover relative cursor-pointer"
      onClick={() => {
        alert(id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt={title} className=" h-[225px]" />
      <div
        className={
          'w-full min-w-[300px] min-h-[225px] absolute top-0  bg-[#000000bc] flex flex-col justify-between gap-2  py-8 px-5 ' +
          (isHovered ? ' block' : ' hidden')
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center">
            <p className="text-white font-bold text-4xl">#{topNumber}</p>
            <p className="text-text_blue text-xl font-semibold">{title}</p>
            <sup className="text-text_blue ">{`by ${owner}`}</sup>
          </div>

          <p className="text-text_primary line-clamp-3 text-ellipsis ">{abstract}</p>
        </div>

        <p className="text-[15px] text-text_primary ">
          <span className="text-text_green "> {`${downloadNumbersWeek} `}</span>
          descargas en la última semana
          <span className="text-text_greenBlue">{` (${downloadNumbersTotal} total)`}</span>
        </p>
      </div>
    </a>
  );
};
