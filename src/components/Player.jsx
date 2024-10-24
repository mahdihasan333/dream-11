// eslint-disable-next-line no-unused-vars
const Player = ({ player }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    batting_type,
    bowling_type,
    bidding_price,
  } = player;
  return (
    <div className="mb-10">
      <div className="card border-2">
        <figure>
          <img src={image} className="h-56 p-4 w-full object-cover" alt="Players" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <i className="fa-solid fa-user"></i> {name}
          </h2>
          <div className="flex items-center justify-between">
            <p>
              <i className="fa-solid fa-flag"></i> {country}
            </p>
            <button className="bg-gray-100 rounded-lg py-1 px-4">{role}</button>
          </div>
          <hr />
          <div className="card-actions">
            <p>Rating</p>
            <div className="font-sm flex items-center gap-8">
              <p>{batting_type}</p>
              <p>{bowling_type}</p>
            </div>
            <div className="flex items-center gap-14 justify-between">
              <h4>Price: ${bidding_price}</h4>
              <button className="btn py-1 px-2 bg-transparent hover:bg-yellow-600">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
