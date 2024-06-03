import { Button } from './ui/button';

export default function ConnectionsButtonBar(props) {
  const { checkGuessCorrect, selectedLength } = props;

  function submitGuess() {
    checkGuessCorrect();
    console.log(selectedLength);
  }
  return (
    <div>
      <Button className="m-2" variant="outline">
        Shuffle
      </Button>
      <Button className="m-2" variant="outline">
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
