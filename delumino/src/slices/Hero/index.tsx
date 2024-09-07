"use client";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>("Green light");

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-28 text-white"
    >
      <div className="relative bg-black text-white min-h-screen flex">
        {prismic.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            fill={true}
            className="absolute inset-0 object-cover w-full h-full opacity-30"
          />
        )}

        <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-center relative z-20 lg:mt-10 bg-gray-900 lg:bg-transparent bg-opacity-50 lg:bg-opacity-0">
          <div className="max-w-lg lg:max-w-xl mt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Where Light <br /> meets Art
            </h1>
            <p className="mt-4 text-lg lg:text-xl">
              <PrismicText field={slice.primary.subtitle} />
            </p>
            <div className="mt-8 flex space-x-4">
              {slice.primary.cta_links.map((ctaLink, index) => (
                <PrismicNextLink
                  key={index}
                  field={ctaLink.link}
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 last:border last:border-white last:bg-transparent last:text-white last:hover:bg-white last:hover:text-black"
                >
                  <PrismicText field={ctaLink.label} />
                </PrismicNextLink>
              ))}
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {slice.primary.types.map((type, index) => {
                  const typeText = prismic.asText(type.label);

                  return (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded ${selectedType === typeText
                          ? "bg-green-700 text-white"
                          : "bg-gray-200 text-black"
                        }`}
                      onClick={() => handleTypeSelect(typeText)}
                    >
                      {typeText}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 max-w-lg h-auto">
                {selectedType && (
                  <div className="bg-brand-custom_gray bg-opacity-50 text-white p-4 rounded flex-col text-center">
                    <h2 className="text-2xl font-bold">{selectedType}</h2>
                    <p className="mt-2">
                      {selectedType === "Luminescent"
                        ? "Luminescent items glow with an inner light, creating captivating visuals."
                        : selectedType === "Green light"
                          ? "Green Light offers a soothing ambiance, perfect for relaxation ------."
                          : selectedType === "Red light"
                            ? "Red light adds a touch of warmth to any room, creating a cozy atmosphere."
                            : "Select an option to see more details."}
                    </p>
                    {slice.primary.types.map((type) => {
                      const typeText = prismic.asText(type.label);
                      if (typeText === selectedType) {
                        return (
                          <div key={typeText} className="mt-4 flex justify-center">
                            {prismic.isFilled.image(type.image) && (
                              <PrismicNextImage
                                field={type.image}
                                fill={false}
                                className="rounded-lg max-h-[45rem] w-auto"
                              />
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:max-w-xl mt-10">
            {prismic.isFilled.image(slice.primary.image) && (
              <PrismicNextImage
                field={slice.primary.image}
                fill={false}
                className="rounded-lg"
              />
            )}
          </div>
        </div>

        <div className="lg:hidden absolute inset-0 z-10">
          {prismic.isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              fill={false}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
