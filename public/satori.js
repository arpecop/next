const ff = path.resolve(
  __dirname,
  `../../../../../../../public/images/font/Nunito-Medium.ttf`
);
const fff = fs.readFileSync(ff);
const svgx = await satori(
  <h1 style={{fontSize: 32, color: "red"}}>dasdsad1</h1>,
  {
    width: 120,
    height: 120,
    fonts: [
      {
        name: "Nunito Medium",
        data: fff,
        weight: 400,
        style: "normal",
      },
    ],
  }
);
console.log(svgx);
