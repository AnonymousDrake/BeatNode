import { memo } from 'react';

const RecordedMusic = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="flex w-[40px] h-[60px]">
      <h3>yo</h3>
    </div>
  );
};

export default memo(RecordedMusic);
