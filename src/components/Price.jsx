import React, { useEffect, useState } from "react";

const Price = ({ selectedItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(selectedItem) && selectedItem.length > 0) {
      
      const updatedItems = selectedItem.map((newItem) => 
        {
        const storedItems = JSON.parse(localStorage.getItem("stockData")) || [];
        const matchedItem = storedItems.find((item) => item.Item === newItem.Item);
        
        
        const price = matchedItem ? parseFloat(matchedItem.Price.replace("$", "")) || 0 : 0;
        
        return { ...newItem, Price: price }; 
      });

      setItems(updatedItems);
    }
  }, [selectedItem]);

 
  const totalPrice = items.reduce((sum, item) => sum + item.Price * item.Quantity, 0);

  return (
    <div className="row" style={{ width: "100%", height: "360px  "}}>
      <div className="col-12 p-4 shadow rounded h-100">
        <div className="mb-2">
          <input
            className="form-control border border-dark fw-bold"
            value={`Total Price: $${totalPrice.toFixed(2)}`}
            readOnly
          />
        </div>

        <table className="table table-striped table-hover table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th className="fw-bold">Item</th>
              <th className="fw-bold">Quantity</th>
              <th className="fw-bold">Price</th>
              <th className="fw-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={index}>
                  <td>{item.Item}</td>
                  <td>{item.Quantity}</td>
                  <td>${item.Price.toFixed(2)}</td>
                  <td>${(item.Price * item.Quantity).toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Select an item</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Price;





