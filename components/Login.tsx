import { Input, SignUpButton, GoogleButton } from '@components';
import { useIsLoggedIn } from '@hooks';
import { ChangeEvent, useEffect, useState } from 'react';

const Footer = ({ isLogin, onClick }: { isLogin: boolean; onClick: () => void }) => (
  <>
    <p className="self-center text-translucentOrange">
      {isLogin ? 'New to Voiclone?' : 'Already have an account?'}
    </p>
    <p
      onClick={onClick}
      className="self-center text-translucentOrange hover:cursor-pointer active:text-veryLightOrange"
    >
      {isLogin ? 'Signup' : 'Login'}
    </p>
  </>
);

const Header = ({
  isLogin,
  onClick,
}: {
  isLogin: boolean;
  onClick: (name: string, email: string, password: string) => void;
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    setName('');
  }, [isLogin]);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e?.target?.value || '');
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value || '');
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e?.target?.value || '');
  };

  return (
    <>
      {!isLogin ? (
        <Input
          label="Name"
          inputProps={{
            placeholder: 'Enter name',
            value: name,
            type: 'name',
            onChange: onNameChange,
          }}
        />
      ) : null}
      <Input
        label="Email"
        inputProps={{
          placeholder: 'Enter email',
          type: 'email',
          value: email,
          onChange: onEmailChange,
        }}
      />
      <Input
        label="Password"
        inputProps={{
          placeholder: 'Enter password',
          type: 'password',
          value: password,
          onChange: onPasswordChange,
        }}
      />
      <SignUpButton
        label={isLogin ? 'Login' : 'Signup'}
        buttonProps={{ type: 'submit', onClick: () => onClick(name, email, password) }}
      />
    </>
  );
};

const Error = ({ label }: { label: string }) => (
  <p className="flex w-[100%] text-white bg-clip-text items-center justify-center p-0">{label}</p>
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
  const [isLoginInterface, setIsLoginInterface] = useState<boolean>(false);
  const [error, setError] = useState('');
  const { setLoginToken } = useIsLoggedIn();

  const onPressLogin = (name: string, email: string, password: string) => {
    setError('');
    if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      return setError('Please enter a valid email!');
    }
    if (password.length < 8) {
      return setError('Please enter a stronger password!');
    }
    if (!isLoginInterface && name.length < 2) {
      return setError('Please enter a valid name!');
    }
    // TODO: perform login
    setLoginToken('asdabsda-ssdf-sdfsd');
  };

  const onSwitchLoginMethod = () => {
    setIsLoginInterface(!isLoginInterface);
  };

  const onPressGoogleLogin = () => {
    // no-op
  };

  return (
    <div className="flex flex-col flex-1 justify-center">
      <Header onClick={onPressLogin} isLogin={isLoginInterface} />
      {error.length > 0 ? <Error label={error} /> : null}
      <SeparatorWithText isLogin={isLoginInterface} />
      <GoogleButton onClick={onPressGoogleLogin} />
      <Footer onClick={onSwitchLoginMethod} isLogin={isLoginInterface} />
    </div>
  );
};

export default Login;
