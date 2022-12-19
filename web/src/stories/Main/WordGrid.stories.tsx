import { Provider } from "react-redux";
import { store } from "../../store/store";

import WordGrid from "../../pages/Main/Grid";

export default {
  title: "Main/WordGrid",
  component: WordGrid,
};

export const _WordGrid = () => <Show />;

const Show = () => {
  return (
    <Provider store={store}>
      <WordGrid column={1} row={1} />;
    </Provider>
  );
};
