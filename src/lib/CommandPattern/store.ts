import { writable } from "svelte/store";

export interface HistoryBufferState {
  past: Array<string>;
  present: string;
  future: Array<string>;
}
export const historyBuffer = writable<HistoryBufferState>({
  past: [],
  present: "",
  future: [],
});
