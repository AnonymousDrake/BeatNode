import { memo, ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-1 absolute w-screen h-screen bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 justify-center">
    <div className="flex flex-1 absolute w-screen h-screen p-0 m-0">{children}</div>
    <div className="absolute bg-gradient-to-b from-vGradient1 via-vGradient2 to-vGradient3 w-screen h-screen" />
  </div>
);

export default memo(Wrapper);
