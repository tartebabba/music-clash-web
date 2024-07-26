import ConnectionsButtonBar from './ConnectionsButtonBar';
import ConnectionsGrid from './connections-grid';
import {
  compareSubmittedWithGameSongs,
  extractNShuffleSongs,
  fetchDefaultGameData,
  shuffleSongs,
} from './utils';
import { useEffect, useState } from 'react';
import { currentGameDetails } from './types';
import GameTitleBar from './GameTitleBar';
import InfoBar from './InfoBar';
import TriesRemaining from './tries-remaining';

export default function Connections() {
  const [detailsForGame, setDetailsForGame] = useState({
    songsObject: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentGameDetails, setCurrentGameDetails] =
    useState<currentGameDetails>({
      songsForGrid: [],
      selected: [],
      triesRemaining: 4,
      correctGroups: [],
      guessedGroups: [],
      isGameOver: false,
      isGameWon: false,
    });
  const [showFeedback, setShowFeedback] = useState<{
    show: null | boolean;
    isGuessCorrect: null | boolean;
  }>({
    show: null,
    isGuessCorrect: null,
  });

  useEffect(() => {
    const loadGameData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDefaultGameData();
        console.log(data.defaultArtists);
        setDetailsForGame({ songsObject: data.defaultArtists });
      } catch (error) {
        setError('Error fetching game data');
        console.error('Error fetching game data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    loadGameData();
  }, []);

  useEffect(() => {
    if (detailsForGame.songsObject.length > 0) {
      const songs = extractNShuffleSongs(detailsForGame.songsObject);
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        songsForGrid: shuffleSongs(songs),
      }));
    }
  }, [detailsForGame.songsObject]);

  useEffect(() => {
    if (showFeedback.isGuessCorrect !== null) {
      const timer = setTimeout(() => {
        setShowFeedback({ show: null, isGuessCorrect: null });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback.isGuessCorrect]);

  useEffect(() => {
    if (
      currentGameDetails.triesRemaining === 0 &&
      currentGameDetails.correctGroups.length < 4
    ) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        isGameOver: true,
        isGameWon: false,
      }));
    }

    if (currentGameDetails.correctGroups.length === 4) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        isGameOver: true,
        isGameWon: true,
      }));
    }
  }, [currentGameDetails.triesRemaining, currentGameDetails.correctGroups]);

  function checkGuessCorrect() {
    const sortedSelected = currentGameDetails.selected.sort();
    const sortedGamedSongs = detailsForGame.songsObject.map(
      (artistSongs: { songs: string[] }) => artistSongs.songs.sort()
    );

    const isGuessCorrect = compareSubmittedWithGameSongs(
      sortedSelected,
      sortedGamedSongs
    );

    console.log(isGuessCorrect);

    if (isGuessCorrect) {
      setCurrentGameDetails((prev: currentGameDetails) => {
        const updatedSongsForGrid = prev.songsForGrid.filter(
          (song) => !sortedSelected.includes(song)
        );

        return {
          ...prev,
          correctGroups: [...prev.correctGroups, sortedSelected],
          selected: [],
          songsForGrid: updatedSongsForGrid,
          triesRemaining: prev.triesRemaining - 1,
        };
      });
      setShowFeedback({ show: true, isGuessCorrect: true });
    } else {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        selected: [],
        guessedGroups: [...prev.guessedGroups, sortedSelected], // Fixed here
        triesRemaining: prev.triesRemaining - 1,
      }));
      setShowFeedback({ show: true, isGuessCorrect: false });
    }
  }

  const gridComponents = {
    detailsForGame,
    currentGameDetails,
    setCurrentGameDetails,
  };

  const buttonBarComponents = {
    checkGuessCorrect,
    selectedLength: currentGameDetails.selected.length,
    setCurrentGameDetails,
  };

  return (
    <div>
      <GameTitleBar />
      <InfoBar />

      <div className="flex items-center justify-center">
        {showFeedback.show && currentGameDetails.triesRemaining !== 0 && (
          <div className="mt-4 flex w-24 items-center justify-center rounded-md bg-black p-1">
            <p className="text-white">
              {showFeedback.isGuessCorrect ? 'Nice!' : 'Try again!'}
            </p>
          </div>
        )}
      </div>

      {currentGameDetails.isGameOver && (
        <p>{currentGameDetails.isGameWon ? 'You won!' : 'You lost!'}</p>
      )}
      <ConnectionsGrid {...gridComponents} />
      <TriesRemaining triesRemaining={currentGameDetails.triesRemaining} />
      <ConnectionsButtonBar {...buttonBarComponents} />
    </div>
  );
};