import infoButton from "../../assets/info.svg";

import { BtnPrimary } from "../../styles/buttons";

export const Info = () => {
  return (
    <BtnPrimary>
      <img src={infoButton} alt="information button" />
    </BtnPrimary>
  );
};
