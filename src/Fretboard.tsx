import { StringNames } from './GuitarTypes';

export function SingleFret({
  contents,
  str,
  withHeader,
}: {
  contents: string;
  str: StringNames;
  withHeader?: string;
}): JSX.Element {
  const spaceHeight = 15 - str;
  const header = withHeader ? withHeader : '';
  const center =
    contents.length > 0 ? (
      <div
        style={{
          gridColumn: 2,
          gridRowStart: 2,
          gridRowEnd: 4,
        }}
      >
        {contents}
      </div>
    ) : (
      <div
        style={{
          gridColumn: 2,
          gridRow: 3,
          height: 2 * str,
          backgroundColor: 'white',
        }}
      />
    );
  return (
    <span
      style={{
        borderLeft: '1px solid white',
        borderRight: '1px solid white',
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto auto',
        gridTemplateRows: 'auto auto auto auto',
        width: '140px',
      }}
    >
      <div
        style={{
          gridRow: 1,
          gridColumnStart: 1,
          gridColumnEnd: 4,
        }}
      >
        {header}
      </div>
      <div
        style={{
          height: spaceHeight,
          gridRow: 2,
          gridColumn: 1,
        }}
      />
      <div
        style={{
          gridRow: 3,
          gridColumn: 1,
          height: 2 * str,
          backgroundColor: 'white',
        }}
      />
      {center}
      <div
        style={{
          gridRow: 3,
          gridColumn: 3,
          height: 2 * str,
          backgroundColor: 'white',
        }}
      />
      <div
        style={{
          height: spaceHeight,
          gridRow: 4,
          gridColumnStart: 1,
          gridColumnEnd: 4,
        }}
      />
    </span>
  );
}
export function GuitarString({
  hdr,
  str,
  vals,
  hdrs,
}: {
  hdr?: string;
  str: StringNames;
  vals: string[];
  hdrs?: string[];
}): JSX.Element {
  const frets = hdrs
    ? vals.map((v, i) => (
        <SingleFret key={i} contents={v} str={str} withHeader={hdrs[i]} />
      ))
    : vals.map((v, i) => <SingleFret key={i} contents={v} str={str} />);
  return (
    <span
      style={{
        display: 'inline-grid',
        gridTemplateColumns:
          '50px auto auto auto auto auto auto auto auto auto auto auto auto',
      }}
    >
      <span>{hdr ? hdr : ''}</span>
      {frets}
    </span>
  );
}
