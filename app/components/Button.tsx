'use client';

import { IconType } from "react-icons";



interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    custom?: string;
    icon?: IconType;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick
}) => {
    return (<button disabled={disabled}
        className={`disabled:opacity-70 disabled:cursor-not-allowed
        rounded-md
        hover:opacity-80
        w-full
        border-slate-700
        transition
        flex
        items-center
        justify-center
        gap-2

        ${outline ? "bg-white" : 'bg-slate-700'}
        ${outline ? "text-slate-700" : "text-white"} 
        ${small ? "text-sm font-light" : "text-md font-semibold"} 
        ${small ? "px-2 py-1 border-[1px]" : "px-4 py-3 border-[2px]"} 
        ${custom ? custom : ""}
                `}
    >
        {Icon && <Icon size={24} />}
        {label}
    </button>);
}

export default Button;