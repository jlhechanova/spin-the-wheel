import { writable, derived } from "svelte/store";
import type { Item } from "$lib/types";

export const items = (() => {
  const { subscribe, update } = writable<Item[]>([]);

  return {
    subscribe,
    add: (item: Item) => update(items => [...items, item]),
    delete: (id: number) => update(items => items.filter((item, i) => i !== id)),
    edit: (id: number, newItem: Item) => update(items => items.map((item, i) => i === id ? newItem : item))
  }
})();

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