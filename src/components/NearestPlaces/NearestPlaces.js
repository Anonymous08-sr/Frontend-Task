import "./nearestplaces.css";

export const NearestPlaces = ({ collegenear }) => {
  return (
    <div className="nearest-places">
      {collegenear.map((place, idx) => {
        const isEven = idx % 2 === 0 ? true : false;
        return (
          <span
            className={isEven ? "college-near-place-1" : "college-near-place-2"}
          >
            {place}
            {isEven && " | "}
          </span>
        );
      })}
    </div>
  );
};
