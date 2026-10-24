import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { Platform } from 'react-native';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(initialValue: T | null = null): UseStateHook<T> {
  const [state, setState] = React.useState<[boolean, T | null]>([true, initialValue]);

  const setValue = React.useCallback((value: T | null) => {
    setState([false, value]);
  }, []);

  return [state, setValue];
}

export function useStorageState(key: string): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>();

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(localStorage.getItem(key));
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      SecureStore.getItemAsync(key).then(value => {
        setState(value);
      });
    }
  }, [key]);

  const setValue = React.useCallback(
    (value: string | null) => {
      setState(value);
      if (Platform.OS === 'web') {
        if (value === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      } else {
        if (value === null) {
          SecureStore.deleteItemAsync(key);
        } else {
          SecureStore.setItemAsync(key, value);
        }
      }
    },
    [key]
  );

  return [state, setValue];
}
