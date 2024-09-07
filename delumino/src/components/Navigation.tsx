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

            {/* Mobile Navigation */}
            <div
                className={`bg-black w-full h-screen fixed top-0 left-0 flex flex-col pt-10 transition-transform duration-300 ease-in-out z-50 overflow-hidden ${showNav ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center w-full px-4">
                    <PrismicNextLink
                        href="/"
                        className="flex items-center text-2xl uppercase font-extrabold tracking-tight text-white"
                    >
                        {logo && prismic.isFilled.image(logo) && (
                            <PrismicNextImage
                                field={logo}
                                fill={false}
                                className="w-7 h-auto"
                            />
                        )}
                        <PrismicText field={siteTitle} />
                    </PrismicNextLink>
                    <button onClick={toggleNavBar} className="text-white font-extrabold text-3xl">
                        <IoClose />
                    </button>
                </div>

                <div className="flex flex-col items-start w-full mt-5 px-4 overflow-y-auto">
                    {navigation.data.slices.map((slice: { primary: { menu_items: any; label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; }; }) => (
                        <div key={prismic.asText(slice.primary.label)} className="w-full">
                            <button
                                onClick={() => {
                                    const label = prismic.asText(slice.primary.label) || '';
                                    handleMenuClick(label);
                                }}
                                className="text-white uppercase font-semibold flex items-center gap-x-2 py-2 text-lg w-full text-left"
                            >
                                <PrismicNextLink field={slice.primary.link} className="w-full">
                                    <PrismicText field={slice.primary.label} />
                                </PrismicNextLink>
                                {slice.primary.menu_items.length > 0 && (
                                    <AiFillCaretDown
                                        className={`text-white transition-transform duration-300 ${activeMenu === prismic.asText(slice.primary.label) ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                )}
                            </button>
                            {activeMenu === prismic.asText(slice.primary.label) && slice.primary.menu_items.length > 0 && (
                                <ul className="ml-4 mt-2 max-h-40 overflow-y-auto">
                                    {slice.primary.menu_items.map((item: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }) => (
                                        <li key={prismic.asText(item.label)} className="text-white py-1 text-sm">
                                            <PrismicNextLink field={item.link} className="hover:text-green-500">
                                                <PrismicText field={item.label} />
                                            </PrismicNextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:items-center w-full relative">
                <ul className="flex gap-6 md:gap-10 w-full">
                    {navigation.data.slices.map((slice: { primary: { label: prismic.RichTextField | null | undefined; link: prismic.LinkField | null | undefined; menu_items: { link: prismic.LinkField | null | undefined; label: prismic.RichTextField | null | undefined; }[]; }; }) => (
                        <li
                            key={prismic.asText(slice.primary.label)}
                            className="relative group"
                        >
                            <button
                                onClick={() => {
                                    const label = prismic.asText(slice.primary.label) || '';
                                    handleMenuClick(label);
                                }}
                                className="flex items-center gap-x-2 font-medium text-white uppercase py-3 border-b-2 border-transparent transition duration-100 ease-in-out hover:border-green-400 hover:text-green-400"
                            >
                                {slice.primary.menu_items.length == 0 && (
                                    <PrismicNextLink field={slice.primary.link} ><PrismicText field={slice.primary.label} /></PrismicNextLink>
                                )}
                                {slice.primary.menu_items.length > 0 && (
                                    <div className="flex gap-1">
                                        <PrismicText field={slice.primary.label} />
                                        <AiFillCaretDown
                                            className={`text-white transition-transform duration-300 ${activeMenu === prismic.asText(slice.primary.label) ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </div>
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
