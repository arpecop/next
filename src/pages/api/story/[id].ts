
import { gql } from '@apollo/client';
import Jimp from 'jimp/es';
import type { NextApiRequest, NextApiResponse } from 'next';


import { doQuery } from '@/data/client';
import { formattedjoke } from '@/utils/formatter';

const DATA_QUERY = gql`
  query MyQuery($id: String!) {
    jokes_by_pk(_id: $id) {
      _id
      cat
      joke
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string

  const data = await doQuery(
    DATA_QUERY,
    { id },
  );

  if (data.joke) {
    const image = new Jimp(200, 200, '#232427');

    // client.photos.curated({ per_page: 1 }).then((photos) => {
    Jimp.read('https://kloun.lol/logobottomsmall.png').then((background) => {
      // return background
      Jimp.loadFont('https://kloun.lol/font.fnt')
        .then((font) => {
          const splitted = formattedjoke(data.joke || 'EMPTY').split('\n');
          let h = 50;
          splitted.forEach((line: string) => {
            image.print(font, 10, h, line, 180);
            h += Jimp.measureTextHeight(font, line, 180);
          });

          return image.resize(458, 458).blit(background, 190, 12);
        })
        .then((image1) => {
          image1.getBuffer(Jimp.MIME_PNG, (_, buffer) => {
            res.setHeader('Content-Type', 'image/png');
            res.end(buffer);
          });
        });
    });
    // })
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
