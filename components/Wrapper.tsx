import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-1 absolute w-screen h-screen bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 top-0 left-0 p-0 m-0 justify-center">
    <div className="flex flex-1 absolute w-screen h-screen p-0 m-0">{children}</div>
    <div className="rotate-90 bg-gradient-to-r from-vGradient1 via-vGradient2 to-vGradient3 origin-center w-[100vh] h-[100vw] left-0 right-0 bottom-0 top-0 self-center" />
  </div>
);

export default Wrapper;
