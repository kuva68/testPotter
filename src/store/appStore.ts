import {create} from 'zustand';
import {ICharacter} from '../types/interfaces';

export interface IAppStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  characters: ICharacter[];
  currentCharacter: ICharacter | null;
}

export const useAppStore = create<IAppStore>(set => ({
  loading: false,
  setLoading: (loading: boolean) => set({loading}),
  characters: [],
  currentCharacter: null,
}));
