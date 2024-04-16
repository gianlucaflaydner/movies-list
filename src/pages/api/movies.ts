import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  movies: string;
};

const API_URL = process.env.NEXT_PUBLIC_MOVIE_LIST_API;
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_LIST_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);

  res.status(200).json(response.data.results);
}
