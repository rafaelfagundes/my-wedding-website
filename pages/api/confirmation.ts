import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";
import { Guest, GuestConfirmation } from "../../src/definitions/guest";

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
    console.log(guest);
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
      console.log(response);
      return confirmation;
    }
  } else {
    return null;
  }
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
        res.status(404).json({ error: "GuestID not found" });
      }
    } else {
      res.status(404).json({ error: "GuestID not found" });
    }
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
}
