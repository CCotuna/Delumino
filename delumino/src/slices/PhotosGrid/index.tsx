import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `PhotosGrid`.
 */
export type PhotosGridProps = SliceComponentProps<Content.PhotosGridSlice>;

/**
 * Component for "PhotosGrid" Slices.
 */
const PhotosGrid = ({ slice }: PhotosGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20 mb-20"
    >
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slice.primary.photos.map((photo, index) => {
            const hasDescription = prismic.isFilled.richText(photo.description);

            return (
              <div key={index} className="relative group">
                <PrismicNextLink field={photo.image_link}>
                  <PrismicNextImage 
                    field={photo.photo} 
                    className={`rounded-lg object-cover ${hasDescription ? 'h-[40rem]' : 'h-[50rem]'} w-full md:transition-transform md:duration-300 md:group-hover:scale-105`} 
                  />
                </PrismicNextLink>

                {hasDescription ? (
                  <p className="mt-2 text-sm text-white">{prismic.asText(photo.description)}</p>
                ) : (
                  <p className="mt-2 text-sm text-transparent">No description</p> // Keep structure consistent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotosGrid;
