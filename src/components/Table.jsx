

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import Price from "./Price";
const Table = ({ selectedItem }) => {

    const stockData = useSelector((state) => state.stock); 
  const navigate = useNavigate();

    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 1", Item: "black coffee" },
        { id: 2, src: "https://images.unsplash.com/photo-1523942839745-7848c839b661", alt: "Coffee 2", Item: "black Tea" },
        { id: 3, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", alt: "Coffee 3", Item: "Green tea" },
        { id: 4, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 4", Item: "Coffee" },
        { id: 5, src: "https://images.unsplash.com/photo-1498804103079-a6351b050096", alt: "Coffee 5", Item: "Tea" },
        { id: 6, src: "https://images.unsplash.com/photo-1497636577773-f1231844b336", alt: "Coffee 6", Item: "chinese Tea" },
        { id: 7, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348", alt: "Coffee 7", Item: "Iced coffee black" },
        { id: 8, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 8", Item: "soya milk" },
        { id: 9, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 9", Item: "Iced coffee" },
        { id: 10, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf", alt: "Coffee 10", Item: "Iced tea" },
        { id: 11, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 11", Item: "Grass Jelly" },
        { id: 12, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 12", Item: "Coffee c" },
        { id: 13, src: "https://images.unsplash.com/photo-1523942839745-7848c839b661", alt: "Coffee 13", Item: "Tea c" },
        { id: 14, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd", alt: "Coffee 14", Item: "Black and white" },
        { id: 15, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Coffee 15", Item: "Milo" },
        { id: 16, src: "https://images.unsplash.com/photo-1497636577773-f1231844b336", alt: "Coffee 16", Item: "Iced milo" },
        { id: 17, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348", alt: "Coffee 17", Item: "Water" },
        { id: 18, src: "https://images.unsplash.com/photo-1518291344630-4857135fb581", alt: "Coffee 18", Item: "Iced Tea black" },
        { id: 19, src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571", alt: "Coffee 19", Item: "Iced coffee black" },
        { id: 20, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf", alt: "Coffee 20", Item: "Lemon tea" },
    ];



    const [Items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("stockData");
        return storedItems ? JSON.parse(storedItems) : [];
    });


    const [editId, setEditId] = useState(null);
    const [editedItem, setEditedItem] = useState({});


    const [newItem, setNewItem] = useState({ Item: "", Quantity: "", Price: "" });
    const [showModal, setShowModal] = useState(false);


    const handleEdit = (Item) => {
        setEditId(Item.id);
        setEditedItem(Item);
    };

    const handleChange = (e, field) => {
        setEditedItem({ ...editedItem, [field]: e.target.value });
    };

    const handleSave = () => {
        setItems(Items.map((Item) => (Item.id === editId ? editedItem : Item)));
        setEditId(null);
    };

    useEffect(() => {
        localStorage.setItem("stockData", JSON.stringify(Items));
    }, [Items]);

    
    const handleNewItemChange = (e, field) => {
        const value = e.target.value;

        if (field === "Item") {
            const existingItem = Items.find(item => item.Item === value);
            if (existingItem) {
                setNewItem({
                    Item: existingItem.Item,
                    Quantity: existingItem.Quantity,
                    Price: existingItem.Price.replace("$", ""),
                });
                return;
            }
        }

        setNewItem({ ...newItem, [field]: value });
    };
   
   
    const handleAddItem = () => {
        if (!newItem.Item || !newItem.Quantity || !newItem.Price) {
            alert("Please fill in all fields.");
            return;
        }
    
        const existingIndex = Items.findIndex((item) => item.Item === newItem.Item);
    
        if (existingIndex !== -1) {
            const updatedItems = [...Items];
            updatedItems[existingIndex] = {
                ...updatedItems[existingIndex],
                Quantity: parseInt(newItem.Quantity),
                Price: `$${newItem.Price}`,
            };
            setItems(updatedItems);
        } else {
            const newItemData = {
                id: Items.length + 1,
                Item: newItem.Item,
                Quantity: parseInt(newItem.Quantity),
                Price: `$${newItem.Price}`,
            };
            setItems([...Items, newItemData]);
        }
    
        setNewItem({ Item: "", Quantity: "", Price: "" });
        setShowModal(false);
    };
    

    const selectedDetails = Items.find((item) => item.id === selectedItem);

    return (
        <div className="container mt-4 mb-4 bg-body-tertiary p-4 rounded">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0" style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
                    Stock Details
                </h2>
                <button className="btn btn-success" onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon icon={faPlus} /> Add Item
                </button>
            </div>


            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center align-middle table-sm" style={{ margin: "0", fontSize: "15px" }}>
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    {editId === item.id ? (
                                        <input type="text" value={editedItem.Item} onChange={(e) => handleChange(e, "Item")} className="form-control form-control-sm" />
                                    ) : (
                                        item.Item
                                    )}
                                </td>
                                <td>
                                    {editId === item.id ? (
                                        <input type="number" value={editedItem.Quantity} onChange={(e) => handleChange(e, "Quantity")} className="form-control form-control-sm" />
                                    ) : (
                                        item.Quantity
                                    )}
                                </td>
                                <td>
                                    {editId === item.id ? (
                                        <input type="text" value={editedItem.Price} onChange={(e) => handleChange(e, "Price")} className="form-control form-control-sm" />
                                    ) : (
                                        item.Price
                                    )}
                                </td>
                                <td>
                                    {editId === item.id ? (
                                        <button className="btn btn-sm btn-success" onClick={handleSave}>
                                            <FontAwesomeIcon icon={faSave} /> Save
                                        </button>
                                    ) : (
                                        <button className="btn btn-sm btn-primary" onClick={() => handleEdit(item)}>
                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {selectedDetails && <Price details={selectedDetails} />}


            {
                showModal && (
                    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add New Item</h5>
                                    <button className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Item Name</label>
                                        <select className="form-control" value={newItem.Item} onChange={(e) => handleNewItemChange(e, "Item")}>
                                            <option value="">Select an Item</option>
                                            {images.map((obj) => (
                                                <option key={obj.id} value={obj.Item}>
                                                    {obj.Item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quantity</label>
                                        <input type="number" className="form-control" value={newItem.Quantity} onChange={(e) => handleNewItemChange(e, "Quantity")} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price ($)</label>
                                        <input type="text" className="form-control" value={newItem.Price} onChange={(e) => handleNewItemChange(e, "Price")} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                    <button className="btn btn-primary" onClick={handleAddItem}>Save Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Table;



