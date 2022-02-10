// 1 - Criando um elemento no Button pra ter a tipagem do HTMl no botao no React
// 2 - importando a tipagem dos button no html 
// 2 - Define a tipagem dos atributos importados
// 3 - ditribuir as propriedades do props no button

import { ButtonHTMLAttributes } from "react" //Importa a tipagem do HTMl

import "../styles/Button.scss" // importando a estilização do Button.scss

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //define a tipagem dos abributos atributos importados (HTMLButtonElement - add o lemento do button que é global)


export function Button(props: ButtonProps) { // (props- elemento definidor para iniciar a tipagem do elemento) (ButtonProps - variavel da tipagem ja importando os atributos )
  return (
    <button className="button" {...props} /> // (...props - tecnica do JS para distribuir todas as propriedades do parametro )
  )
}
