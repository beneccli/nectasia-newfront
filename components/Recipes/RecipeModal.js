import React, { useImperativeHandle, forwardRef, useRef } from "react";

const modal = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflowY: "auto",
  backgroundColor: "rgba(255,255,255,.7)",
  zIndex: 10000
};

const content = {
  position: "relative",
  top: 100,
  left: 0,
  right: 0,
  borderRadius: 15,
  width: 750,
  margin: "auto",
  backgroundColor: "#fff",
  zIndex: 10000000
};

const Modal = (props, ref) => {
  const _content = useRef(null);
  useImperativeHandle(ref, () => ({ _content }));

  return (
    <div style={modal} onClick={props.onClick}>
      <div ref={_content} style={content}>
        <div className="relative pb-9/16">
          <img src='/recipes/9.jpg' className="absolute w-full h-full object-cover rounded-md" />
        </div>
        
        <div className="text-lg">Burger Mel</div>
        
        <div className="w-64 h-64 bg-blue-400"></div>
        <div className="w-64 h-64 bg-green-400"></div>
        <div className="w-64 h-64 bg-red-400"></div>
        <div className="w-64 h-64 bg-indigo-400"></div>
        <div className="w-64 h-64 bg-orange-400"></div>
        <div className="w-64 h-64 bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
