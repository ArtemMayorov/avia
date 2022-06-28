import React from "react";
import s from "./FilterGroupCheckbox.module.scss";
function FilterGroupCheckbox({ text, id }) {
  return (
    <li className={s.item}>
      <input className={s.item__checkbox} type="checkbox" id={id} />
      <label htmlFor={id} className="__item__text">
        {text}
      </label>
    </li>
  );
}

export default FilterGroupCheckbox;
// import React from "react";

// function FilterGroupCheckbox({ text, id }) {
//   return (
//     <li className="filterGroup__item">
//       <input className="filterGroup__item__checkbox" type="checkbox" id={id} />
//       <label htmlFor={id} className="filterGroup__item__text">
//         {text}
//       </label>
//     </li>
//   );
// }

// export default FilterGroupCheckbox;
