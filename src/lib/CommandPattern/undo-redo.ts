/**
 * supports undo and redo up to 20
 * 1) User executed commands
 * 2) History buffers
 * 3) Undo/Redo manager
 */

import { historyBuffer, HistoryBufferState } from "./store";

export function undoRedoCoordinator() {
  const historyBufferState = historyBuffer;

  return () => {
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
  };
}
