import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export  function ErrorFlag({ title, desc, showErrorFlag, setShowErrorFlag }) {
    if (!showErrorFlag) {
    return;
  }
  return (
    <div
      role="alert"
      className="fixed top-5 right-5 z-[999999999] rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
    >
      <div className="flex items-start gap-4">

        <RiCloseCircleLine className="text-red-400 mt-[2px]" size={22}/>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900"> {title}</strong>

          <p className="mt-1 text-sm text-gray-700">{desc}</p>
        </div>

        <button
          className="text-gray-500 transition hover:text-gray-600"
          onClick={() => {
            setShowErrorFlag(false);
          }}
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}