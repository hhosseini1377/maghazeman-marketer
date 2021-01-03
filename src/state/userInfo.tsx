import React from "react";

function createCtxUseState<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = React.createContext({
    side: defaultValue,
    setSide: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [side, setSide] = React.useState(defaultValue);

    return <ctx.Provider value={{ side, setSide }} {...props} />;
  }
  return [ctx, Provider] as const;
}

const State = true;
export const [SideInfo, SideProvider] = createCtxUseState(State);
