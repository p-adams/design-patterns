export function UndoRedo() {
  const state = {
    past: [],
    present: null,
    future: [],
  };
  return {
    execUndo: () => {
      // push present item to start of future
      // pop last item from past and set to present
    },
    execRedo: () => {
      // remove item from beginning of future and set as present
      // push present item to end of past
    },
  };
}
