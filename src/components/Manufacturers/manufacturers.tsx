import { type Manufacturer } from "@/types/Manufacturer";
import manufacturers from "../../../data/manufacturers.json";
import "./manufacturers.css";
import { NavLink } from "react-router-dom";

export default function Manufacturers() {
  return (
    <div>
      <h1 className="section-title">Distribuidores</h1>
      <div className="manufacturers-grid">
        {manufacturers.map((manufacturer: Manufacturer) => (
          <NavLink
            key={manufacturer.id}
            to={`/distribuidores/${manufacturer.id}`}
            className="manufacturer-card-link"
          >
            <div className="manufacturer-card">
              <img
                src={manufacturer.image}
                alt={manufacturer.name}
                className="manufacturer-image"
              />
              <div className="manufacturer-info">
                <b>{manufacturer.name}</b>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
