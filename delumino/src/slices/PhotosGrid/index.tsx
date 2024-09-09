"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PhotoItem from "@/components/PhotoItem";

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
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center font-bold leading-tight uppercase mb-10">
          Our Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slice.primary.photos.map((photo, index) => (
            <PhotoItem
              key={index}
              photo={photo.photo}
              photo_luminescent={photo.photo_luminescent}
              image_link={photo.image_link}
              description={photo.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosGrid;