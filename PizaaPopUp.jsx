import React from 'react';

const PizaaPopUp = ({ handlerC, pizza }) => {
    const handleClose = () => {
        handlerC(); // Call handlerC function when close action is performed
    };

    return (
        <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" style={{ height: "300px" }}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">{pizza.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
            </div>

            <div className="offcanvas-body">
                {pizza.description}
            </div>
        </div>
    );
}

export default PizaaPopUp;
