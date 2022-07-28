import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="bg-darkBlue flex-1 h-screen">{children}</div>
);

export default Wrapper;
