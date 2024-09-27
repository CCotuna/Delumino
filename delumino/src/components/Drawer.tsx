"use client"
import React, { useState, useEffect, useRef } from 'react';
import { PrismicText } from "@prismicio/react";

import { PrismicNextLink } from '@prismicio/next'; 
import { PrismicNextImage } from "@prismicio/next";
import { RiMenu2Fill } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { NavigationDocument } from '../../prismicio-types';
import { ImageField, TitleField } from '@prismicio/client';

import * as prismic from "@prismicio/client";



interface DrawerProps {

    navigation: NavigationDocument<string>;
  
    logo: ImageField<never>;
  
    siteTitle: TitleField;
  
  }

export const Drawer: React.FC<DrawerProps> = ({ navigation, logo, siteTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
        type="checkbox"
        id="drawer-toggle"
        className="peer hidden"
        checked={isOpen}
        readOnly
      />
      <label
        htmlFor="drawer-toggle"
        className="text-3xl text-white hover:text-green-400 rounded-full cursor-pointer font-semibold text-center shadow-xs"
        onClick={toggleDrawer}
      >
        <RiMenu2Fill />
      </label>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-50 z-30" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <div
        ref={drawerRef} 
        id="drawer-left"
        className={`w-96 max-h-screen text-black absolute left-0 top-0 z-40 pl-9 pr-3 pb-11 overflow-y-auto transition-transform duration-200 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
        aria-hidden={!isOpen}
      >
        
        <div className="flex justify-between items-center pt-6">
        <PrismicNextLink
              href="/"
              className="hidden lg:flex items-center text-2xl gap-x-1 uppercase font-extrabold tracking-tight hover:text-green-400"
            >
              {prismic.isFilled.image(logo) && (
                <PrismicNextImage
                  field={logo}
                  fill={false}
                  className="w-6 h-auto"
                />
              )}
              <PrismicText field={siteTitle} />
            </PrismicNextLink>
          
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-900"
            aria-label="Close drawer"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>
        <h2 id="drawer-label" className="text-gray-900 text-lg font-semibold">
            Products
          </h2>
        <div className="py-6 flex flex-col space-y-7 text-black">
          {navigation.data && navigation.data.products ? (
            navigation.data.products.map((item: any) => (
              <div key={item.label} onClick={handleLinkClick}>
                <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
