import React from 'react';
import s from './TabButton.module.scss';

function TabButton({ text, handleActiveButton, activeSort, id }) {
  return (
    <React.Fragment>
      <button
        id={id}
        onClick={() => handleActiveButton(id)}
        className={activeSort === id ? s['button--active'] : s.button}
      >
        {text}
      </button>
    </React.Fragment>
  );
}

export default TabButton;
