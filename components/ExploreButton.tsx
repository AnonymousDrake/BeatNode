const ExploreButton = ({ label = 'SignIn' }) => {
  return (
    <button type="button" className="bg-orange text-white text-xl font-bold py-1 px-4 rounded-full">
      {label}
    </button>
  );
};

export default ExploreButton;
