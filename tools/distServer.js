// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';
import proxy from 'http-proxy-middleware';
import https from 'https';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [
    historyApiFallback(),
    proxy(['/api', '/wp-content'], {
      target: 'https://www.credera.com',
      agent: https.globalAgent,//new HttpsAgent('https://www.credera.com'),
      logLevel: 'debug',
      headers: {
        host: 'credera.com'
      }
    })
  ]
});
