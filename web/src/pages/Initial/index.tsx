import styled from "styled-components";

import { Provider } from "react-redux";
import { store } from "../../store/store";

import { Info } from "../../components/button/info";
import Tittle from "../../components/header/tittle";
import Footer from "../../components/footer/footer";
import Img from "./components/welcomeMan";
import SelectLanguage from "../../components/header/headerSelect";
import { BodyContainer } from "../../styles/background";

export default function Initial() {
  return (
    <BodyContainer>
      <Provider store={store}>
        <Header_wrapper>
          <Tittle />
          <Info />
        </Header_wrapper>

        <Content>
          <Left_side>
            <SelectLanguage />
            <>
              <h1>What is frequency?</h1>
              <p>
                frequency is a free simplified languague tool that you can use
                to search for the most common words in your target languague and
                use it on your learning journey.
              </p>
            </>
          </Left_side>

          <Img />
        </Content>

        <Footer />
      </Provider>
    </BodyContainer>
  );
}

const Header_wrapper = styled.header`
  display: flex;
  max-width: 541px;
  justify-content: space-between;
`;

const Left_side = styled.div``;

const Content = styled.div`
  display: flex;
`;
