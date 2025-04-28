import React from "react";
const PriceC = ({ selectedItem}) => {
   
    const handlePrint = () => {
        let stockData = JSON.parse(localStorage.getItem("stockData")) || [];
    
        if (!selectedItem || selectedItem.length === 0) {
            alert("No items selected!");
            return;
        }
    
        selectedItem.forEach((selected) => {
            stockData = stockData.map((item) => {
                if (item.Item.toLowerCase().trim() === selected.Item.toLowerCase().trim()) {
                    const updatedQuantity = Math.max(0, (parseInt(item.Quantity, 10) || 0) - (selected.Quantity || 1));
                    return { ...item, Quantity: updatedQuantity };
                }
                return item;
            });
        });
    
        localStorage.setItem("stockData", JSON.stringify(stockData));
    
        alert("Thank you for the order!");
    };
    

    return (
        <div className="row p-1 shadow rounded bg-body-tertiary" style={{ width: "100%", height: "250px" }}>
            <div className="col-12">
                <div className="row mb-1 h-10">
                    <div className="col-md-5">
                        <label className="text-primary" style={{ fontSize: "14px" }}>Item Number</label>
                        <input type="text" className="form-control border" style={{ height: "30px", width: "200px" }} />
                    </div>
                    <div className="col-md-5">
                        <label className="text-primary fw-small" style={{ fontSize: "14px" }}>Quantity</label>
                        <input type="text" className="form-control border" style={{ height: "30px", width: "200px" }} />
                    </div>
                    <div className="col-md-2 d-flex align-items-end" style={{ fontSize: "14px" }}>
                        <button className="btn btn-primary fw-small w-75">Add</button>
                    </div>
                </div>

                <div className="row mt-1 h-80">
                    <div className="col-3 mt-1">
                        <div className="row mt-2">
                            <button className="btn btn-primary fw-small w-60">Language</button>
                        </div>
                        <div className="row mt-1">
                            <label className="fw-small" style={{ color: "violet", fontSize: "14px" }}>Table No</label>
                            <input type="text" className="form-control border" style={{ height: "30px", width: "200px" }} />
                        </div>
                        <div className="row mt-1">
                            <label className="fw-small" style={{ color: "violet", fontSize: "14px" }}>No. of cover</label>
                            <input type="text" className="form-control border" style={{ height: "30px", width: "200px" }} />
                        </div>
                    </div>

                    <div className="col-5 mt-2 ms-5 d-flex flex-column">
                        <div className="row mb-2">
                            {["7", "8", "9"].map((btn, index) => (
                                <div key={index} className="col-3">
                                    <button className="btn btn-primary w-100 fw-small">{btn}</button>
                                </div>
                            ))}
                        </div>
                        <div className="row mb-2">
                            {["4", "5", "6"].map((btn, index) => (
                                <div key={index} className="col-3">
                                    <button className="btn btn-primary w-100 fw-small">{btn}</button>
                                </div>
                            ))}
                        </div>
                        <div className="row mb-2">
                            {["1", "2", "3"].map((btn, index) => (
                                <div key={index} className="col-3">
                                    <button className="btn btn-primary w-100 fw-small">{btn}</button>
                                </div>
                            ))}
                        </div>
                        <div className="row mb-2">
                            {["0", ".", "-"].map((btn, index) => (
                                <div key={index} className="col-3">
                                    <button className="btn btn-primary w-100 fw-small">{btn}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-3 mt-3 d-flex flex-column">
                        <button className="btn btn-primary mb-3">AC</button>
                        <button className="btn btn-primary mb-3">Clear</button>
                        <button className="btn btn-primary" onClick={handlePrint}>Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceC;
