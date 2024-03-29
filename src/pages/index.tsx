import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Task manag  App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"></link>
      </Head>
      <Provider store={store}>
        <main className="d-flex flex-column align-items-center min-vh-100 pt-5 px-2 py-4"
        >
          <h1 className="md-3 text-2 display-3 fst-italic text-success font-weight-bold md-mb-16 mb-8 mt-3"
          >Task Management App</h1>
          <Navbar />
        </main>
      </Provider>
    </>
  );
}
