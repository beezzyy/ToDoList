import React from 'react';

const ProgressBar = ({ progress }) => {
  const colors = [
    'rgb(255, 214, 161)',
    'rgb(255, 175, 163)',
    'rgb(108, 115, 148)',
    'rgb(141, 181, 145)',
    'rgb(233, 233, 157)',
    'rgb(145, 122, 123)',
    'rgb(164, 219, 226)',
    'rgb(107, 184, 207)',
    'rgb(193, 126, 145)',
    'rgb(96, 140, 117)',
    'rgb(226, 182, 128)',
    'rgb(200, 206, 217)',
    'rgb(216, 223, 188)',
    'rgb(149, 188, 189)',
    'rgb(139, 122, 137)',
    'rgb(112, 153, 153)',
    'rgb(222, 197, 151)',
    'rgb(130, 151, 186)',
    'rgb(157, 149, 119)',
  ];

  const randomcolor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div className="outer-bar">
        <div
          className="inner-bar"
          style={{ width: `${progress}%`, backgroundColor: randomcolor }}
        ></div>
      </div>{' '}
      <span className="percentage">{progress}%</span>
    </>
  );
};

export default ProgressBar;
