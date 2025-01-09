import { atom } from 'recoil';

export const localeAtom = atom({
  key: 'localeAtom',
  default: 'id', // default locale
});