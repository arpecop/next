import { use } from 'react';
import Image from 'next/image';
async function delay(ms: number): Promise<string> {
  const title = 'Next.js Quarter Zip';
  await new Promise((res) =>
    setTimeout(() => {
      res(title);
    }, ms),
  );
  return title;
}

export default function ProductHeader() {
  const title = use(delay(800));
  return (
    <section>
      <div className="mb-2 text-xl font-bold">{title}</div>
      <Image
        src="/q-zip.png"
        unoptimized
        alt="Next.js Hoodie"
        width={500}
        height={90}
      />
    </section>
  );
}
