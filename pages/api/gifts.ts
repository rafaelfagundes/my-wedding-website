import Airtable from "airtable";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../src/definitions/product";

const base = new Airtable({ apiKey: process.env.airtableAPIkey }).base(
  String(process.env.airtableId)
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const result = await base("Gifts")
        .select({ filterByFormula: `{Enabled} = '1'` })
        .all();

      const products: Product[] = [];

      result.forEach((p) => {
        const product: Product = {
          id: p.id,
          name: String(p.fields.Name),
          desc: String(p.fields.Description),
          image: String(p.fields.Image),
          value: Number(p.fields.Value),
          linkMercadoPago: String(p.fields.LinkMercadoPago),
          refCode: String(p.fields.RefCode),
          type: String(p.fields.Type),
        };
        products.push(product);
      });

      res.json(_.orderBy(products, ["value"]));
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
