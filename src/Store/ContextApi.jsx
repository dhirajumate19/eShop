import { createContext } from "react";

const basketContext = createContext({
  basket: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default basketContext;
