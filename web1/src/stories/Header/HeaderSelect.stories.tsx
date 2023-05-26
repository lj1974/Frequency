import { Provider } from "react-redux";
import { store } from "../../store/store";

import SelectLanguage from "../../components/header/headerSelect";

export default {
  title: "Header/Component/SelectLanguage",
  component: SelectLanguage,
};

export const _SelectLanguage = () => <Show />;

const Show = () => {
  return (
    <Provider store={store}>
      <SelectLanguage />
    </Provider>
  );
};
