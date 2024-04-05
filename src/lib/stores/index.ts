import { writable, derived } from "svelte/store";
import type { Item } from "$lib/types";

export const items = (() => {
  const local = localStorage.getItem("items");
  const { subscribe, update } = writable<Item[]>(local ? JSON.parse(local) : []);

  return {
    subscribe,
    add: (item: Item) => update(items => [...items, item]),
    delete: (id: number) => update(items => items.filter((item, i) => i !== id)),
    edit: (id: number, newItem: Item) => update(items => items.map((item, i) => i === id ? newItem : item))
  }
})();

items.subscribe(v => localStorage.setItem("items", JSON.stringify(v)));

export const shownItems = derived(
  items,
  $items => $items.reduce((acc, item, i) => {
    if (!item.isHidden) {
      acc.push({
        ...item,
        id: i
      })
    }
    return acc;
  }, [] as Item[])
);