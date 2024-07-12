import { AppContextProvider } from "@/contexts";
import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //! use of redux toolkit
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    //! use of context API
    // <AppContextProvider>
    //   <Component {...pageProps} />
    // </AppContextProvider>
  );
}
