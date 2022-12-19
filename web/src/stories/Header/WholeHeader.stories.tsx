import { Provider } from "react-redux";
import { store } from "../../store/store";

import WholeHeader from "../../components/header/wholeHeader";

export default {
  title: "Header/WholeHeader",
  component: WholeHeader,
};

export const _WholeHeader = () => <Show />;

const Show = () => {
  return (
    <Provider store={store}>
      <WholeHeader />
    </Provider>
  );
};
