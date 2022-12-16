import { ButtonHTMLAttributes, memo } from 'react';

const SignUpButton = ({
  label = 'SignIn',
  buttonProps,
}: {
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  label: string;
}) => {
  return (
    <div className="flex items-center justify-center p-[16px]">
      <button
        // @ts-ignore: to be fixed
        type="submit"
        className="px-[64px] py-[8px] bg-white-600 text-wine font-poppins font-semibold text-s leading-tight rounded-lg shadow-md bg-blue-300 hover:bg-red-500 active:scale-[98%]"
        {...buttonProps}
      >
        {label}
      </button>
    </div>
  );
};

export default memo(SignUpButton);
