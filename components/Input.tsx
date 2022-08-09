const Input = ({ label = 'Hello', inputProps = { placeholder: 'Hello' } }) => {
  return (
    <div className="bg-white padding: 5px">
      <label className="font-poppins px-1.6 text-orange">{label}</label> <br></br>
      <input
        className="font-poppins px-2 border-b-4 border-orange text-golden"
        type="text"
        name="u"
        // placeholder="Username"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
