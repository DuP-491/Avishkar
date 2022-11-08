import React, { useEffect } from 'react';
import ViewSDKClient from './AdobePdfSdkClient';

const Schedule = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      // not my id , found it on documentation
      viewSDKClient.previewFile('pdf-div', {}, '8c0cd670273d451cbc9b351b11d22318');
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen text-center text-white uppercase bg-gray-900 ">
      {/* <iframe
        // src="https://docs.google.com/spreadsheets/d/1YHbhIHTUSo2c0l6M-nOqT4lEtRGGeWIqyywoExSSXmQ/edit?embedded=true"
        src="https://docs.google.com/spreadsheets/d/1zFNlU-2xKXr6jNe50GZsqBfkwKW4XA8Y70DTArAwDzc/edit?embedded=true"
        className="w-full m-4"
        width="640"
        height="718"></iframe> */}

      <div id="pdf-div" className="full-window-div"></div>
    </div>
  );
};

export default Schedule;
