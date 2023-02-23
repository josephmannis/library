import axios from "axios";
import { Card } from "../../../shared/types";

const BASE_URL = "http://localhost:8000";

export function useCollectionApi() {
  // FIXME use react query later
  async function getCards(page: number): Promise<Card[]> {
    return (await axios.get<Card[]>(`${BASE_URL}/everything?page=${0}`)).data;
  }

  async function searchCards(page: number, cardName: string): Promise<Card[]> {
    return (
      await axios.get<Card[]>(`${BASE_URL}/search?page=${0}&query=${cardName}`)
    ).data;
  }

  return { getCards, searchCards };
}
