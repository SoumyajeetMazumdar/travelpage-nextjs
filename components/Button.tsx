import Image from "next/image";

//props validation
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ title, type, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border  ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      <label htmlFor="" className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
