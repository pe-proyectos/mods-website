import React, { useState, type ChangeEvent } from 'react';
import { navigateTo } from '../utils/navigate';
import { CardMod } from './Cards';
import { validateZipFile } from '../utils/managmentFiles';

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

export const FormUploadMod: React.FC<{}> = () => {
  interface InputValuesMod {
    title: string;
    img: string;
    owner: string;
    version: number | string;
    abstract: string;
    downloadNumbers: number;
    timeAgo: number | string;
  }

  const [inputValuesMod, setInputValuesMod] = useState<InputValuesMod>({
    title: 'Mod Name',
    img: '/images/standarImg.png',
    owner: 'owner',
    version: '1.0.0',
    abstract: 'Esta es una descripción del mod.',
    downloadNumbers: 0,
    timeAgo: 'recien lanzado',
  });
  const [type, setType] = useState('Categoría');
  const [showAccordion, setShowAccordion] = useState(false);
  const [nsfw, setNsfw] = useState(false);
  const [description, setDescription] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValuesMod((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setNsfw(event.target.checked);
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const isValid = await validateZipFile(file);

        if (!isValid) alert('El archivo .zip no contiene manifest.json');

        setShowAccordion(true);
      } catch {
        alert('Error al procesar el archivo .zip');
      }
    }
  };

  return (
    <div
      className={
        'w-[800px] min-h-[82.5vh]  mx-auto gap-10 flex flex-row  justify-center max-[900px]:flex-col-reverse max-[900px]:items-center  ' +
        (!showAccordion && ' items-center')
      }
    >
      <div className=" flex flex-col gap-5 w-1/2  mx-auto  max-[800px]:w-[60%]  max-[700px]:w-[70%]  max-[700px]:p-4 max-[550px]:w-[90%]  px-8 py-2 bg-secundary">
        <p className="text-text_primary font-semibold text-xl ml-2">Subir mod (.zip) </p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-success w-full max-w-xs   rounded-full "
          accept=".zip"
          onChange={handleFileChange}
        />
        {showAccordion && (
          <div className="join join-vertical w-full text-text_primary">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">Información básica</div>
              <div className="collapse-content flex flex-col gap-2">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Nombre</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Ingrese la nombre del mod"
                    className="input input-bordered bg-transparent rounded-full"
                    onChange={handleChange}
                    value={inputValuesMod.title}
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Descripción corta</span>
                    <span className="label-text text-xs">(máx: 100 caracteres)</span>
                  </div>

                  <input
                    type="text"
                    name="abstract"
                    placeholder="Ingrese la descripción del mod"
                    className="input input-bordered bg-transparent rounded-full"
                    onChange={handleChange}
                    value={inputValuesMod.abstract}
                  />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Descripción</span>
                    <span className="label-text-alt">{`${description.length}/2000 caracteres`}</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-transparent rounded-3xl"
                    name="description"
                    placeholder="Ingrese la descripción del mod"
                    onChange={handleChangeTextArea}
                    value={description}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Categoría</div>
              <div className="collapse-content flex flex-col gap-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Contiene contenido NSFW</span>
                    <input
                      type="checkbox"
                      className="toggle  toggle-accent"
                      name="nsfw"
                      onChange={handleCheckBox}
                    />
                  </label>
                </div>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Categoría</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs bg-transparent rounded-full"
                    onChange={handleSelectChange}
                  >
                    <option disabled selected>
                      Seleccione una categoria
                    </option>
                    <option>Library</option>
                    <option>Misc</option>
                    <option>Modal Swap</option>
                    <option>Quality of Life</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Imágenes</div>
              <div className="collapse-content flex flex-col gap-1">
                <p className="text-xs">
                  Las imágenes deben estar en formato .png, .jpeg o .gif
                </p>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Miniatura</span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs rounded-full"
                    accept=".png, .jpeg o .gif"
                  />
                </label>
                <p className="text-xs mt-2">
                  La resolución de la miniatura del mod debe ser 2560 x 1440 o 1080 x 608
                </p>
                <a className="text-[#36D376] hover:underline cursor-pointer">
                  Descargar plantilla de miniatura
                </a>
                <a className="text-[rgb(250,93,255)] hover:underline cursor-pointer">
                  Descargar plantilla de miniatura HD
                </a>
              </div>
            </div>
          </div>
        )}

        <button
          className={
            'btn btn-outline btn-info rounded-full x' + (!showAccordion && ' btn-disabled')
          }
          tabIndex={-1}
          role="button"
        >
          Enviar
        </button>
      </div>
      <div className="text-text_primary flex flex-col gap-4 w-1/2   max-[900px]:w-3/4  max-[500px]:w-[90%]   max-[900px]:p-6 max-[500px]:p-4  max-[900px]:items-center ">
        <p className="text-5xl font-bold max-[500px]:text-4xl   ">{'Subir un mod'}</p>
        <p className="text-text_primary mt-1">
          Completa los campos para ver cómo se verá tu mod
        </p>
        <CardMod
          id={'-1'}
          title={inputValuesMod.title !== '' ? inputValuesMod.title : 'Mod Name'}
          type={type !== '' ? type : 'categoria'}
          img={inputValuesMod.img !== '' ? inputValuesMod.img : '/images/standarImg.png'}
          owner={inputValuesMod.owner}
          version={inputValuesMod.version}
          abstract={
            inputValuesMod.abstract !== ''
              ? inputValuesMod.abstract
              : 'Esta es una descripción del mod.'
          }
          downloadNumbers={inputValuesMod.downloadNumbers}
          timeAgo={inputValuesMod.timeAgo}
          nsfw={nsfw}
        />

        <label className="form-control w-full max-w-[370px] ">
          <div className="label">
            <span className="label-text">Vista previa de la descripción del mod</span>
          </div>
          <input
            type="text"
            placeholder=""
            className={
              'input input-bordered w-full max-w-[370px] ' +
              (!showAccordion && 'input-disabled')
            }
            value={description}
          />
        </label>
      </div>
    </div>
  );
};

export const FormRecoverPassword: React.FC<{}> = () => {
  return (
    <form className="bg-secundary  w-full flex flex-col gap-8 p-8 items-center max-[900px]:p-6 max-[500px]:p-4  ">
      <label className="form-control w-full m">
        <div className="label">
          <span className="label-text">Correo electrónico</span>
        </div>
        <input
          type="text"
          placeholder="Ingresa tu correo electrónico"
          className="input input-bordered w-full bg-transparent rounded-full"
        />
      </label>
      <button className="btn btn-success bg-text_green hover:bg-[#18A048] w-[300px] rounded-full  max-[500px]:w-full  ">
        Recuperar Cuenta
      </button>
    </form>
  );
};
