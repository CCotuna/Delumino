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
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-lg flex items-center justify-center"
          aria-label="Toggle luminescent view"
        >
          <div className="relative flex items-center justify-center p-2 bg-gradient-to-r from-white to-green-300 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className={`bi bi-lightbulb-fill transition-transform ${isLuminescent ? "text-green-500" : "text-gray-500"}`}
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
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
