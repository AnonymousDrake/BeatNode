import { Input, SignUpButton, GoogleButton } from '@components';
import { useState } from 'react';

const Footer = ({ isLogin, onClick }: { isLogin: boolean; onClick: () => void }) => (
  <>
    <p className="self-center text-translucentOrange">
      {isLogin ? 'New to BeatNode?' : 'Already have an account?'}
    </p>
    <p onClick={onClick} className="self-center text-translucentOrange active:text-veryLightOrange">
      {isLogin ? 'Signup' : 'Login'}
    </p>
  </>
);

const Header = ({ isLogin, onClick }: { isLogin: boolean; onClick: () => void }) => (
  <>
    <Input label="Name" inputProps={{ placeholder: 'Enter name', type: 'name' }} />
    <Input label="Email" inputProps={{ placeholder: 'Enter email', type: 'email' }} />
    <Input label="Password" inputProps={{ placeholder: 'Enter password', type: 'password' }} />
    <SignUpButton label={isLogin ? 'Login' : 'Signup'} buttonProps={{ type: 'submit', onClick }} />
  </>
);

const SeparatorWithText = ({ isLogin }: { isLogin: boolean }) => (
  <div className="flex flex-row py-[16px] items-center">
    <div className="px-[6px] h-[2px] w-[100%] bg-lightOrange" />
    <p className="flex w-[100%] text-translucentOrange bg-clip-text items-center justify-center p-0">
      or {isLogin ? 'login' : 'signup'} with
    </p>
    <div className="px-[6px] h-[2px] w-[100%] bg-lightOrange" />
  </div>
);

const Login = () => {
  const [isLoginInterface, setIsLoginInterface] = useState<boolean>(true);
  const onPressLogin = () => false;
  const onSwitchLoginMethod = () => {
    setIsLoginInterface(!isLoginInterface);
  };
  const onPressGoogleLogin = () => false;

  return (
    <div className="flex flex-col flex-1 h-screen w-screen lg:w-[40vw] bg-green justify-center">
      <Header onClick={onPressLogin} isLogin={isLoginInterface} />
      <SeparatorWithText isLogin={isLoginInterface} />
      <GoogleButton onClick={onPressGoogleLogin} />
      <Footer onClick={onSwitchLoginMethod} isLogin={isLoginInterface} />
    </div>
  );
};

export default Login;
