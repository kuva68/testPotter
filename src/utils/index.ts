import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const shortAddress = (address: string, chars = 4) => {
  if (!address) {
    return '';
  }
  if (address.length < chars * 2 + 3) {
    return address;
  }
  return `${address?.substring(0, chars)}...${address?.substring(
    address?.length - chars,
  )}`;
};
export function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}
export const isWrongEmail = (email: string) => {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return true;
  }
  return false;
};
