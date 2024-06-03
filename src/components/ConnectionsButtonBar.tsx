export default function ConnectionsButtonBar(props) {
  const { checkGuessCorrect, selectedLength } = props;

  function submitGuess() {
    checkGuessCorrect();
    console.log(selectedLength);
  }
  return (
    <>
      <button
        onClick={submitGuess}
        disabled={selectedLength !== 4}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Guess
      </button>
    </>
  );
}
