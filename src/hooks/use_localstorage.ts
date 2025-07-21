"use client";

import { useState, useEffect, useCallback, useRef } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value.
  // Initialize with `initialValue`. This is crucial for SSR and the first client render to match.
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Ref to ensure initial load from localStorage happens only once per key,
  // even if initialValue prop reference changes (though it should be stable).
  const initialLoadAttemptedForKey = useRef<string | null>(null);

  // Effect to load value from localStorage on initial client mount
  useEffect(() => {
    // Only run on the client
    if (typeof window === "undefined") {
      return;
    }

    // Only attempt to load from localStorage once for a given key,
    // or if the key changes.
    if (initialLoadAttemptedForKey.current !== key) {
      try {
        const item = window.localStorage.getItem(key);
        if (item) {
          const localValue = JSON.parse(item) as T;
          // Update the state if the value from localStorage is different from the current state
          // (which is `initialValue` on the first run of this effect).
          // This comparison helps avoid an unnecessary re-render if localStorage already matches initialValue.
          if (JSON.stringify(localValue) !== JSON.stringify(initialValue)) {
            setStoredValue(localValue);
          }
        } else {
          // If no item in localStorage, it means `initialValue` is the source of truth.
          // Ensure localStorage is set to `initialValue`.
          // `storedValue` is already `initialValue` at this point from `useState(initialValue)`.
          window.localStorage.setItem(key, JSON.stringify(initialValue));
        }
      } catch (error) {
        console.error(
          `Error reading/setting localStorage key "${key}" during initial load:`,
          error
        );
        // If there's an error, `storedValue` remains `initialValue`.
        // It might be good to ensure localStorage reflects this fallback.
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      } finally {
        initialLoadAttemptedForKey.current = key;
      }
    }
    // The dependency array includes `key` and `initialValue`.
    // `initialValue` is included because if the intended initial state from the prop changes,
    // we need to re-evaluate against localStorage. The parent component (AppPage)
    // already uses `useMemo` for `initialValue`, making it stable.
    // Stringifying initialValue for the dep array if it's an object/array ensures stability.
    // For simplicity, assuming `initialValue` reference from parent is stable.
  }, [key, initialValue]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Effect to listen for storage changes from other tabs/windows
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.storageArea === window.localStorage) {
        // Ensure not to react if initial load for this key hasn't completed in this tab
        if (initialLoadAttemptedForKey.current !== key) return;

        if (event.newValue === null) {
          if (JSON.stringify(storedValue) !== JSON.stringify(initialValue)) {
            setStoredValue(initialValue);
          }
        } else {
          try {
            const newParsedValue = JSON.parse(event.newValue) as T;
            if (
              JSON.stringify(newParsedValue) !== JSON.stringify(storedValue)
            ) {
              setStoredValue(newParsedValue);
            }
          } catch (error) {
            console.error(
              `Error parsing storage change for key "${key}":`,
              error
            );
          }
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, initialValue, storedValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
