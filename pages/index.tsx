import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center mx-[64px] lg:w-[60vw]">
        <pre>
          <h1 className="text-white font-poppins text-[64px] leading-1 tracking-[4px] whitespace-pre-line font-extrabold opacity-30 bg-clip-text">
            Welcome To
          </h1>
          <h1 className="text-white font-poppins text-[172px] leading-1 tracking-[1px] font-extrabold bg-clip-text opacity-30 shadow-inner drop-shadow-md">
            Beatnode
          </h1>
        </pre>
      </div>
      <div className="w-[2px] h-screen bg-lightOrange" />
    </>
  );
};

export default Login;
