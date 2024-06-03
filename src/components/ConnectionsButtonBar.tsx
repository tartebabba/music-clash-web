import { GameDetails } from './types';
import { Button } from './ui/button';

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
  return (
    <div>
      <Button className="m-2" variant="outline">
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
