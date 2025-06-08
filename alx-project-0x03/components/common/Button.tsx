
import { ButtonProps}  from "@/interface/index";

const Button = ({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-semibold py-2 px-4 rounded`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
