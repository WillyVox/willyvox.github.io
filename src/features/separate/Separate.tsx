import type { FC } from 'react';

type Props = {
  title: string;
};
const Separate: FC<Props> = ({ title }) => {
  return (
    <h2 className="relative mb-6 border-b-4 border-[#34495e] pb-2 text-2xl font-semibold text-gray-800 lg:text-3xl">
      {title}
      <div className="absolute bottom-0 left-0 -mb-1 h-1 w-12 bg-gradient-to-r from-[#2c3e50] to-[#34495e]"></div>
    </h2>
  );
};

export default Separate;
