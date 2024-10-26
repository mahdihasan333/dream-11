/* eslint-disable react/prop-types */
const SelectedPlayer = ({ selected, handleDelete }) => {
  const { name, image, batting_type } = selected;
  return (
    <div className="border-2 my-5 bg-slate-200 rounded-lg p-4 w-full flex justify-between items-center">
      <div className="flex gap-5">
        <img className="rounded-xl w-16 h-16" src={image} alt="player" />
        <div>
          <h2>{name}</h2>
          <p>{batting_type}</p>
        </div>
      </div>

      <button onClick={() => handleDelete(selected)} className="btn text-red-500 bg-transparent border-none outline-none"><i className="fa-solid fa-trash"></i></button>
    </div>
  );
};

export default SelectedPlayer;
