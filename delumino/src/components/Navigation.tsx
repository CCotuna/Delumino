"use client"
import type { ReactNode } from "react"
import React, { useState } from "react"

import { PrismicRichText } from "@/components/PrismicRichText"

import { PrismicNextLink } from "@prismicio/next"
import { PrismicText } from "@prismicio/react"
import * as prismic from "@prismicio/client"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";



export function Navigation({ navigation, siteTitle }: { navigation: any, siteTitle: prismic.TitleField; }) {

    const [showNav, setShowNav] = useState(false)

    const toggleNavBar = () => {
        setShowNav(!showNav)
    }
    return (
        <>
            <div className="flex lg:hidden justify-between items-center">
                <button
                    className="text-white text-2xl sm:text-3xl block lg:hidden"
                    onClick={toggleNavBar}
                >
                    <GiHamburgerMenu />
                </button>
                <PrismicNextLink
                    href="/"
                    className="flex items-center gap-x-4 text-3xl uppercase font-extrabold tracking-tight"
                >
                    {/* {prismic.isFilled.image(settings.data.logo) && (
              <PrismicNextImage
                field={settings.data.logo}
                fill={false}
                className="w-32 h-auto"
              />
            )} */}
                    <PrismicText field={siteTitle} />
                </PrismicNextLink>
                <button
                    className="text-white text-2xl sm:text-3xl block lg:hidden">
                    <IoChatbubblesSharp />
                </button>
            </div>
            <div
                className={`bg-green-400 w-full min-h-screen fixed top-0 left-0 flex flex-col items-center pt-10 transition-transform duration-300 ease-in-out ${showNav ? "transform translate-x-0" : "transform -translate-x-full"}`}>
                <button onClick={toggleNavBar} className="text-black text-2xl">
                    <IoClose />
                </button>
                <div className="flex flex-col pt-5">
                    {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; }; }) => (
                        <button
                            key={prismic.asText(slice.primary.label)}
                            onClick={toggleNavBar}
                            className="text-darkgreen uppercase font-semibold"
                        >
                            <PrismicNextLink field={slice.primary.link}>
                                <PrismicText field={slice.primary.label} />
                            </PrismicNextLink>
                        </button>
                    ))}
                </div>
            </div>

            <nav className="hidden lg:flex lg:items-center">
                <ul className=" flex flex-wrap gap-6 md:gap-10">
                    {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; menu_items: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }[]; }; menu_items: { length: prismic.RichTextField | null | undefined; }; }) => (
                        <li
                            key={prismic.asText(slice.primary.label)}
                            className="font-medium text-white uppercase relative group"
                        >
                            <PrismicNextLink
                                field={slice.primary.link}
                                className="hover:text-green-400 py-3 border-b-2 border-transparent transition duration-100 ease-in-out hover:border-green-400"
                            >
                                <PrismicText field={slice.primary.label} />
                            </PrismicNextLink>
                            {slice.primary.menu_items.length > 0 && (
                                <ul className="absolute transform -translate-x-1/2 text-black rounded-lg hidden p-5 pt-8 mt-4 bg-white shadow-lg group-hover:grid grid-cols-1 md:grid-cols-3 gap-2 whitespace-nowrap min-w-[12rem] max-w-[30rem]">
                                    {slice.primary.menu_items.map((item: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }, itemIndex: React.Key | null | undefined) => (
                                        <li key={itemIndex} className="mb-4">
                                            <PrismicNextLink
                                                field={item.link}
                                                className="hover:text-brand-darkgreen"
                                            >
                                                <PrismicText field={item.label} />
                                            </PrismicNextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}