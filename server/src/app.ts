import cors from "cors";
import express, { Request, Response } from "express";
import { getCards, searchCards } from "./service/cards";
// import * as path from "path";

// dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

// Serve the react app
// app.use(express.static(path.resolve("./") + "/build/app"));

app.get("/everything", async (req: Request, res: Response): Promise<void> => {
  const pageNumber = req.query.page as string;
  const page = pageNumber ? parseInt(pageNumber, 10) : 0;
  const cards = await getCards(page);
  res.send(cards);
});

app.get("/search", async (req: Request, res: Response): Promise<void> => {
  const pageNumber = req.query.page as string;
  const query = req.query.query as string;
  const page = pageNumber ? parseInt(pageNumber, 10) : 0;
  const cards = await searchCards(page, query);
  res.send(cards);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
