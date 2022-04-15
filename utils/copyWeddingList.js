//https://sites.icasei.com.br/jorgeehebe/pages/27028120
const fs = require("fs");
const cheerio = require("cheerio");
const html = fs.readFileSync("./input.html");
const $ = cheerio.load(html.toString());
const download = require("image-downloader");
const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({
  length: 6,
  dictionary: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ],
});

/*
img
title
price
*/

async function getProducts() {
  const productList = $(".mdl-list__item-primary-content");
  // console.log("Products count:", productList.length);

  const products = [];
  productList.each(function () {
    const product = {};

    product.img = $(this).find("img").attr("src");
    product.name = $(this)
      .find(".store-products-list__product-name")
      .text()
      .trim()
      .replaceAll("\n", "")
      .replaceAll("   ", "")
      .replaceAll("  ", " ")
      .trim();

    product.price =
      Number(
        $(this)
          .find(".store-products-list__product-price")
          .text()
          .replace(".", "")
          .replace(",", ".")
          .replace("R$", "")
          .trim()
      ) - 0.01;
    product.id = product.name.toLowerCase().replaceAll(" ", "_");

    products.push(product);
  });

  return products;
}

function createCSV(list) {
  let csv = "";

  list.forEach((i) => {
    csv += `${i.Name},${i.Value},${i.Description},${i.Image},${i.Enabled},${i.LinkMercadoPago},${i.Type},${i.RefCode}\n`;
  });

  console.log(csv);
}

async function main() {
  const products = await getProducts();
  // console.log("products", products);

  const finalList = [];

  for (const i in products) {
    const item = {
      Name: "",
      Value: 0,
      Description: "",
      Image: "",
      Enabled: "true",
      LinkMercadoPago: "example.com",
      Type: "Experience",
      RefCode: uid(),
    };

    fs.mkdirSync(`./products/${products[i].id}`);

    const options = {
      url: products[i].img,
      dest: `/Users/rafael/Projects/MyWedding/utils/products/${products[i].id}/${products[i].id}.jpg`,
    };

    item.Name = products[i].name;
    item.Value = products[i].price;
    item.Description = `${products[i].id}`;
    item.Image = `${products[i].id}/${products[i].id}.jpg`;

    // console.log(item);

    finalList.push(item);

    try {
      const downloadResult = await download.image(options);
      // console.log("downloadResult", downloadResult);
    } catch (error) {
      console.log("error", error);
    }
  }

  createCSV(finalList);
}

main();

/**
 * Name
 * Value
 * Description
 * Image
 * Enabled
 * LinkMercadoPago
 * Type
 * RefCode
 */
