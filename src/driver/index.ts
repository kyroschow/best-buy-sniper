// import { firefox, Browser } from 'playwright';
import { chromium, Browser } from 'playwright';

let browser: Browser;

export const createBrowser = async (): Promise<Browser> => {
  const options = {
    headless: false, // false to see the browser UI.
    ignoreHTTPSErrors: true,
    defaultViewport: { width: 1920, height: 1080 }
  };

  // browser = await firefox.launch(options);
  browser = await chromium.launch(options);

  return browser;
};

export const getBrowser = (): Browser => {
  return browser;
};
