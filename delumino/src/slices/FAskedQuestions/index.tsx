import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicLink } from '@prismicio/react';
import { PrismicText } from "@prismicio/react";

/**
 * Props for `FAskedQuestions`.
 */
export type FAskedQuestionsProps =
  SliceComponentProps<Content.FAskedQuestionsSlice>;

/**
 * Component for "FAskedQuestions" Slices.
 */
const FAskedQuestions = ({ slice }: FAskedQuestionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full px-6 pt-10 pb-8 mb-10 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10"
    >
       <div className="relative mx-auto px-5">
          <div className="absolute top-5 right-5 hidden sm:block">
            <PrismicLink
              field={slice.primary.contact_link}
              className="py-3 px-5 bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown inline-block rounded-md"
            >
              <PrismicText field={slice.primary.contact_label} />
            </PrismicLink>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              <PrismicText field={slice.primary.title} />
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl text-center">
              <PrismicText field={slice.primary.description} />
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {slice.primary.items.map((item, i) => (
              <div key={i} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      <PrismicText field={item.q_title} />
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    <PrismicText field={item.q_answer} />
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default FAskedQuestions;
