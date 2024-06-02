import { extractSongs, shuffleSongs } from './utils';
import { useState } from 'react';

interface GameDetails {
  songsForGrid: string[];
  selected: string[];
}

type ConnectionsGridProps = {
  shuffledSongs: string[];
};

export default function ConnectionsGrid(props: ConnectionsGridProps) {
  const { shuffledSongs } = props;

  const [currentGameDetails, setCurrentGameDetails] = useState<GameDetails>({
    songsForGrid: shuffledSongs,
    selected: [],
  });

  console.log(currentGameDetails.selected);

  function handleClick(item) {
    const selectedSong = item.target.innerText;

    if (currentGameDetails.selected.includes(selectedSong)) {
      setCurrentGameDetails((prev) => ({
        ...prev,
        selected: prev.selected.filter((song) => song !== selectedSong),
      }));
    } else if (currentGameDetails.selected.length < 4) {
      setCurrentGameDetails((prev) => ({
        ...prev,
        selected: [...prev.selected, selectedSong],
      }));
    }
  }

  function isSelected(song: string) {
    return currentGameDetails.selected.includes(song);
  }

  return (
    <>
      <h1>Connections Grid</h1>
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        {currentGameDetails.songsForGrid.map((song) => {
          return (
            <div
              key={song}
              onClick={(x) => handleClick(x)}
              className={`border ${
                isSelected(song) ? 'bg-green-500' : 'bg-amber-100'
              } m-2 p-1 text-black flex items-center justify-center aspect-square`}
            >
              <p>{song}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}



// [x] Center Text in Grid
// [] Add a shuffle button
// [] Add a reset button
// [] Colour toggles for clicks on circles

