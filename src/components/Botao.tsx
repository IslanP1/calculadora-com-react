import React from "react";
import "./Botao.css";

interface BotaoProps {
  styleBotao: React.CSSProperties;
  styleTexto: React.CSSProperties;
  texto: string;
  onclick: () => void;
  value?: number;
}

function Botao({ styleBotao, styleTexto, texto, onclick, value }: BotaoProps) {
  return (
    <button
      className="botao"
      style={styleBotao}
      onClick={onclick}
      value={value}
    >
      <p className="texto" style={styleTexto}>
        {texto}
      </p>
    </button>
  );
}

export default Botao;
