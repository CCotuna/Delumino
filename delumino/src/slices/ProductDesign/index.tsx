import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";

/**
 * Props for `ProductDesign`.
 */
export type ProductDesignProps =
  SliceComponentProps<Content.ProductDesignSlice>;

/**
 * Component for "ProductDesign" Slices.
 */
const ProductDesign = ({ slice }: ProductDesignProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          <PrismicText field={slice.primary.title} />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col text-center md:text-right">
              {slice.primary.left_section.map((card, index) => (
                <div key={index} className="text-white rounded-lg p-4 shadow-lg h-full">
                                    
                  <h3 className="text-xl font-semibold mb-1">
                    <PrismicText field={card.title} />
                  </h3>
                  <p className="text-sm">
                    <PrismicText field={card.description} />
                  </p>
                </div>
              ))}
          </div>
          <div className="relative group">
              <PrismicNextImage field={slice.primary.image} className="rounded-lg object-cover h-[40rem] w-full md:transition-transform md:duration-300 md:group-hover:scale-105" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            {slice.primary.right_section.map((card, index) => (
              <div key={index} className="text-white rounded-lg p-4 shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-1">
                  <PrismicText field={card.title} />
                </h3>
                <p className="text-sm">
                  <PrismicText field={card.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesign;
