import { AppContextProvider } from "@/contexts";
import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //! use of Zustand
    <Component {...pageProps} />
    // Unlike Redux and context API, Zustand does not need a Provider component to wrap the application. Zustand store is standalone and can be used directly in any component.
    //! use of redux toolkit
    // <Provider store={store}>
    //   <Component {...pageProps} />
    // </Provider>
    //! use of context API
    // <AppContextProvider>
    //   <Component {...pageProps} />
    // </AppContextProvider>
  );
}
