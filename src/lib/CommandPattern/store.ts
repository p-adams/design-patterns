import { writable } from "svelte/store";
// history buffers
export const past = writable<Array<string>>([]);

export const present = writable<string>("");

export const future = writable<Array<string>>([]);
