import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IAppSettingsStore {
  failures: {[key: string]: number};
  successList: {[key: string]: number};
}

export const useAppSettingsStore = create<IAppSettingsStore>()(
  persist(
    set => ({
      failures: {},
      successList: {},
      setFailures: (failures: {[key: string]: number}) => set({failures}),
    }),
    {
      storage: createJSONStorage(() => AsyncStorage),
      name: 'appSettings',
      onRehydrateStorage: () => {
        console.log('onRehydrateStorage');
      },
    },
  ),
);
