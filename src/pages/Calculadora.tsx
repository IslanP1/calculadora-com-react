import { useState } from "react";
import Botao from "../components/Botao";
import "./Calculadora.css";

function Calculadora() {
  const [numero, setNumero] = useState(0);
  const [numeroAnterior, setNumeroAnterior] = useState(0);
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState(0);

  function pegarNumero(numero: number) {
    setNumero((antes) => Number(String(antes) + numero));
  }

  function pegarOperador(operador: string) {
    setOperador(operador);
    setNumeroAnterior(numero);
    setNumero(0);
  }

  function limpar() {
    setNumero(0);
    setResultado(0);
  }

  function calcularPorcentagem() {
    setResultado(numero / 100);
  }

  function trocarSinal() {
    if (numero > 0) {
      setNumero(-numero);
    } else {
      setNumero(Math.abs(numero));
    }
  }

  function calcular() {
    if (operador === "/") {
      setResultado(numeroAnterior / numero);
    } else if (operador === "*") {
      setResultado(numeroAnterior * numero);
    } else if (operador === "-") {
      setResultado(numeroAnterior - numero);
    } else {
      setResultado(numeroAnterior + numero);
    }
  }

  return (
    <div className="fundoCalculadora">
      <div className="calculadora">
        <div className="display">
          <div className="operacoes">
            <p>{numero}</p>
          </div>
          <div className="resultado">
            <div className="sinalIgual">
              <img src="/igual.svg" alt="Sinal de igual" />
            </div>
            <div className="numero">
              <p>{resultado}</p>
            </div>
          </div>
        </div>
        <div className="conteinerBotoes">
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-purple)" }}
            texto="AC"
            onclick={limpar}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="+/-"
            onclick={trocarSinal}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="%"
            onclick={calcularPorcentagem}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesOperacoes)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="÷"
            onclick={() => pegarOperador("/")}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="7"
            value={7}
            onclick={() => pegarNumero(7)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="8"
            value={8}
            onclick={() => pegarNumero(8)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="9"
            value={9}
            onclick={() => pegarNumero(9)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesOperacoes)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="×"
            onclick={() => pegarOperador("*")}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="4"
            value={4}
            onclick={() => pegarNumero(4)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="5"
            value={5}
            onclick={() => pegarNumero(5)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="6"
            value={6}
            onclick={() => pegarNumero(6)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesOperacoes)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="-"
            onclick={() => pegarOperador("-")}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="1"
            value={1}
            onclick={() => pegarNumero(1)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="2"
            value={2}
            onclick={() => pegarNumero(2)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesNumeros)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="3"
            value={3}
            onclick={() => pegarNumero(3)}
          />
          <Botao
            styleBotao={{ background: "var(--color-botoesOperacoes)" }}
            styleTexto={{ color: "var(--color-blank)" }}
            texto="+"
            onclick={() => pegarOperador("+")}
          />
          <div className="botoesFinais">
            <Botao
              styleBotao={{ background: "var(--color-botoesNumeros)" }}
              styleTexto={{ color: "var(--color-blank)" }}
              texto="0"
              value={0}
              onclick={() => pegarNumero(0)}
            />

            <Botao
              styleBotao={{ background: "var(--color-botaoIgual)" }}
              styleTexto={{ color: "var(--color-blank)" }}
              texto="="
              onclick={calcular}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
