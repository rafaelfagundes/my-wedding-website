import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";
import { Guest, GuestConfirmation } from "../../src/definitions/guest";

const base = new Airtable({ apiKey: process.env.airtableAPIkey }).base(
  String(process.env.airtableId)
);

function getNumberOfGuests(serverGuest: any): number {
  // console.log("serverGuest", serverGuest);
  if (serverGuest["Second Companion"]) {
    return 3;
  } else if (serverGuest["Companion"]) {
    return 2;
  } else {
    return 1;
  }
}

async function countGuests() {
  const result = await base("Guests").select({}).all();

  let numberOfGuests: number = 0;
  let numberOfConfirmedGuests: number = 0;
  result.forEach((line) => {
    const guestCount = getNumberOfGuests(line.fields);
    numberOfGuests = numberOfGuests + guestCount;
    if (line.fields.Confirmed) {
      numberOfConfirmedGuests = numberOfConfirmedGuests + guestCount;
    }
  });

  return { guests: numberOfGuests, confirmedGuests: numberOfConfirmedGuests };
}

async function search(id: string, showInternalId: boolean) {
  const result = await base("Guests")
    .select({ filterByFormula: `{GuestID} = '${id}'` })
    .all();

  if (result[0]) {
    const serverGuest = result[0].fields;
    const guest: Guest = {
      internalId: showInternalId ? result[0].id : undefined,
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
  } else {
    return null;
  }
}

async function confirmInvitation(id: string) {
  const guest = await search(id, true);
  if (guest) {
    const confirmation: GuestConfirmation = {
      numberOfGuests: guest.numberOfGuests,
      alreadyConfirmed: false,
      confirmed: true,
    };
    if (guest.confirmed) {
      confirmation.alreadyConfirmed = true;
      return confirmation;
    } else {
      const response = await base("Guests").update([
        {
          id: String(guest.internalId),
          fields: {
            Confirmed: true,
          },
        },
      ]);
      if (response) {
        return confirmation;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
}

async function getIds() {
  const result = await base("Guests").select({}).all();
  const ids = result.map((i) => i.fields.GuestID);
  return ids;
}

async function getGuests() {
  const result = await base("Guests").select({}).all();
  const guests = result.map((i) => i.fields);
  return guests;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Guest Search
  if (req.method === "GET") {
    if (req.query.id) {
      const result = await search(String(req.query.id), false);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "GuestID not found" });
      }
    } else if (req.query.option && req.query.option === "count") {
      const result = await countGuests();
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Server error" });
      }
    } else if (
      req.query.option &&
      req.query.pwd &&
      req.query.option === "guestids" &&
      req.query.pwd === "conestoga"
    ) {
      const result = await getIds();
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Guests not found" });
      }
    } else if (
      req.query.option &&
      req.query.pwd &&
      req.query.option === "guests" &&
      req.query.pwd === "conestoga"
    ) {
      const result = await getGuests();
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Guests not found" });
      }
    } else {
      res.status(404).json({ error: "GuestID not found" });
    }
  }

  // Guest Confirmation
  else if (req.method === "POST") {
    if (req.body.id) {
      const result = await confirmInvitation(String(req.body.id));
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Confirmation can't done." });
      }
    } else {
      res.status(404).json({ error: "Guest ID was not sent." });
    }
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
}
