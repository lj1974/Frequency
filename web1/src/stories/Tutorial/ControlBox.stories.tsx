import { Provider } from "react-redux";
import { store } from "../../store/store";

import ControlBox from "../../pages/Tutorial/components/controlBox";

export default {
  title: "Tutorial Page/ControlBox",
  component: ControlBox,
};

export const _ControlBox = () => <Show />;

const Show = () => {
  return (
    <Provider store={store}>
      <ControlBox />
    </Provider>
  );
};
