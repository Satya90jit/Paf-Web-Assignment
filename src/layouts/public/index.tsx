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
};

const PublicLayout = ({
  children = <></>,
  title = "",
  description,
  navClass,
  insideNavClass,
  innerBarClass,
}: Props) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
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
