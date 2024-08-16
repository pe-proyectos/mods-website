import React from 'react';
import { navigateTo } from '../utils/navigate';
export const FormLogin: React.FC<{}> = () => {
  return (
    <form className="bg-secundary w-full  flex flex-col gap-4 p-8 items-center max-[900px]:p-6 max-[500px]:p-4 ">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Correo electrónico</span>
        </div>
        <input
          type="text"
          placeholder="Ingresa tu correo electrónico"
          className="input input-bordered w-full max-w-xs bg-transparent rounded-full"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Contraseña</span>
        </div>
        <input
          type="password"
          placeholder="Ingresa tu correo contraseña"
          className="input input-bordered max-w-xs bg-transparent rounded-full w-[300px] max-[500px]:w-full   "
        />
      </label>

      <p
        className="text-text_primary text-xs underline cursor-pointer hover:opacity-80 rounded-full w-[300px] max-[500px]:w-full "
        onClick={() => {
          navigateTo('/register');
        }}
      >
        {'!Regítrate Aquí'}
      </p>

      <button className="btn btn-success bg-text_green hover:bg-[#18A048] w-[300px] rounded-full  max-[500px]:w-full  ">
        Inciar Sesión
      </button>
    </form>
  );
};

export const FormRegister: React.FC<{}> = () => {
  return (
    <form className="bg-secundary w-full  flex flex-col gap-4 p-8 items-center max-[900px]:p-6 max-[500px]:p-4 ">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Correo electrónico</span>
        </div>
        <input
          type="text"
          placeholder="Ingresa tu correo electrónico"
          className="input input-bordered w-full max-w-xs bg-transparent rounded-full"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nombre de usuario</span>
        </div>
        <input
          type="text"
          placeholder="Ingresa tu correo nombre de usuario"
          className="input input-bordered w-full max-w-xs bg-transparent rounded-full"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Contraseña</span>
        </div>
        <input
          type="password"
          placeholder="Ingresa tu correo contraseña"
          className="input input-bordered max-w-xs bg-transparent rounded-full w-[300px] max-[500px]:w-full   "
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Confirmar contraseña</span>
        </div>
        <input
          type="password"
          placeholder="Repite tu contraseñ"
          className="input input-bordered max-w-xs bg-transparent rounded-full w-[300px] max-[500px]:w-full   "
        />
      </label>

      <button className="btn btn-success bg-text_green hover:bg-[#18A048] w-[300px] rounded-full  max-[500px]:w-full  ">
        Inciar Sesión
      </button>
    </form>
  );
};
