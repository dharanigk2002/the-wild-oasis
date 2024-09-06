import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkmode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkmode } = useDarkmode();

  return (
    <ButtonIcon onClick={toggleDarkmode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
