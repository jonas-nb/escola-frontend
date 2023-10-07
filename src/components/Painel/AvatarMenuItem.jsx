import { useState } from "react";
const AvatarMenuItem = (props) => {
  const active = props.active;

  return (
    <div
      className={
        active
          ? `flex items-center justify-center gap-2 flex-col drop-shadow-md w-36 h-36 rounded-md bg-gradient-to-b ${props.bg} transition-transform transform hover:scale-105 hover:bg-opacity-90`
          : "flex items-center justify-center gap-2 flex-col drop-shadow-md w-36 h-36 rounded-md border-black/5 bg-slate-400"
      }
    >
      <div className="text-5xl">{props.icon}</div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default AvatarMenuItem;

//icon = recebe um icone
//title = recebe um titulo
//bg = recebe uma cor de fundo (from - to) vindo de https://tailwindcomponents.com/gradient-generator/
