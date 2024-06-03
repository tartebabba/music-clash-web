import { GameDetails } from './types';
import { Button } from './ui/button';
import { shuffleSongs } from './utils';

export default function ConnectionsButtonBar(props) {
  const { checkGuessCorrect, selectedLength, setCurrentGameDetails } = props;

  function submitGuess() {
    checkGuessCorrect();
    console.log(selectedLength);
  }

  function clearSelected() {
    setCurrentGameDetails((prev: GameDetails) => ({
      ...prev,
      selected: [],
    }));
  }

  function shuffleCards() {
    setCurrentGameDetails((prev: GameDetails) => ({
      ...prev,
      songsForGrid: shuffleSongs(prev.songsForGrid),
    }));
  }

  return (
    <div>
      <Button className="m-2" variant="outline" onClick={shuffleCards}>
        Shuffle
      </Button>
      <Button className="m-2" variant="outline" onClick={clearSelected}>
        Deselect All
      </Button>
      <Button
        onClick={submitGuess}
        disabled={selectedLength !== 4}
        className="m-2"
      >
        Submit Guess
      </Button>
    </div>
  );
}
