import React from "react";

const Result = (props) => {
  const mostMatched = props.data[0];
  const allLabels = props.data.map((elem) => elem.label);
  const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
  return (
    <>
      <ul className="princes">
        {sortedLabels.map((label) => (
          <li key={label}>
            <span style={{color:'white'}}>
              <img
                className={`img ${
                  label === mostMatched.label ? "selected" : null
                }`}
                src={
                  label === "No Dolls"
                    ? "./images/No.png"
                    : `./images/${label}.png`
                }
                alt={label}
              />
              <p className="name" style={{color:'white'}} >{label}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Result;
