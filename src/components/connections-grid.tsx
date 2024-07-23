import { currentGameDetails, ConnectionsGridProps } from './types';

export default function ConnectionsGrid(props: ConnectionsGridProps) {
  const { currentGameDetails, setCurrentGameDetails } = props;

  function handleClick(item: any) {
    const selectedSong = item.target.innerText;

    if (currentGameDetails.selected.includes(selectedSong)) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        selected: prev.selected.filter((song) => song !== selectedSong),
      }));
    } else if (currentGameDetails.selected.length < 4) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        selected: [...prev.selected, selectedSong],
      }));
    }
  }

  function isSelected(song: string) {
    return currentGameDetails.selected.includes(song);
  }

  function getBackgroundColor(song: string) {
    const colours = [
      'bg-purple-500',
      'bg-red-500',
      'bg-amber-500',
      'bg-sky-500',
    ];
    let bgColour = '';

    currentGameDetails.correctGroups.some((group, index) => {
      if (group.includes(song)) {
        bgColour = colours[index];
        bgColour += ' text-white';
        return true;
      }
      return false;
    });
    return bgColour;
  }

  const stylingForGrid = (song: string) => {
    return `${isSelected(song) ? 'bg-gray-600 text-white' : 'bg-[#EFEFE6]'} ${getBackgroundColor(
      song
    )} m-1 p-1 text-black flex items-center justify-center aspect-video font-bold text-md rounded-md`;
  };

  return (
    <>
      <div className="flex justify-center items-center my-4">
        <div className="grid grid-cols-4">
          {currentGameDetails.correctGroups.flat().map((song) => {
            return (
              <div
                key={song}
                onClick={(data) => handleClick(data)}
                className={stylingForGrid(song)}
              >
                <p className='py-3'>{song}</p>
              </div>
            );
          })}
          {currentGameDetails.songsForGrid.map((song) => {
            return (
              <div
                key={song}
                onClick={(data) => handleClick(data)}
                className={stylingForGrid(song)}
              >
                <p className='py-3'>{song}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
