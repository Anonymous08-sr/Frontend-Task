import "./rating.css";

export const Rating = ({ rating }) => {
  return (
    <span className="college-rating">
      <span className="material-icons-outlined checked">star</span>
      <span className="material-icons-outlined checked">star</span>
      <span className="material-icons-outlined checked">star</span>
      <span className="material-icons-outlined checked">star</span>
      <span className="material-icons-outlined unchecked">star</span>
    </span>
  );
};
