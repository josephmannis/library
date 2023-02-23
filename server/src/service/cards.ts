import { Card } from "../../../shared/types";
import { DBCard } from "../data/types";
import { db } from "../persistence/db";

export async function searchCards(
  page: number,
  cardName: string
): Promise<Card[]> {
  return new Promise(async (res, rej) => {
    db.all(
      `SELECT * FROM ZPERSISTEDMTGCARD WHERE ZFACENAME LIKE '%${cardName}%' ORDER BY ZFACENAME LIMIT 50 OFFSET ${page}`,
      function (this, err, rows) {
        res(mapResponse(rows));
      }
    );
  });
}

export async function getCards(page: number): Promise<Card[]> {
  return new Promise(async (res, rej) => {
    db.all(
      `SELECT * FROM ZPERSISTEDMTGCARD LIMIT 50 OFFSET ${page}`,
      function (this, err, rows) {
        res(mapResponse(rows));
      }
    );
  });
}

function mapResponse(results: DBCard[]): Card[] {
  return results.map((r: DBCard) => {
    return {
      id: r.ZORACLEID,
      price: r.ZPRICE,
      cmc: r.ZCONVERTEDMANACOST,
      manaCost: r.ZFACEMANACOST,
      name: r.ZFACENAME,
      rarity: r.ZPARSEDRARITY,
      scryfallId: r.ZSCRYFALLID,
      set: r.ZPARSEDSETNAME,
      setCode: r.ZPARSEDSETCODE,
      scryfallLink: `https://scryfall.com/card/${r.ZPARSEDSETCODE}/${
        r.ZCOLLECTORNUMBER
      }/${r.ZFACEARTIST.replace(" ", "-")}`,
    };
  });
}
