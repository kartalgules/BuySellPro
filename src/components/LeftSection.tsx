import { FC } from "react";
import HeadersUp from "./Headers/HeadersUp";
import HeadersDown from "./Headers/HeadersDown";

const LeftSection : FC = () => {

    return (
        <div className="flex h-4/5 w-1/2 flex-col items-center">
            <HeadersUp />
            <HeadersDown />
        </div>
    );
};

export default LeftSection;
