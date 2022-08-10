import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center lg:w-[60vw]">
        <pre>
          <h1 className="text-white font-poppins text-[52px] bg-gradient-to-bl from-gradient1 via-gradient2 to-gradient3 leading-1 tracking-[4px] whitespace-pre-line font-extrabold text-transparent bg-clip-text">
            Welcome To
          </h1>
          <h1 className="text-white font-poppins text-[64px] bg-gradient-to-bl from-gradient1 via-gradient2 to-gradient3 leading-1 tracking-[6px] font-extrabold text-transparent bg-clip-text">
            BEATNODE
          </h1>
        </pre>
      </div>
      <div className="w-[2px] h-screen bg-lightOrange" />
    </>
  );
};

export default Login;
