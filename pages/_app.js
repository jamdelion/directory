import "../styles/globals.css";
import { supabase, useSupabase } from "../database/supabaseClient";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const session = useSupabase();
  return (
    <>
      <Header session={session} />
      <Component {...pageProps} supabase={supabase} session={session} />
    </>
  );
}

export default MyApp;
