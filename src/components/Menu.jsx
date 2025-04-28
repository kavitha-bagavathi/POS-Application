import React from "react";
import "./menu.css";



const Menu = () => {
  return (
    <div className="row bg-info text-white text-center rounded shadow px-0 d-flex justify-content-center align-item-center" style={{ width: '100%', height:"370px" ,overflowY:'scroll'}}>
      <div className="d-flex flex-column ">
        

        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Steamed bun
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Steamed bread
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Steamed Timsum
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Deep Fry Timsum
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Bake
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Noodle
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Porridge
          </button>

        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Beverage
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Fry Timsum
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 mb-2 mt-2 menu-btn">
            Dumplings
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Menu;



