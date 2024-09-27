import "./globals.css";

import { Inter } from "next/font/google";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { asText } from "@prismicio/client";
import * as prismic from "@prismicio/client";

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
      <Bounded as="header" yPadding="sm">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <div className="flex items-center space-x-5">
            <div>
              <input type="checkbox" id="drawer-toggle" className="peer hidden" />
              <label
                htmlFor="drawer-toggle"
                className="text-3xl text-white hover:text-green-400 rounded-full cursor-pointer font-semibold text-center shadow-xs "
              >
                <RiMenu2Fill />
              </label>
              <div
                id="drawer-left"
                className="w-96 absolute left-0 top-0 z-40 pl-9 pr-3 pb-11 overflow-y-auto transition-transform duration-200 ease-in-out transform -translate-x-full peer-checked:translate-x-0 bg-white"
                tabIndex={-1}
                aria-labelledby="drawer-label"
                aria-hidden="true"
              >
                <h2 id="drawer-label" className="text-gray-900 text-lg font-semibold leading-7 pt-6">
                  Notification
                </h2>
                <p className="text-black text-opacity-20 text-sm font-normal leading-snug">Drawer notification panel</p>
                <label
                  htmlFor="drawer-toggle"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-6 right-2.5 inline-flex items-center justify-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </label>
                <div className="py-6">
                  <div className="flex gap-3 mb-4">
                    <div>
                      <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                        Hailey Garza <span className="text-gray-500">added new tags to Ease Design System</span>
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Account | Friday, 10:03 AM</h6>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <div>
                      <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                        Brandon Newman <span className="text-gray-500">Liked your Pagedone 045-favourites-2h ago</span>
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div>
                      <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                        Justi Bolt <span className="text-gray-500">Started Following</span>
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                        Dave Wood <span className="text-gray-500">Started Following</span>
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                    </div>
                  </div>
                </div>
                <h2 className="text-gray-900 text-base font-semibold leading-relaxed mb-4">This Week</h2>
                <div className="flex gap-3 mb-4">
                  <div>
                    <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                      Kate Young <span className="text-gray-500">Like your post</span>
                    </h5>
                    <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Account | Friday, 10:03 AM</h6>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div>
                    <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                      Shanaya Kale <span className="text-gray-500">commented on your post</span>
                    </h5>
                    <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div>
                    <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                      Angelina <span className="text-gray-500">Messages you &quot;Do you want to go see a movie tonight?&quot;</span>
                    </h5>
                    <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <div className="pb-3">
                      <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                        Natasha <span className="text-gray-500">Send you competitors analysis document</span>
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-[18px]">Friday, 10:03 AM</h6>
                    </div>
                    <div className="flex gap-1 p-3 bg-gray-50 rounded-lg w-fit">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="File">
                          <path
                            id="icon"
                            d="M26.9018 9.01473L27.4998 8.48324V8.48324L26.9018 9.01473ZM24.3571 6.15194L23.7592 6.68343L23.7592 6.68343L24.3571 6.15194ZM22.5548 4.49865L22.2271 5.22845V5.22845L22.5548 4.49865ZM28.1482 10.6953L27.4004 10.9796V10.9796L28.1482 10.6953ZM27.0884 28.5052L27.6541 29.0709H27.6541L27.0884 28.5052ZM20.5959 9.76109L21.3806 9.60502L20.5959 9.76109ZM22.8221 11.9872L22.666 12.7719L22.8221 11.9872ZM9.9165 17.6167C9.47468 17.6167 9.1165 17.9749 9.1165 18.4167C9.1165 18.8585 9.47468 19.2167 9.9165 19.2167V17.6167ZM24.5002 26.7832L23.955 26.2279H23.955L24.5002 26.7832ZM11.0001 26.7832L11.5453 26.2279H11.5453L11.0001 26.7832ZM12.6367 24.5002V24.5002H12.6367ZM14.5002 23.5459V23.5459H14.5002ZM23.5459 23.5459V23.5459H23.5459ZM25.7832 24.5002V24.5002H25.7832ZM26.2279 23.955V23.955H26.2279ZM26.2279 12.6367V12.6367H26.2279ZM25.7832 14.5002V14.5002H25.7832ZM23.5459 23.5459V23.5459H23.5459Z"
                            fill="#485972"
                          />
                        </g>
                      </svg>
                      <div className="pl-2">
                        <h5 className="text-gray-900 text-sm font-medium leading-snug mb-1">
                          Angelina sent you <span className="text-gray-500">&quot;Competitor Research.docx&quot;</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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