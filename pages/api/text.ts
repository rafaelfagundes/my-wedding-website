import Airtable, { FieldSet, Records } from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";

const base = new Airtable({ apiKey: process.env.airtableAPIkey }).base(
  String(process.env.airtableId)
);

function getObject(result: Records<FieldSet>) {
  const obj = Object.create(null);

  result.forEach((t) => {
    obj[String(t.fields.Name)] = t.fields.Text;
  });

  return obj;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await base("Text").select({}).all();

  const response = getObject(result);

  res.json(response);
}
