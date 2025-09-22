import type { FC } from "react";

type Props = {
    title: string;
}
const Separate: FC<Props> = ({title}) => {
    return <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-4 border-[#34495e] relative">
        {title}
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[#2c3e50] to-[#34495e] -mb-1"></div>
    </h2>
}

export default Separate