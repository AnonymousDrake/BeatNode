import { memo } from 'react';

const Heading = ({ label }: { label: string }) => {
  return (
    <div className="flex w-[100vw] py-[12px] align-center justify-start bg-white px-[24px]">
      <h3>{label}</h3>
    </div>
  );
};

export default memo(Heading);
