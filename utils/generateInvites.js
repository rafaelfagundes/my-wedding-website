const puppeteer = require("puppeteer-core");
const axios = require("axios");

const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: [
      "--window-size=1080,1530",
      "--no-sandbox",
      "--headless",
      "--disable-gpu",
    ],
    defaultViewport: {
      width: 1080,
      height: 1530,
    },
  });
  const result = await axios.get(
    "https://elisarafael.com/api/confirmation?option=guestids&pwd=conestoga"
  );

  const ids = result.data;
  console.log("ids", ids);

  const page = await browser.newPage();

  for (const id in ids) {
    const url = `https://www.elisarafael.com/invites/${ids[id]}`;
    await page.goto(url, {
      waitUntil: "networkidle0",
    });
    await page.screenshot({ path: `./invites/${ids[id]}.png` });
  }

  await browser.close();
})();
