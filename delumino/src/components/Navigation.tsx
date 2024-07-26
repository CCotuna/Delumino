"use client";
import type { ReactNode } from "react";
import React, { useState } from "react";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { PrismicNextImage } from "@prismicio/next";
import { AiFillCaretDown } from "react-icons/ai";

export function Navigation({ navigation, siteTitle, logo }: { navigation: any, siteTitle: prismic.TitleField; logo?: prismic.ImageField }) {
    const [showNav, setShowNav] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleNavBar = () => {
        setShowNav(!showNav);
    };

    const handleMenuClick = (label: string) => {
        if (activeMenu === label) {
            setActiveMenu(null);
        } else {
            setActiveMenu(label);
        }
    };

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
                    className="flex items-center gap-x-2 text-3xl uppercase font-extrabold tracking-tight"
                >
                    {logo && prismic.isFilled.image(logo) && (
                        <PrismicNextImage
                            field={logo}
                            fill={false}
                            className="w-8 h-auto"
                        />
                    )}
                    <PrismicText field={siteTitle} />
                </PrismicNextLink>
                <button
                    className="text-white text-2xl sm:text-3xl block lg:hidden">
                    <IoChatbubblesSharp />
                </button>
            </div>

            <div
                className={`bg-black w-full min-h-screen fixed top-0 left-0 flex flex-col items-center pt-10 transition-transform duration-300 ease-in-out ${showNav ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex gap-x-10 items-center">
                    <PrismicNextLink
                        href="/"
                        className="flex items-center gap-x-2 text-3xl uppercase font-extrabold tracking-tight"
                    >
                        {logo && prismic.isFilled.image(logo) && (
                            <PrismicNextImage
                                field={logo}
                                fill={false}
                                className="w-10 h-auto"
                            />
                        )}
                        <PrismicText field={siteTitle} />
                    </PrismicNextLink>
                    <button onClick={toggleNavBar} className="text-white text-2xl">
                        <IoClose />
                    </button>
                </div>
                <div className="flex flex-col pt-5">
                    {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; }; }) => (
                        <button
                            key={prismic.asText(slice.primary.label)}
                            onClick={toggleNavBar}
                            className="text-white uppercase font-semibold"
                        >
                            <PrismicNextLink field={slice.primary.link}>
                                <PrismicText field={slice.primary.label} />
                            </PrismicNextLink>
                        </button>
                    ))}
                </div>
            </div>

            <nav className="hidden lg:flex lg:items-center w-full relative">
                <ul className="flex gap-6 md:gap-10 w-full">
                    {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; menu_items: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }[]; }; }) => (
                        <li
                            key={prismic.asText(slice.primary.label)}
                            className="relative group"
                        >
                            <button
                                onClick={() => {
                                    const label = prismic.asText(slice.primary.label);
                                    if (label) {
                                        handleMenuClick(label);
                                    }
                                }}
                                className="flex items-center gap-x-2 font-medium text-white uppercase py-3 border-b-2 border-transparent transition duration-100 ease-in-out hover:border-green-400 hover:text-green-400"
                            >
                                <PrismicText field={slice.primary.label} />
                                {slice.primary.menu_items.length > 0 && (
                                    <AiFillCaretDown
                                        className={`text-white transition-transform duration-300 ${
                                            activeMenu === prismic.asText(slice.primary.label) ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; menu_items: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }[]; }; }) => (
                activeMenu === prismic.asText(slice.primary.label) && slice.primary.menu_items.length > 0 && (
                    <div key={prismic.asText(slice.primary.label)} className="absolute left-0 w-full bg-black shadow-lg z-40" style={{ top: '7rem' }}>
                        <div className="mx-auto p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {slice.primary.menu_items.map((item: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }, itemIndex: React.Key | null | undefined) => (
                                <div key={itemIndex} className="p-2">
                                    <PrismicNextLink
                                        field={item.link}
                                        className="text-white hover:text-green-500"
                                    >
                                        <PrismicText field={item.label} />
                                    </PrismicNextLink>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </>
    );
}
