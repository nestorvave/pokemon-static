import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon-App"}</title>
        <meta name="author" content="Nestor Vargas" />
        <meta name="description" content="Informacion sobre el pokemon" />
        <meta name="keywords" content={` ${title} pokemon, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
