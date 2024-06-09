import { useEffect, useRef } from "react";

// The useRef hook in React is used to create a reference that persists across re-renders of a component.
// This reference can hold a mutable value, and any changes to this value do not cause the component to re-render

export default function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

//!const isMounted = useRef(false);

//? useRef(false):
// When you call useRef, it returns a mutable object with a single property called current. You can initialize this current property with any value, in this case, false.
//? isMounted:
// The object returned by useRef is stored in the isMounted variable. Initially, isMounted.current is set to false.

//! Reference Lifetime and Persistence

// The object created by useRef persists for the entire lifetime of the component. This means that even if the component re-renders, the same isMounted object is used, and its current property retains its value.
// Unlike state variables created with useState, updating a ref's current property does not trigger a re-render of the component.
