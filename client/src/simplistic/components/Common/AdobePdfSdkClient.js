class ViewSDKClient {
  constructor() {
    this.readyPromise = new Promise((resolve) => {
      if (window.AdobeDC) {
        resolve();
      } else {
        /* Wait for Adobe Document Services PDF Embed API to be ready */
        document.addEventListener('adobe_dc_view_sdk.ready', () => {
          resolve();
        });
      }
    });
    this.adobeDCView = undefined;
  }

  ready() {
    return this.readyPromise;
  }

  previewFile(divId, viewerConfig, clientId) {
    const config = {
      /* Pass your registered client id */
      // not
      clientId: clientId
    };
    if (divId) {
      /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View(config);

    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.adobeDCView.previewFile(
      {
        /* Pass information on how to access the file */
        content: {
          /* Location of file where it is hosted */
          location: {
            url: `${process.env.PUBLIC_URL}/avishkar_2k22_schedule.pdf`
          }
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName: 'Avishkar 2k22 schedule.pdf'
        }
      },
      viewerConfig
    );

    return previewFilePromise;
  }
}

export default ViewSDKClient;
