import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  const features = slice.primary.features || []; 

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-6xl mx-auto p-4 pb-20"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        <PrismicText field={slice.primary.title} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          {features[0] && ( 
            <div className="bg-brand-custom_gray text-white rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-2">
                <PrismicText field={features[0].title} />
              </h3>
              <p className="text-sm">
                <PrismicText field={features[0].description} />
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4 col-span-1">
          {features.slice(1, 3).map((card, index) => (
            card && ( 
              <div key={index} className="bg-brand-custom_gray text-white rounded-lg p-4 shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-1">
                  <PrismicText field={card.title} />
                </h3>
                <p className="text-sm">
                  <PrismicText field={card.description} />
                </p>
              </div>
            )
          ))}
        </div>

        <div className="col-span-1">
          {features[3] && ( 
            <div className="bg-brand-custom_gray text-white rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-2">
                <PrismicText field={features[3].title} />
              </h3>
              <p className="text-sm">
                <PrismicText field={features[3].description} />
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
