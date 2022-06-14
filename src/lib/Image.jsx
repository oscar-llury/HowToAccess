import React from "react";

const Image = ({ src, alt, ...props }) => {
  if (src) {
    try {
      // Import image on demand
      const image = require(`img/${src}`);

      // If the image doesn't exist. return null
      if (!image) return null;
      return <img src={image.default} alt={alt} {...props} />;
    } catch (error) {
      console.log(`Image with name "${src}" does not exist`);
      return null;
    }
  } else {
    return null;
  }
};

export default Image;
