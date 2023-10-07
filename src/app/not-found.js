import MyButton from "@/components/MyButton";
import React from "react";

const NotFound = () => {
  return (
    <div className="not-found-area text-center flex flex-col justify-center items-center">
      <h2 className="text-9xl font-semibold	text-[#ff0100]">404</h2>
      <h3 className="text-5xl mb-7">Oops! That page can not be found</h3>
      <MyButton href="/">Back To Home</MyButton>
    </div>
  );
};

export default NotFound;
