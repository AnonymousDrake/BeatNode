const Input = ({ label = 'Hello', inputProps = { placeholder: 'Hello' } }) => {
  console.log('CALLED');
  return (
    <div className="bg-white padding: 5px">
      <label className="font-poppins px-8 text-orange">{label}</label> <br></br>
      <input
        className="font-poppins px-8 border-2 border-sky-500"
        type="text"
        name="u"
        // placeholder="Username"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
