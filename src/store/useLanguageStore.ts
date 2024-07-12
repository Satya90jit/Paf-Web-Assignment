// store/useLanguageStore.ts
import { create } from "zustand";

type LanguageType = "English" | "Hindi";

interface LanguageState {
  selectedLanguage: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguage: "English",
  changeLanguage: (lang: LanguageType) => set({ selectedLanguage: lang }),
}));

export default useLanguageStore;

//? Explanation of changeLanguage
// changeLanguage: (lang: LanguageType) => set({ selectedLanguage: lang })

// changeLanguage Method: This is a method defined in your store’s state. It takes a parameter lang of type LanguageType.

//? Calling set:
// set({ selectedLanguage: lang })

// set is a function provided by Zustand to update the state.
// You pass an object to set where the keys are the state properties you want to update and the values are the new values for those properties.
// In this case: set({ selectedLanguage: lang }) means you want to update the selectedLanguage property in the state to the value of lang.

// This update will cause Zustand to re-render any components that are using the selectedLanguage state.

//? What Does set Do?
// Updates State: set takes an object and updates the state with the properties and values you provide.
// Triggers Re-render: If any components are subscribed to the part of the state that’s changed, they will re-render with the new state.

//! Define the state type and initial state
// interface CounterState {
//   count: number;
//   increase: () => void;
// }

//? Create a Zustand store
// const useCounterStore = create<CounterState>((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
// }));

// This method updates the count property.
// set receives a function where state is the current state.
// state.count + 1 calculates the new value of count.
// set updates count to this new value, which triggers a re-render of any component that uses count.

//! Comparison with Redux Toolkit
//? Let’s compare how set in Zustand is similar to and different from Redux Toolkit:

// Feature	Zustand (set)	..........................................Redux Toolkit (dispatch)
// Update State	set({ selectedLanguage: lang })	........................dispatch(changeLanguage(lang))
// Direct State Update	Directly updates state properties...........	Dispatches an action to a reducer which updates the state.
// API Simplicity	Simple API with direct state management............	More complex with actions and reducers.
// State Update	set updates the state and triggers re-render...........	Reducers handle state updates, and dispatch sends actions to reducers.
// Example	set({ selectedLanguage: lang })............................	dispatch(changeLanguage(lang))
