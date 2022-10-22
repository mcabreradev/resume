import React from "react";
import Head from 'next/head'
import { TComponent } from "@components/types";
import { Sidebar } from "@components/Common";
import { profile } from "@data/json";

interface Props extends TComponent {}

const Layout = ({ children }: Props) => {
  return (
    <div data-testid="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO & Meta Tags */}
        <title>{profile.name}</title>
        <link rel="shortcut icon" href="/images/typescript.png" />
        <meta name="title" content={profile.name} />
        <meta
          name="description"
          content={""+profile.biography.short}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={profile.website} />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={""+profile.biography.short}/>
        <meta
          property="og:image"
          content={profile.profilePicture}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={profile.website} />
        <meta property="twitter:title" content={profile.name} />
        <meta
          property="twitter:description"
          content={""+profile.biography.short}
        />
        <meta
          property="twitter:image"
          content={profile.profilePicture}
        />
      </Head>
      <div className="flex flex-col lg:flex-row px-2 sm:px-12 md:px-24 py-6 md:py-12 lg:py-24 max-w-7xl mx-auto">
        <Sidebar className="block lg:fixed w-full lg:w-56 mx-auto lg:mx-0 text-center lg:text-left" />
        <div
          data-testid="mainContainer"
          className="ml-0 lg:ml-84 w-full lg:w-full px-6 md:px-8 lg:px-0 py-4 md:py-0 mx-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
