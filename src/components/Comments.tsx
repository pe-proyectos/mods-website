import React from "react";

const Comments = () => {
  return (
    <div className="text-justify text-neutral-content">
      <div className="card bg-[#000000bc]">
        <div className="card-body">
          <div className="flex">
            <div className="">
              <div className="size-14 mr-2 rounded bg-neutral">
                <span className="text-xl">TÚ</span>
              </div>
            </div>
            <div>
              <p className="text-lg">Usuario loggeado</p>
              <p className="text-sm">Hace 5 días</p>
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Escribe un comentario..."
          ></textarea>
          <div className="card-actions justify-end">
            <button className="btn btn-sm">Comentar</button>
          </div>
        </div>
      </div>
      <div className="card bg-[#000000bc]">
        <div className="card-body">
          <div className="flex">
            <div className="">
              <img
                className="w-14 mr-2 rounded"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
            <div>
              <p className="text-lg">Elsa Capuntas</p>
              <p className="text-sm">Hace 5 días</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur quos nisi
            incidunt beatae sint commodi iusto illo enim, recusandae hic possimus vel autem impedit
            architecto deleniti expedita non quo.
          </p>
          <div className="card-actions">
            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title text-sm p-1">
                <button className="btn btn-sm">Responder</button>
              </div>
              <div className="collapse-content p-0">
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Escribe un comentario..."
                ></textarea>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm">Responder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
