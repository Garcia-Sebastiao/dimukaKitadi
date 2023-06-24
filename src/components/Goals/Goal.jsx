import React from "react";

export default function Goal(props) {
  return (
    <div className={`p-[30px] py-[30px] flex flex-col items-start gap-2 h-full ${props.style}`}>
      <h2 className={`text-xl ${props.titleStyle}`}>{props.title}</h2>

      <p className={`text-sm ${props.descStyle}`}>{props.description}</p>
    </div>
  );
}
