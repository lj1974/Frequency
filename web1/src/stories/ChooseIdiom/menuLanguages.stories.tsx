import { Provider } from "react-redux";
import { store } from "../../store/store";

import Index from "../../pages/ChooseIdiom/index";

export default {
  title: "Choose Idiom/ChooseIdiom",
  component: Index,
};

export const _ChooseIdiom = () => <Show />;

const Show = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
