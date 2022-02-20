/**
 * supports undo and redo up to 20
 * 1) User executed commands
 * 2) History buffers
 * 3) Undo/Redo manager
 */

import { past, present, future } from "./store.ts";

export function undoRedoCoordinator() {
  return () => {
    return {
      onInput: (input: string) => {
        past.update((p: string[]) => [...p, input]);
        present.set(input);
        return present;
      },
      undo: () => {
        // push present item to start of future
        const unsubscripePresent = present.subscribe((p: string) => {
          future.update((f: string[]) => [p, ...f]);
        });
        // pop last item from past and set to present
        const unsubscriptPast = past.subscribe((p: string[]) => {
          present.set(p.pop()); // TODO: immutable fix
        });
        unsubscripePresent();
        unsubscriptPast();
        return past;
      },
      redo: () => {
        // remove item from beginning of future and set as present
        const unsubscribeFuture = future.subscribe((f: string[]) => {
          present.set(f.shift()); // TODO: immutable fix
        });
        // push present item to end of past
        const unsubscripePresent = present.subscribe((p: string) => {
          past.update((past: string[]) => [...past, p]);
        });
        unsubscribeFuture();
        unsubscripePresent();
        return present;
      },
    };
  };
}
