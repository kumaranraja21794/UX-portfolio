import React from 'react';

const defaultItems = [
  'Product Design',
  'React & Next.js',
  'Design Systems',
  'Fintech UX',
  'Prototyping',
  'Data Viz',
];

/* The track holds two identical passes and translates -50%, so the
   loop is seamless. Keep the duplication — one pass would snap. */
export const SpTicker = ({ items = defaultItems }) => (
  <div className="sp-ticker" aria-hidden="true">
    <div className="sp-ticker-track">
      {[...items, ...items].map((item, i) => (
        <span className="sp-ticker-item" key={`${item}-${i}`}>
          {item}
          <span className="sp-ticker-sep" />
        </span>
      ))}
    </div>
  </div>
);

export default SpTicker;
