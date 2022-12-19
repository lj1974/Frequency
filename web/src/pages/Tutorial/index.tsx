import tutorialButton from "../../assets/tutorial.svg";
import { BtnPrimary } from "../../styles/buttons";

export default function StartTutorial() {
  const handleClick = () => {
    return 1;
  };

  return (
    <BtnPrimary onClick={() => handleClick()}>
      <img src={tutorialButton} alt="press here to see the tutorial" />
    </BtnPrimary>
  );
}

/* 
    state = props que seta o componente da vez com highlight
    id = localizacao do state para mudar o texto e poder avancar e sair
    active = pra saber se o tutorial foi chamado ou nao.

    < funcao highlight />

*/
