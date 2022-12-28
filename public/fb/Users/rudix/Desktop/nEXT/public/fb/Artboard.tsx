import React from "react";

const SvgArtboard = props => (
  <svg width={778} height={345} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#222" d="M0 0h778v345H0z" />
      <path fill="#2C2828" d="M264 53h250v174H264z" />
      <rect fill="#780505" x={250} y={40} width={278} height={209} rx={12} />
      <path stroke="#979797" fill="#FFF" d="M.5 260.5h249v31H.5z" />
      <path stroke="#915858" fill="#522B70" d="M528.5 157.5h249v31h-249z" />
      <text
        fontFamily="Nunito-Regular, Nunito"
        fontSize={28}
        letterSpacing={0.018}
        fill="#FFF"
      >
        <tspan x={605.774} y={180.908}>
          {`text 3`}
        </tspan>
      </text>
      <text
        fontFamily="Nunito-Regular, Nunito"
        fontSize={28}
        letterSpacing={0.018}
        fill="#4B4F60"
      >
        <tspan x={77.774} y={285.908}>
          {`text 1`}
        </tspan>
      </text>
      <text
        fontFamily="Nunito-Regular, Nunito"
        fontSize={12}
        letterSpacing={0.008}
        fill="#FFF"
      >
        <tspan x={264} y={65}>
          {`Lorem vitae quasi quaerat et consecteturquis`}
        </tspan>
        <tspan x={264} y={77}>
          {`ea! Eos unde repellendus soluta`}
        </tspan>
        <tspan x={264} y={89}>
          {`eaqueaccusamus deserunt maiores? Facere`}
        </tspan>
        <tspan x={264} y={101}>
          {`nihilarchitecto facilis fuga quidem?`}
        </tspan>
        <tspan x={264} y={113}>
          {`Nostrumanimi consectetur quis atque`}
        </tspan>
        <tspan x={264} y={125}>
          {`architectototam molestias.`}
        </tspan>
      </text>
    </g>
  </svg>
);

export default SvgArtboard;
