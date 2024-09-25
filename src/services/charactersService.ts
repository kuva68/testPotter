import {AxiosError} from 'axios';
import {useAppStore} from '../store/appStore';
import {apiService} from './API';

export const getCharacters = async () => {
  try {
    useAppStore.setState({loading: true});
    const res = await apiService.getCharacters();

    useAppStore.setState({characters: res.data, loading: false});
  } catch (e) {
    useAppStore.setState({loading: false});
    if (e instanceof AxiosError) {
      return e.message;
    }
  }
};
