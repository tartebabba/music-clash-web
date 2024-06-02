import { extractSongs, shuffleSongs } from './utils';

export default function ConnectionsGrid() {
  const songs = extractSongs(gridItems);
  const shuffledSongs = shuffleSongs(songs);
  const gridArea = shuffledSongs;

  return (
    <>
      <h1>Connections Grid</h1>
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        {gridArea.map((item) => (
          <div
            key={item}
            className=" border bg-amber-100 m-2 p-1 flex items-center justify-center aspect-square"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// [x] Center Text in Grid
// [] Add a shuffle button
// [] Add a reset button
// [] Colour toggles for clicks on circles

const gridItems = [
  {
    artists: 'Artist 1',
    songs: [
      'Artist 1 - Song 1',
      'Artist 1 - Song 2',
      'Artist 1 - Song 3',
      'Artist 1 - Song 4',
    ],
  },
  {
    artists: 'Artist 2',
    songs: [
      'Artist 2 - Song 1',
      'Artist 2 - Song 2',
      'Artist 2 - Song 3',
      'Artist 2 - Song 4',
    ],
  },
  {
    artists: 'Artist 3',
    songs: [
      'Artist 3 - Song 1',
      'Artist 3 - Song 2',
      'Artist 3 - Song 3',
      'Artist 3 - Song 4',
    ],
  },
  {
    artists: 'Artist 4',
    songs: [
      'Artist 4 - Song 1',
      'Artist 4 - Song 2',
      'Artist 4 - Song 3',
      'Artist 4 - Song 4',
    ],
  },
];