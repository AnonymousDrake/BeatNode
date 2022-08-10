import { memo } from 'react';

const SignUpButton = ({
  label = 'SignIn',
  buttonProps,
}: {
  buttonProps?: React.HTMLProps<HTMLButtonElement>;
  label: string;
}) => {
  return (
    <div className="flex items-center justify-center bg-transparent p-[16px]">
      <button
        // @ts-ignore: to be fixed
        type="submit"
        className="px-[64px] py-[8px] bg-white-600 text-wine font-poppins font-semibold text-s leading-tight rounded-lg shadow-md bg-white hover:bg-gray-300 active:scale-[98%]"
        {...buttonProps}
      >
        {label}
      </button>
    </div>
  );
};

export default memo(SignUpButton);
