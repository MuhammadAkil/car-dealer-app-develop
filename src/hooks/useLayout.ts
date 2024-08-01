'use client';

import { atom, useAtom } from 'jotai';

const isomorphicLayoutAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('isomorphic-layout')
    : 'beryllium'
);

const isomorphicLayoutAtomWithPersistence = atom(
  (get) => get(isomorphicLayoutAtom),
  (get, set, newStorage: any) => {
    set(isomorphicLayoutAtom, newStorage);
    localStorage.setItem('isomorphic-layout', newStorage);
  }
);

export function useLayout() {
  const [layout, setLayout] = useAtom(isomorphicLayoutAtomWithPersistence);
  return {
    layout: layout === null ? 'beryllium' : layout,
    setLayout,
  };
}
