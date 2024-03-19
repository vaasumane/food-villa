import React, { useState, useEffect } from "react";

const useInternetConnection = () => {
  const [internet, setInternet] = useState(true);
  useEffect(() => {
    const IsOnline = () => {
      setInternet(true);
    };
    const IsOffline = () => {
      setInternet(false);
    };
    window.addEventListener("online", IsOnline);
    window.addEventListener("offline", IsOffline);
    return () => {
      window.removeEventListener("online", IsOnline);
      window.removeEventListener("offline", IsOffline);
    };
  }, []);
  return internet;
};
export default useInternetConnection;
