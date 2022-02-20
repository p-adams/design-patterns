import { past, present, future } from "./store";

export const historyBuffers = {
  past,
  present,
  future,
};

export function logger() {
  past.subscribe((past: string[]) => {
    console.log("past: ", past);
  });
  present.subscribe((present: string) => {
    console.log("present: ", present);
  });
  future.subscribe((future: string[]) => {
    console.log("future: ", future);
  });
}

export function undoRedoCoordinator() {
  return () => {
    return {
      onInput: (input: string) => {
        past.update((p: string[]) => [...p, input]);
        present.set(input);
      },
      undo: () => {
        // pop last item from past and set to present
        const unsubscriptPast = past.subscribe((p: string[]) => {
          if (p.length) present.set(p.pop());
        });

        // push present item to start of future
        const unsubscripePresent = present.subscribe((p: string) => {
          future.update((f: string[]) => [p, ...f]);
        });
        unsubscriptPast();
        unsubscripePresent();
      },
      redo: () => {
        // remove item from beginning of future and set as present
        const unsubscribeFuture = future.subscribe((f: string[]) => {
          if (f.length) present.set(f.shift());
        });
        // push present item to end of past
        const unsubscripePresent = present.subscribe((p: string) => {
          past.update((past: string[]) => [...past, p]);
        });
        unsubscribeFuture();
        unsubscripePresent();
      },
    };
  };
}
