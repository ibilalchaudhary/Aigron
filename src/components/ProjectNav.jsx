import React from "react";

export default function ProjectNav({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "projects__container__content__btn projects__container__content__btn__selected"
          : "projects__container__content__btn"
      }
    >
      {title}
    </button>
  );
}
