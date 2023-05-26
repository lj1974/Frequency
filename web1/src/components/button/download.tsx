import downloadButton from "../../assets/download.svg";
import { BtnPrimary } from "../../styles/buttons";

export const Download = () => {
  return (
    <BtnPrimary>
      <img src={downloadButton} alt="information button" />
    </BtnPrimary>
  );
};
