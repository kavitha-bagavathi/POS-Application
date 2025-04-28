import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ setShowTable }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./Table");
  };
  return (
    
          <div className="row ">
          <table className="table w-100 p-2 text-white text-center w-100 mt-1" style={{ backgroundColor: "palegreen",height:"100px" }} >
            <tbody>
            
              <tr >
                <td >
                  <button className="btn btn-warning w-100 h-100 text-white button2" >New Bill</button>
                </td>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2">$2</button>
                </td>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2" >$10</button>
                </td>
                <td >
                  <button className="btn w-100 h-100 text-white button2"  style={{ backgroundColor: "#3CB371"}}>Open Cash Box</button>
                </td>
                <td>
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}} onClick= {handleClick}>stock</button>
                </td>
                <td rowSpan="2" >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Cancel Item</button>
                </td>
                <td rowSpan="2" >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Add Item</button>
                </td>
              </tr>
    
            
              <tr >
                <td >
                  <button className="btn btn-warning w-100 h-100 text-white button2" >Price Amendment</button>
                </td>
                <td >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Terminate Transaction</button>
                </td>
                <td >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Print</button>
                </td>
              </tr>
    
              <tr>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2" >Bill</button>
                </td>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2" >$6</button>
                </td>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2" >$50</button>
                </td>
                <td rowSpan="2">
                  <button className="btn btn-warning w-100 h-100 text-white button2" >Gift Voucher</button>
                </td>
                <td >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Reserved Transaction</button>
                </td>
                <td rowSpan="2">
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Delete All Transaction</button>
                </td>
                <td rowSpan="2">
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Main Menu</button>
                </td>
              </tr>
    
            
              <tr>
                <td >
                  <button className="btn w-100 h-100 text-white button2" style={{ backgroundColor: "#3CB371"}}>Restore</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
      );
    };
    
    export default Button;
    
