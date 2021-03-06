import type { NextPage } from "next";
import Head from "next/head";
import { Post } from "../components/common/Post";
import { Slogan } from "../components/common/Slogan";
import Footer from "../components/Footer";
import Introduct from "../components/Introduct";
import Introduct1 from "../components/IntroductProject";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DC Project</title>
        <meta name="description" content="Marketing for every project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
        <Slogan />
        <Introduct />
        <Post />
        <Post />
        <Introduct1 />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
