import React from 'react';

const Catalog = () => {
    return (
            <div className="category grid grid-cols-4 grid-rows-6 gap-4">
                <div className="row-span-3">1</div>
                <div className="row-span-3 col-start-1 row-start-4">2</div>
                <div className="row-span-6 col-start-2 row-start-1">3</div>
                <div className="row-span-3 col-start-3 row-start-1">4</div>
                <div className="row-span-3 col-start-4 row-start-1">5</div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-4">6</div>
            </div>
    );
};

export default Catalog;