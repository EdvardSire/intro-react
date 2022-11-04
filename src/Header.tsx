import React from "react";

type HeaderType = {
  name?: string;
};

const Header = ({ name }: HeaderType) => {
  return (
    <>
      <div>
        <h1 className="text-3xl">{name ? name : "undefined!!"}</h1>
      </div>
    </>
  );
};

export default Header;
