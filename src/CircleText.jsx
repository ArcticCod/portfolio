/* eslint-disable react/prop-types */
export default function CircleText({ string, image }) {
  const wordArr = string.split(" ");
  const spaces = wordArr.length;
  const strippedString = string.replaceAll(" ", "");
  const spaceSize = (60 - strippedString.length) / spaces;

  let newString = "";
  for (let word of wordArr) {
    newString += word;
    for (let i = 0; i < spaceSize; i++) {
      newString += " ";
    }
  }
  for (let i = 0; i < spaceSize; i++) {
    newString += " ";
  }

  // const rotatePercentage = 360 / string.length;

  return (
    <div className="CircleText__container">
      <div className="CircleText__outer">
        <h1 className="CircleText">
          {newString.split("").map((char, index) => (
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
