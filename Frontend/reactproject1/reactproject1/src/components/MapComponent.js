
/* global kakao */

import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    // script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=82056d961903104fa54415601f3601c3&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);


        function updateLocation() {
          
          navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude; 
            const longitude = position.coords.longitude; // 현재 경도

           
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(latitude, longitude),
              map: map,
            });


            map.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
          });
        }


        updateLocation();


        setInterval(updateLocation, 60000); // 60초(1분)마다 updateLocation 함수 호출
      });
    };
  }, []);

  return <div id="map" style={{ width: '100vw', height: '400px' }} />;
};

export default MapComponent;