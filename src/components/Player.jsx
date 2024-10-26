/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Player = ({ player, choosePlayerButton, navbarCoinRemove }) => {
  const {
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
        <div className="h-56 w-full object-cover">
          <img src={image} className="h-full p-4 w-full" alt="Players" />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            <i className="fa-solid fa-user"></i> {name}
          </h2>
          <div className="flex text-sm items-center justify-between">
            <p>
              <i className="fa-solid fa-flag"></i> {country}
            </p>
            <div className="bg-gray-100 rounded-lg py-1 px-4">{role}</div>
          </div>
          <hr />
          <div className="card-actions">
            <p>Rating</p>
            <div className="font-sm flex items-center justify-between">
              <p>{batting_type}</p>
              <p>{bowling_type}</p>
            </div>
            <div className="flex text-sm items-center justify-between">
              <h4>Price: ${bidding_price}</h4>
              <button
                onClick={() => {choosePlayerButton(player);
                  navbarCoinRemove(bidding_price);
                }}
                className="btn py-1 px-2 bg-transparent hover:bg-yellow-600"
              >
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
