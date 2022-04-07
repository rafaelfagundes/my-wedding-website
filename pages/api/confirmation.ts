import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";
import { Guest } from "../../src/definitions/guest";

const base = new Airtable({ apiKey: process.env.airtableAPIkey }).base(
  String(process.env.airtableId)
);

function getNumberOfGuests(serverGuest: any): number {
  if (serverGuest["Second Companion"]) {
    return 3;
  } else if (serverGuest["Companion"]) {
    return 2;
  } else {
    return 1;
  }
}

async function search(id: string) {
  const result = await base("Guests")
    .select({ filterByFormula: `{GuestID} = '${id}'` })
    .all();
  console.log("result");
  if (result[0]) {
    const serverGuest = result[0].fields;
    const guest: Guest = {
      confirmed: serverGuest?.Confirmed ? true : false,
      firstGuest: String(serverGuest.Name),
      secondGuest: serverGuest?.Companion
        ? String(serverGuest.Companion)
        : undefined,
      thirdGuest: serverGuest["Second Companion"]
        ? String(serverGuest["Second Companion"])
        : undefined,
      id: String(serverGuest.GuestID),
      numberOfGuests: getNumberOfGuests(serverGuest),
    };

    return guest;
  }
}

async function confirmInvitation() {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    if (req.query.id) {
      const result = await search(String(req.query.id));
      res.send(result);
    } else {
      res.status(404).json({ error: `GuestID not found` });
    }
  } else if (req.method === "POST") {
    const result = await confirmInvitation();
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
}
