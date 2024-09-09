import { useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

/**
 * Props for the PhotoItem component.
 */
export interface PhotoItemProps {
  photo: prismic.ImageField; // Base photo
  photo_luminescent?: prismic.ImageField;
  image_link?: prismic.LinkField; 
  description?: prismic.RichTextField;
}

/**
 * Component for displaying a photo with a luminescent toggle.
 */
const PhotoItem = ({ photo, photo_luminescent, image_link, description }: PhotoItemProps): JSX.Element => {
  const [isLuminescent, setIsLuminescent] = useState(false); 

  const hasDescription = prismic.isFilled.richText(description);

  return (
    <div className="relative group">
      {image_link ? (
        <PrismicNextLink field={image_link}>
          <PrismicNextImage
            field={isLuminescent && photo_luminescent ? photo_luminescent : photo} // Toggle between base and luminescent images
            className={`rounded-lg object-cover ${
              hasDescription ? "h-[40rem]" : "h-[50rem]"
            } w-full md:transition-transform md:duration-300 md:group-hover:scale-105`}
          />
        </PrismicNextLink>
      ) : (
        <PrismicNextImage
          field={isLuminescent && photo_luminescent ? photo_luminescent : photo} // Toggle between base and luminescent images
          className={`rounded-lg object-cover ${
            hasDescription ? "h-[40rem]" : "h-[50rem]"
          } w-full md:transition-transform md:duration-300 md:group-hover:scale-105`}
        />
      )}

      {/* Toggle Button */}
      {photo_luminescent && (
        <button
          onClick={() => setIsLuminescent((prev) => !prev)} // Toggle the image
          className=" absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-md text-xs hover:bg-gray-300 transition"
        >
          {isLuminescent ? "Show Base" : "Show Luminescent"}
        </button>
      )}

      {hasDescription && (
        <p className="mt-2 text-sm text-white">
          {prismic.asText(description)}
        </p>
      )}
    </div>
  );
};

export default PhotoItem;