import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Fatima Ali</title>
      <meta name="description" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.ico" />
    </Head>
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-scroll"><Navbar /></main>
    </>
    )
}
