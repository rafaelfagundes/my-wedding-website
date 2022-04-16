const puppeteer = require("puppeteer-core");
// const axios = require("axios");
const cookies = require("./mercadoPagoCookies");
const gifts = require("./giftsList");

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

  const gift = gifts[0];
  console.log("gift", gift);

  const page = await browser.newPage();
  await page.setCookie(...cookies);

  const url = `https://www.mercadopago.com.br/tools/create`;
  console.log("loading page");
  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  console.log("clicking to show more options");
  await page.click(".full-form__secondary");

  console.log("typing price");
  await insertPrice(page, gift);

  console.log("typing title");
  await insertTitle(page, gift);

  console.log("typing refCode");
  await insertRefCode(page, gift);

  console.log("typing success");
  await insertPaymentSuccess(page, gift);

  console.log("typing processing");
  await insertPaymentProcessing(page, gift);

  console.log("clicking to show more options");
  await page.click(".full-form__secondary");

  // await browser.close();
})();

async function insertPrice(page, gift) {
  const priceInput = await page.$x(
    "/html/body/div[1]/main/section/div/div/div[1]/div/div[1]/div[1]/div/label/div/input"
  );
  await priceInput[0].click();
  await priceInput[0].type(String(gift.value).replace(".", ","));
}

async function insertTitle(page, gift) {
  const priceInput = await page.$x(
    "/html/body/div[1]/main/section/div/div/div[1]/div/div[2]/div/label/div/input"
  );
  await priceInput[0].click();
  await priceInput[0].type(String(gift.name));
}

async function insertRefCode(page, gift) {
  const priceInput = await page.$x(
    "/html/body/div[1]/main/section/div/div/div[2]/div[2]/section[2]/div[2]/div/label/div/input"
  );
  await priceInput[0].click();
  await priceInput[0].type(String(gift.refCode));
}

async function insertPaymentSuccess(page, gift) {
  const priceInput = await page.$x(
    "/html/body/div[1]/main/section/div/div/div[2]/div[2]/section[4]/div[2]/label/div/input"
  );
  await priceInput[0].click();
  await priceInput[0].type("https://elisarafael.com/thank-you");
}

async function insertPaymentProcessing(page, gift) {
  const priceInput = await page.$x(
    "/html/body/div[1]/main/section/div/div/div[2]/div[2]/section[4]/div[3]/label/div/input"
  );
  await priceInput[0].click();
  await priceInput[0].type("https://elisarafael.com/processing");
}
