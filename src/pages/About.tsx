import React, { FC } from "react";

const About: FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">About Us</h1>
        <p className="text-center">
          Learn more about our mission and values.
        </p>
      </div>
    </div>
  );
};

export default About;