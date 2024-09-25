import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '.';
import type {StackScreenProps} from '@react-navigation/stack';
import {TabParamList} from './TabNavigator';

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface TabParam extends TabParamList {}
  }
}
