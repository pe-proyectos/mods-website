import React, { useState } from "react";

export function Modal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <dialog id="modalNSFW" className={showModal ? "modal modal-open" : "modal"}>
      <div className="modal-box text-center glass">
        <div>
          <h3 className="text-3xl font-bold text-white">Sensitive Content!</h3>
          <svg
            className="w-24 h-24 mx-auto block"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="eyeCrossedIconTitle"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title id="eyeCrossedIconTitle">Hidden (crossed eye)</title>{" "}
              <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"></path>{" "}
              <circle cx="12" cy="12" r="3"></circle> <path d="M3 21L20 4"></path>
            </g>
          </svg>
        </div>
        <p className="py-4 text-white">
          Warning: These mods contain images and scenes that may be disturbing
          for some users. Recommended for people over 18 years old.
        </p>
        <div className="modal-action">
          <button
            className="btn"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
