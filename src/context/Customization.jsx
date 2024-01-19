import { createContext, useState } from "react";
import { useContext } from "react";
import { chairColors, cushionColors } from "../colors/Color";

const CustomizationContext = createContext({});

export const CustomizationProvider = ({ children }) => {
  const [material, setMaterail] = useState("leather");
  const [leg, setLeg] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cusColor, setCusColor] = useState(cushionColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterail,
        leg,
        setLeg,
        chairColor,
        setChairColor,
        cusColor,
        setCusColor,
      }}>
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomiztion = () => {
  const context = useContext(CustomizationContext);
  return context;
};
