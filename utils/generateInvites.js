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
    "http://localhost:3000/api/confirmation?option=guests&pwd=conestoga"
  );

  const guests = result.data;
  console.log("guests", guests);

  const page = await browser.newPage();

  for (const i in guests) {
    const url = `http://localhost:3000/invites/${guests[i].GuestID}`;
    await page.goto(url, {
      waitUntil: "networkidle0",
    });
    await page.screenshot({ path: `./invites/${guests[i].Slug}.png` });
  }

  await browser.close();
})();
