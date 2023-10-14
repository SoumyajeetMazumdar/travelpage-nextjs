import Image from "next/image";

//props validation
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ title, type, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border  ${variant}`}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      {title}
    </button>
  );
};

export default Button;
