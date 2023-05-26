import styled from "styled-components";

import GoBack from "../../components/button/goBack";
import { BtnGlass } from "../../styles/buttons";
import { dark } from "../../styles/dark";
import { fonts_size } from "../../styles/fontSizes";
import { screen_sizes } from "../../styles/screen";

export default function Information() {
  return (
    <Container>
      <GoBack label="Click anywhere to hide it" />
      <Texts>
        <h3>Atualization</h3>
        <p>A ultíma atualização das palavras foi em 26/11/2022. </p>
        <p>The last atualization of the words was in 11/26/2022.</p>
      </Texts>
      <Texts>
        <h3>Contact</h3>
        <p>
          Me contate através do e-mail: lijarjales@gmail.com. Dicas,
          contribuições e parcerias são bem-vindas!
        </p>
        <p>
          Please contact me via email: lijarjales@gmail.com. Tips, contributions
          and partnerships are welcome!
        </p>
      </Texts>
    </Container>
  );
}

const Container = styled(BtnGlass)`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: ${dark.darkhue};

  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
  gap: 40px;

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    width: 25rem;
    height: 36rem;

    right: ${screen_sizes.margin_pc};

    align-items: flex-start;
    padding-left: 3rem;
    border-radius: 20px;
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 75%;
  gap: 20px;

  h3 {
    color: ${dark.buttons};
    font-size: ${fonts_size.bg};
    font-weight: 400;
  }

  p {
    color: ${dark.texts};
    font-size: ${fonts_size.sm};
    font-weight: 300;
  }

  @media screen and (min-width: ${screen_sizes.tab_pc}) {
    width: 79%;

    h3 {
      font-size: calc(${fonts_size.bg} - 8px);
    }
  }
`;
