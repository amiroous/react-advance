import React from "react";

// import getConfig from 'next/config';
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

/**
 * Define global logic to be loaded on every page here
 */
import 'pages/layout/Base.scss';


export default ({ Component, pageProps }) => {

    // console.log(serverRuntimeConfig); // Hidden to Client
    // console.log(publicRuntimeConfig); // Visible to Client
    // console.log(process.env.APP_NAME);

    return <Component {...pageProps} />
};
