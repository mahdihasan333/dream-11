const SelectedPlayer = ({selected}) => {
    const {name, image, batting_type} = selected;
    return (
        <div className="border-2 rounded-lg p-4 w-full">
            <div className="flex gap-5">
            <img className="rounded-xl" src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{batting_type}</p>
            </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;