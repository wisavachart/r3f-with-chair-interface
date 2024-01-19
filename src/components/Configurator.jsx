import React from "react";
import { useCustomiztion } from "../context/Customization";
import { chairColors, cushionColors } from "../colors/Color";

const Configurator = () => {
  const { material, setMaterail } = useCustomiztion();
  const { leg, setLeg } = useCustomiztion();
  const { chairColor, setChairColor } = useCustomiztion();

  return (
    <div className="conficgurator">
      <div className="con_section">
        <div className="con_section_title">Chair Material</div>
        <div className="con_section_value">
          <div className="item" onClick={() => setMaterail("leather")}>
            {/* <div className="item" onClick={() => setMatt("leather")}> */}
            <div
              className={`item_label ${
                material === "leather" ? "active" : ""
              }`}>
              lether
            </div>
          </div>
          {/* <div className="item" onClick={() => setMatt("frabic")}> */}
          <div className="item" onClick={() => setMaterail("frabic")}>
            <div
              className={`item_label ${material === "frabic" ? "active" : ""}`}>
              Frabic
            </div>
            <div className="item_label"></div>
          </div>
        </div>
      </div>

      <div className="con_section">
        <div className="con_section_title">LEGS</div>
        <div className="con_section_value">
          <div className="item" onClick={() => setLeg(1)}>
            {/* <div className="item" onClick={() => setMatt("leather")}> */}
            <div className={`item_label ${leg === 1 ? "active" : ""}`}>
              Modren
            </div>
          </div>
          {/* <div className="item" onClick={() => setMatt("frabic")}> */}
          <div className="item" onClick={() => setLeg(2)}>
            <div className={`item_label ${leg === 2 ? "active" : ""}`}>
              Classic
            </div>
            <div className="item_label"></div>
          </div>
        </div>
      </div>

      <div className="con_section">
        <div className="con_section_title">CHAIR COLOR</div>
        <div className="color_container">
          {chairColors.map((color) => (
            <div
              onClick={() => setChairColor(color.name)}
              key={color.color}
              className="colorValue"
              style={{ backgroundColor: `${color.color}` }}></div>
          ))}
        </div>
        {console.log(chairColor)}
      </div>
      <div className="con_section">
        <div className="con_section_title">Cushion COLOR</div>
        <div className="color_container">
          {cushionColors.map((color) => (
            <div
              key={color.color}
              className="colorValue"
              style={{ backgroundColor: `${color.color}` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
