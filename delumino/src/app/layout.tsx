import "./globals.css";

import { Inter } from "next/font/google";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { asText } from "@prismicio/client";
import * as prismic from "@prismicio/client";

import Drawer  from "@/components/Drawer";
import { Navigation } from "@/components/Navigation";
import ScrollTopButton from "@/components/ScrollTopButton";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";


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
        <ScrollTopButton />
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
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
      <Bounded as="header" yPadding="xs">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <div className="flex items-center space-x-5">
            <div className="hidden lg:block">
            <Drawer navigation={navigation} logo={settings.data.logo} siteTitle={settings.data.siteTitle} />
            </div>

            <PrismicNextLink
              href="/"
              className="hidden lg:flex items-center text-4xl gap-x-2 uppercase font-extrabold tracking-tight hover:text-green-400"
            >
              {prismic.isFilled.image(settings.data.logo) && (
                <PrismicNextImage
                  field={settings.data.logo}
                  fill={false}
                  className="w-8 h-auto"
                />
              )}
              <PrismicText field={settings.data.siteTitle} />
            </PrismicNextLink>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Navigation navigation={navigation} siteTitle={settings.data.siteTitle} logo={settings.data.logo} />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {Array.isArray(settings.data.cta_links) && settings.data.cta_links.map((ctaLink, index) => (
              <PrismicNextLink
                key={index}
                field={ctaLink.link}
                className="font-semibold px-4 py-2 border rounded-full last:bg-white last:text-black hover:text-green-400 hover:border-green-400"
              >
                <PrismicText field={ctaLink.label} />
              </PrismicNextLink>
            ))}
          </div>
        </div>

        <div className="block lg:hidden">
          <Navigation navigation={navigation} siteTitle={settings.data.siteTitle} logo={settings.data.logo} />
        </div>
      </Bounded>
    </div>
  );
}
async function Footer() {
  const currentYear = new Date().getFullYear();
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className=" text-gray-300 pb-12">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8">

        {/* Logo and Company Info */}
        <div className="flex flex-col items-center space-y-4">
          {settings.data.logo && prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage
              field={settings.data.logo}
              fill={false}
              className="w-16 h-auto mb-2"
            />
          )}
          <p className="text-xl font-bold uppercase text-white">
            <PrismicText field={settings.data.siteTitle} />
          </p>
          <p className="text-lg text-gray-400 text-center">Building better solutions for the modern world.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-center text-lg">
          <PrismicNextLink href="/" className=" hover:text-green-400 transition duration-200">Home</PrismicNextLink>
          <PrismicNextLink href="/about" className=" hover:text-green-400 transition duration-200">About Us</PrismicNextLink>
          <PrismicNextLink href="/products" className=" hover:text-green-400 transition duration-200">Products</PrismicNextLink>
          <PrismicNextLink href="/services" className=" hover:text-green-400 transition duration-200">Services</PrismicNextLink>
          <PrismicNextLink href="/contact" className=" hover:text-green-400 transition duration-200">Contact</PrismicNextLink>
          <PrismicNextLink href="/privacy" className=" hover:text-green-400 transition duration-200">Privacy Policy</PrismicNextLink>
          <PrismicNextLink href="/terms" className=" hover:text-green-400 transition duration-200">Terms & Conditions</PrismicNextLink>
          <PrismicNextLink href="/faq" className=" hover:text-green-400 transition duration-200">FAQ</PrismicNextLink>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold text-white">Connect with Us</h4>
          <div className="flex gap-6 text-3xl">
            <PrismicNextLink href="https://www.facebook.com" target="_blank" className="text-white hover:text-green-400 transition duration-200">
              <FaFacebookF />
            </PrismicNextLink>
            <PrismicNextLink href="https://www.instagram.com" target="_blank" className="text-white hover:text-green-400 transition duration-200">
              <FaInstagram />
            </PrismicNextLink>
            <PrismicNextLink href="https://www.twitter.com" target="_blank" className="text-white hover:text-green-400 transition duration-200">
              <FaTwitter />
            </PrismicNextLink>
            <PrismicNextLink href="https://wa.me/+447492096576" target="_blank" className="text-white hover:text-green-400 transition duration-200">
              <FaWhatsapp />
            </PrismicNextLink>
          </div>
          <div className="flex items-center gap-2 text-md text-gray-300 hover:text-green-400 transition duration-200">
            <FaWhatsapp className="text-xl" />
            <span>+44 (7492) 096-576</span>
          </div>
        </div>

        {/* Anpc SAL & SOL */}
        <div className="flex items-center space-x-5">
          {settings.data.anpc_sal && settings.data.anpc_sal_link && prismic.isFilled.image(settings.data.anpc_sal) && (
            <PrismicNextLink field={settings.data.anpc_sol_link}>
              <PrismicNextImage
                field={settings.data.anpc_sal}
                fill={false}
                className="w-52 h-auto mb-2"
              />
            </PrismicNextLink>
          )}

          {settings.data.anpc_sol && settings.data.anpc_sol_link && prismic.isFilled.image(settings.data.anpc_sol) && (
            <PrismicNextLink field={settings.data.anpc_sol_link}>
              <PrismicNextImage field={settings.data.anpc_sol} fill={false} className="w-52 h-auto mb-2" />
            </PrismicNextLink>
          )}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} <span className="text-white"><PrismicText field={settings.data.siteTitle} /></span>. All rights reserved.</p>
      </div>
    </footer>
  );
}