import ConnectionsGrid from './connections-grid';
import { extractNShuffleSongs, shuffleSongs } from './utils';
import { useState } from 'react';

export default function Connections() {
  const [detailsForGame, setDetailsForGame] = useState({});

  const songs = extractNShuffleSongs(gridItems);
  // const onetoSixteen = Array.from({ length: 16 }, (_, i) => i + 1);
  const shuffledSongs = shuffleSongs(songs);

  const gridComponents = {
    shuffledSongs,
  };

  return (
    <div>
      <h1>Connections</h1>
      <p>Connections page content</p>
      <ConnectionsGrid {...gridComponents} />
    </div>
  );
}

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