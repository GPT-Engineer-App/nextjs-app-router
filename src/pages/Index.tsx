import React, { FC } from "react";

const Index: FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to Our Website</h1>
        <p className="text-center">
          This is the home page. Use the navigation bar to explore other pages.
        </p>
      </div>
    </div>
  );
};

export default Index;