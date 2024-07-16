import "./globals.css";

import { Inter } from "next/font/google";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { asText } from "@prismicio/client";
import * as prismic from "@prismicio/client";

import { Navigation } from "@/components/Navigation";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

import { GiHamburgerMenu } from "react-icons/gi";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased bg-black text-white">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50 shadow-sm">
      <Bounded as="header" yPadding="sm">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
          <PrismicNextLink
            href="/"
            className="hidden lg:flex items-center gap-x-4 text-xl uppercase font-extrabold tracking-tight hover:text-green-400"
          >
            {/* {prismic.isFilled.image(settings.data.logo) && (
              <PrismicNextImage
                field={settings.data.logo}
                fill={false}
                className="w-32 h-auto"
              />
            )} */}
            <PrismicText field={settings.data.siteTitle} />
          </PrismicNextLink>
          <div className="hidden lg:flex items-center gap-6">
            <Navigation navigation={navigation} siteTitle={settings.data.siteTitle} />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {Array.isArray(settings.data.cta_links) && settings.data.cta_links.map((ctaLink, index) => (
              <PrismicNextLink
                key={index}
                field={ctaLink.link}
                className="font-semibold first:-ms-5 px-4 py-2 border rounded-full last:bg-white last:text-black hover:text-green-400 hover:border-green-400"
              >
                <PrismicText field={ctaLink.label} />
              </PrismicNextLink>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <Navigation navigation={navigation} siteTitle={settings.data.siteTitle} />
        </div>
      </Bounded>
    </div>
  );
}
