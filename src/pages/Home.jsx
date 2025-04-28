import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Button from "../components/Button";
import PriceC from "../components/PriceC";
import Object from "../components/Object";
import Price from "../components/Price";
import { useState } from "react";

function Home() {
  const [selectedItem, setSelectedItem] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-2 mb-2 overflow-hidden bg-body-tertiary">
      <div className="row">
        <div className="col-6 d-flex flex-column">
        <div className="row">
            <div className="col-12 flex-grow-1 ">
              <Price selectedItem={selectedItem} />
            </div>
            </div>
          <div className="row">
            <div className="col-12 ">
              <PriceC selectedItem={selectedItem} />
            </div>
          </div>
          </div>
        <div className="col-6 d-flex flex-column">
          <div className="row">
            <div className="col-3 pt-2 pb-2 d-flex">
              <Menu />
            </div>
            <div className="col-9 mt-0 mb-0">
              <Object setSelectedItem={setSelectedItem} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Button onClick={() => navigate("/table")} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
