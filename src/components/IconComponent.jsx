import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";

export const IconComponent = ({ iconName }) => {
  // Puedes utilizar un objeto de mapeo para asignar nombres de iconos a componentes de iconos específicos
  const iconMapping = {
    html: FaHtml5,
    css: FaCss3Alt,
    react: FaReact,
    js: BiLogoJavascript,
    tailwind: BiLogoTailwindCss
  };

  
  const Icon = iconMapping[iconName] || null;

  return Icon ? <div className="rounded-full bg-white shadow-md p-1 mx-4"><Icon className="m-2" size={40}/></div> : null;
};

export default IconComponent;
