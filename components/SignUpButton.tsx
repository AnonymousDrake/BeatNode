const SignUpButton = ({ label = 'SignIn' }) => {
  return (
    <div className="bg-white padding: 5px">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-white-600 text-wine font-poppins font-semibold text-xs leading-tight rounded-lg shadow-md "
      >
        {label}
      </button>
    </div>
  );
};

export default SignUpButton;
