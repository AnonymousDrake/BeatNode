import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="bg-appBg h-screen w-screen">{children}</div>
);

export default Wrapper;
