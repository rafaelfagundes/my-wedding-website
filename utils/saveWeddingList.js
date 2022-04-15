const puppeteer = require("puppeteer-core");
// const axios = require("axios");
const cookies = require("./mercadoPagoCookies");

const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath,
    args: [
      "--window-size=1080,1080",
      "--no-sandbox",
      // "--headless",
      // "--disable-gpu",
    ],
    defaultViewport: {
      width: 1080,
      height: 1080,
    },
  });

  const page = await browser.newPage();
  await page.setCookie(...cookies);

  const url = `https://www.mercadopago.com.br/tools/create`;
  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  await browser.close();
})();
