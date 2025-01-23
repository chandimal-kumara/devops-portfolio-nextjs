"use client";
import Header from "./components/Header";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Head>
        <title>Chandimal Kumara</title>
      </Head>
      <div>
        <Header />

        <Body />

        <Experience />

        <Skills />

        <Contact />
      </div>
    </main>
  );
}
