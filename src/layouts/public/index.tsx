import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import InnerBar from "./InnerBar";
import InsideNav from "./InsideNav";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  navClass?: string | undefined;
  insideNavClass?: string | undefined;
  innerBarClass?: string | undefined;
  ogImage?: string;
};

const PublicLayout = ({
  children = <></>,
  title = "",
  description,
  navClass,
  insideNavClass,
  innerBarClass,
  ogImage = "https://paf-web-assignment.vercel.app/ap.jpg",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          property="og:url"
          content="https://paf-web-assignment.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={
            description
              ? description
              : "Acharya Prashant is dedicated to building a brighter future for you"
          }
        />
        <meta
          property="og:image"
          content={
            ogImage ? ogImage : "https://paf-web-assignment.vercel.app/ap.jpg"
          }
        />
      </Head>
      <main>
        <Navbar navClass={navClass} />
        <InnerBar innerBarClass={innerBarClass} />
        <InsideNav insideNavClass={insideNavClass} />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PublicLayout;
