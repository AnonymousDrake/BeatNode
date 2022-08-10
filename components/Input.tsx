const Input = ({
  label = 'Hello',
  inputProps,
}: {
  inputProps?: React.HTMLProps<HTMLInputElement>;
  label: string;
}) => {
  return (
    <div className="bg-transparent px-[4rem] my-[16px]">
      <label className="font-poppins bg-gradient-to-bl from-gradient1 via-gradient2 text-transparent to-gradient3 px-[4px] bg-clip-text text-[20px]">
        {label}
      </label>{' '}
      <br></br>
      <input
        className="font-poppins px-[4px] border-b-4 border-lightOrange text-white bg-transparent text-[16px] w-[100%]"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
