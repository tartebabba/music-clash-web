import { GameDetails, ConnectionsGridProps } from './types';

export default function ConnectionsGrid(props: ConnectionsGridProps) {
  const { currentGameDetails, setCurrentGameDetails } = props;

  function handleClick(item: any) {
    const selectedSong = item.target.innerText;

    if (currentGameDetails.selected.includes(selectedSong)) {
      setCurrentGameDetails((prev: GameDetails) => ({
        ...prev,
        selected: prev.selected.filter((song) => song !== selectedSong),
      }));
    } else if (currentGameDetails.selected.length < 4) {
      setCurrentGameDetails((prev: GameDetails) => ({
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
      <div className="grid grid-cols-4 grid-rows-4 gap-2 ">
        {currentGameDetails.songsForGrid.map((song) => {
          return (
            <div
              key={song}
              onClick={(data) => handleClick(data)}
              className={`${
                isSelected(song) ? 'bg-gray-600 text-white' : 'bg-orange-100'
              } m-2 p-1 text-black flex items-center justify-center aspect-square font-bold text-md rounded-md`}
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
