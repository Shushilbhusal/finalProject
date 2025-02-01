// import PropTypes from "prop-types";  // Importing PropTypes from prop-types library to validate props 
import React, { ReactNode } from "react"; 

interface ModelProps {
  children: ReactNode; // Ensures children can be any valid React node
}
const Model: React.FC<ModelProps> = ({ children } ) => {
  return (
    <div className="bg-green-500 relative z-50">  
      <div className="fixed bg-black/50 inset-0"> 
        <div className="fixed inset-0 flex justify-center items-center p-4">
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Model.propTypes = {
//   children: PropTypes.any.isRequired,      // props validation
// };

export default Model;