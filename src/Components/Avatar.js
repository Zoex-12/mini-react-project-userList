import React from "react";
import man from "../assets/Male.png";
import women from "../assets/Female.png";

export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width="50px" />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={women} alt="" width="50px" />
    </div>
  );
};
