import React from "react";


function ProgressBar({Progress}) {
    return (
      <div className="area2 progressBar">
        <h4>Mira tu avance: </h4>
        <div className="progressBarMargin">
          <div className="innerProgress" style={{ width: `${Progress}%` }}>
            {Progress}
          </div>
        </div>
      </div>
    );
  }

  export default ProgressBar;