import { Fragment } from 'react';
import { tickerItems } from '../data/site';

const Group = ({ hidden }) => (
  <div className="ticker-group" aria-hidden={hidden || undefined}>
    {[...tickerItems, ...tickerItems].map((item, i) => (
      <Fragment key={i}>
        <span>{item}</span>
        <b aria-hidden="true">✦</b>
      </Fragment>
    ))}
  </div>
);

export default function Ticker() {
  return (
    <section className="ticker" aria-label="Focus areas">
      <div className="ticker-track">
        <Group />
        <Group hidden />
      </div>
    </section>
  );
}
