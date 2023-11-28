/* eslint-disable react/prop-types */
export default function CircleText({ string, image }) {
  return (
    <div className="CircleText__container">
      <div className="CircleText__outer">
        <h1 className="CircleText">
          {string.split("").map((char, index) => (
            <span
              key={`${char}-${index}-${image}`}
              style={{ transform: `rotate(${index * 6}deg)` }}
              className="CircleText__span"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      <img className="CircleText__img" src={image} />
    </div>
  );
}
