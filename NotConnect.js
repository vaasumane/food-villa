import React from "react";
import NotConnection from "./assets/no-internet-connection.jpg";

const NotConnect = () => {
  return (
    <div className="flex justify-center">
      <div>
        <img src={NotConnection} alt="No Internet Connection"/>
        <h1 className="text-center">Please connect to the internet</h1>
      </div>
    </div>
  );
};

export default NotConnect;
