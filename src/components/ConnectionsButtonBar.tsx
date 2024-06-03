import { currentGameDetails } from './types';
import { Button } from './ui/button';
import { shuffleSongs } from './utils';

export default function ConnectionsButtonBar(props: any) {
  const { checkGuessCorrect, selectedLength, setCurrentGameDetails } = props;

  function submitGuess() {
    checkGuessCorrect();
  }

  function clearSelected() {
    setCurrentGameDetails((prev: currentGameDetails) => ({
      ...prev,
      selected: [],
    }));
  }

  function shuffleCards() {
    setCurrentGameDetails((prev: currentGameDetails) => ({
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
