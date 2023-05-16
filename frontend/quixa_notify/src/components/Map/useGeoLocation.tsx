import React, { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
      cordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location: {
    coords: { latitude: any; longitude: any };
  }) => {
    setLocation({
      loaded: true,
      cordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  //   const onError = (error: { code: number; massage: string }) => {
  //     setLocation({
  //       loaded: true,
  //       error,

  //       ,
  //     });
  //   };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      //   onError({
      //     code: 0,
      //     massage: "Geolocation not supported",
      //   });
    }
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return location;
};

export default useGeoLocation;
