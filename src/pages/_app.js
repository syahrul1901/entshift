import AppShell from "components/layouts/AppSheel";
import "/src/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
