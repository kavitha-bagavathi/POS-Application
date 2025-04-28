// import React, { useState } from "react";
// import Object from "./components/Object";
// import Price from "./components/Price";
// import Menu from "./components/Menu";
// import Button from "./components/Button";
// import PriceC from "./components/PriceC";
// import Table from "./components/Table";

// function App() {
//   const [selectedItem, setSelectedItem] = useState([]);
//   const [showTable, setShowTable] = useState(false); 

//   return (
//     <div className="container-fluid mt-2 mb-2 overflow-hidden bg-body-tertiary">
//       <div className="row">
//         {showTable ? (
//           <div className="col-12">
//             <Table  selectedItem={selectedItem} />
//             <div className="text-center mt-3">
//               <button 
//                 className="btn btn-primary "
//                 onClick={() => setShowTable(false)}
//               >
//                 Go Back
//               </button>
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="col-6 d-flex flex-column">
//               <div className="row">
//                 <div className="col-12 flex-grow-1">
//                   <Price selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <PriceC  selectedItem={selectedItem}/>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 d-flex flex-column">
//               <div className="row">
//                 <div className="col-3 pt-2 pb-2 d-flex">
//                   <Menu />
//                 </div>
//                 <div className="col-9 mt-0 mb-0">
//                   <Object setSelectedItem={setSelectedItem}/>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-12">
//                   <Button setShowTable={setShowTable} />  
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./components/Table";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;
