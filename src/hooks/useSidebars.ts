'use client';

import { atom, useAtom } from 'jotai';

const LOCAL_STORAGE_KEY = 'sidebar-left-expanded';

const sidebarLeftExpandedAtom = atom(
  typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : true
);

const sidebarLeftExpandedAtomWithPersistence = atom(
  (get) => get(sidebarLeftExpandedAtom),
  (get, set, newStorage: any) => {
    set(sidebarLeftExpandedAtom, newStorage);
    localStorage.setItem(LOCAL_STORAGE_KEY, newStorage);
  }
);

export function useSidebars() {
  const [expandedLeft, setExpandedLeft] = useAtom(
    sidebarLeftExpandedAtomWithPersistence
  );

  return {
    expandedLeft: !!(expandedLeft === null
      ? true
      : JSON.parse(expandedLeft as string)),
    setExpandedLeft,
  };
}


