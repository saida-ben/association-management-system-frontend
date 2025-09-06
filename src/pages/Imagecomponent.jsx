


import React from 'react';

const Imagecomponent = (props) => {
  // Access the image parameter from props.match.params
  const { image } = props.match.params;

  // Use the image parameter to display the appropriate content
  return (
    <div>
      <h1>EtatCivilFileComponent</h1>
      <p>Image: {image}</p>
      {/* Add your custom logic and UI here */}
    </div>
  );
};

export default Imagecomponent;
