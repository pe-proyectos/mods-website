import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { navigateTo } from '../utils/navigate';

import lenguagues from '../constants/languages.json';
const Header = () => {
  return (
    <nav className="bg-primary sticky top-0 z-50 w-full flex flex-row items-center h-[9vh] max-h-[9vh]  px-6 py-2 justify-between max-sm:px-3 max-sm:max-h-[7vh] ">
      <a
        className="cursor-pointer object-cover w-[25%] min-w-[280px] max-md:min-w-min  "
        href="/"
      >
        <img
          src="/images/logo-large.png"
          alt="logo large"
          className="hover:opacity-80 max-md:hidden"
        />
        <img
          src="/images/logo-sm.png"
          alt="logo medium"
          className="hover:opacity-80 hidden max-md:block max-sm:hidden w-[130px] "
        />
        <img
          src="/images/logo.png"
          alt="logo small"
          className="hover:opacity-80 hidden max-sm:block w-[70px]"
        />
      </a>
      <div className=" text-text_primary text-[14px] max-lg:hidden">
        Inicia sesión para deshabilitar los anuncios
      </div>
      <div className="flex flex-row items-center  text-text_primary font-semibold text-[14px] h-full">
        <a
          className="cursor-pointer hover:bg-shadow px-5 max-sm:px-2.5  h-full content-center rounded-md flex flex-row gap-2 items-center"
          href="/"
        >
          <img src="/images/redlogo.png " className="w-14 hidden max-sm:block" />
          <p className="max-sm:hidden"> Red Loader</p>
        </a>

        <a
          className="cursor-pointer hover:bg-shadow px-5 max-sm:px-2.5 h-full content-center rounded-md flex flex-row gap-1 items-center"
          href="https://discord.com/invite/sotf"
          target="_blank"
        >
          <FaDiscord className="size-6 text-text_primary" />
          <p className="max-sm:hidden">Discord</p>
        </a>

        <div className="dropdown dropdown-end  h-full content-center ">
          <div tabIndex={0} role="button" className="h-full flex items-center ">
            <a className="cursor-pointer hover:bg-shadow px-5 max-sm:px-2.5  h-full content-center rounded-md flex flex-row gap-1 items-center">
              <AiOutlineGlobal className="size-6 text-text_primary " />
              <p className="max-sm:hidden">ES</p>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-secundary rounded-box z-[1] w-48 px-2 py-1 shadow"
          >
            {lenguagues.map((item) => {
              return (
                <li key={item.key} className="font-normal text-[14px] ">
                  <a>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dropdown dropdown-end  h-full content-center ">
          <div tabIndex={0} role="button" className="h-full flex items-center ">
            <img
              src={
                'https://videogames.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2NDYxOTIwNjQ2MDc5NjM4/sons-of-the-forest-kelvin.jpg'
              }
              className="object-cover rounded-full size-12 border-[5px] border-transparent  hover:border-shadow "
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-secundary rounded-box z-[1] w-48 px-2 py-1 shadow"
          >
            <li className="font-normal text-[14px] ">
              <a
                onClick={() => {
                  navigateTo('/login');
                }}
              >
                {'Iniciar sesión'}
              </a>
            </li>
            <li className="font-normal text-[14px] ">
              <a
                onClick={() => {
                  navigateTo('/register');
                }}
              >
                {'Registrarse'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
