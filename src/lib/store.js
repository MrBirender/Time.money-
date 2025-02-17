// store.js
import { writable } from "svelte/store";

// Store to track drawer state (true = open, false = closed)
export const isDrawerOpen = writable(false);

export const isLoggedIn = writable(false);
