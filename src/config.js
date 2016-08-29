/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL;

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID },

};

export const mailgun = { api_key: process.env.MAILGUN_API_KEY, url: process.env.MAILGUN_API_URL };

export const auth = {

  jwt: { secret: process.env.JWT_SECRET },

};

export const cockpit = { api_key: process.env.COCKPIT_API_KEY, url: process.env.COCKPIT_API_URL, api_path: process.env.COCKPIT_API_PATH };