"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import PhotoItem from "@/components/PhotoItem";

/**
 * Props for `FeaturedPhotos`.
 */
export type FeaturedPhotosProps =
  SliceComponentProps<Content.FeaturedPhotosSlice>;

/**
 * Component for "FeaturedPhotos" Slices.
 */
const FeaturedPhotos = ({ slice }: FeaturedPhotosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20 mb-20"
    >
       <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          <PrismicText field={slice.primary.title} />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slice.primary.photos.map((photo, index) => {
            return (
              <div key={index} className="relative group">
                <PhotoItem photo={photo.image} photo_luminescent={photo.photo_luminescent} />
                {/* <PrismicNextImage 
                  field={photo.image} 
                  className="rounded-lg object-cover h-[40rem] w-full md:transition-transform md:duration-300 md:group-hover:scale-105" 
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
