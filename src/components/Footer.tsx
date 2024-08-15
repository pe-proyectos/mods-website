import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  const linkTo = (title: string, url: string) => {
    return (
      <a className="hover:underline cursor-pointer" href={url} target="_blank">
        {title}
      </a>
    );
  };

  return (
    <footer className="py-4 px-3 flex flex-col gap-8 ">
      <div className="w-full flex flex-row  gap-20 text-[13px] text-text_primary px-4 max-lg:gap-10 max-md:flex-col">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#827F7F] text-[15px] mb-3">SOTF-MODS</p>
          {linkTo('[Youtube] Shoko', '#')}
          {linkTo('[GitHub] Contribuir al backend del proyecto', '#')}
          {linkTo('[GitHub] Contribuir al frontend del proyecto', '#')}
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#827F7F] text-[15px] mb-3">SOCIOS</p>
          {linkTo('[Discord] Sons of | The forest', '#')}
          {linkTo('[Youtube] Toni Macaroni', '#')}
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-[#827F7F] text-[15px] mb-3">SITIOS RELACIONADOS</p>
          {linkTo('Tonihub - Volcados de datos actualizados para Sons of the Forest', '#')}
          {linkTo('RedLoader Wiki - Wiki oficial sobre cómo usar RedLoader', '#')}
          {linkTo(
            'SOTF Mods Tutorials - Una guía de inicio sobre cómo hacer mods usando RedLoader',
            '#'
          )}
        </div>
      </div>

      <div className="w-full flex flex-row justify-between max-[600px]:flex-col gap-5">
        <div className="flex flex-row">
          <img src="/images/logo.png" alt="logo Small" className="w-20 grayscale" />
          <div className="flex flex-col items-start text-[14px] text-text_primary ">
            <p className="opacity-85">Sons of the forest Mods </p>
            <p className="opacity-85">Proveyendo mods de calidad desde 2023</p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center mr-5 max-[600px]:ml-5">
          <FaTwitter className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
          <IoLogoYoutube className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
          <FaFacebookF className="size-6 text-text_primary hover:opacity-70 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
