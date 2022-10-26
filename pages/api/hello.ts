// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// Add 1000ms delay to make api calls noticeable
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(() => {
    res.status(200).json({ name: "Hello from API" });
  }, 1000);
}
