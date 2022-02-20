import { writable } from "svelte/store";

// history buffers
export const past = writable<string[]>([]);

export const present = writable<string>("");

export const future = writable<string[]>([]);
