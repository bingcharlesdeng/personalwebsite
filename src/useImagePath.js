import React from 'react';

const useImagePath = (imageName) => {
  // Function to generate the image path
  const getImagePath = () => {
    if (imageName.startsWith('http') || imageName.startsWith('https')) {
      // External URL, return it directly
      return imageName;
    } else {
      // Assuming your images are in an "assets" folder within the source directory
      return require(`./assets/${imageName}`); // Adjust path based on your structure
    }
  };

  // Return the image path as a memoized value
  return React.useMemo(getImagePath, [imageName]);
};

export default useImagePath;
