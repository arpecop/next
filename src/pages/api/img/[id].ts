import Jimp from 'jimp/es';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const remImg = await Jimp.read(`http://cdn.kloun.lol/out/${id}.png`);
  const resized = await remImg.resize(2136, 1097);
  resized.getBuffer(Jimp.MIME_PNG, (_, buffer) => {
    res.setHeader('Content-Type', 'image/png');
    res.end(buffer);
  });
}
