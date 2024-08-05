import { useLastFM } from 'use-last-fm';

const Lastfm = () => {
  const lastFM = useLastFM('s4nt1k', '0085b7d63e377611b7bc03a46cfa1dfe');

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>;
  }

  const handleTrackClick = () => {
    window.open(`https://www.last.fm/music/${lastFM.song.artist}/_/${lastFM.song.name}`, '_blank');
  };

  return (
    <div>
      <div className="flex items-center p-4 bg-[#657251] rounded-xl font-google text-white">
        {lastFM.song.art && (
          <img
            src={lastFM.song.art}
            className="w-24 h-auto rounded-2xl mr-4"
            alt="Album cover"
          />
        )}
        <div className="flex-1">
          <h1 className="font-bold">{lastFM.song.name}</h1>
          <p>{lastFM.song.artist}</p>
          <button
            className="mt-2 px-4 py-2 bg-[#869277] rounded-md hover:bg-[#7a8468] transition-colors"
            onClick={handleTrackClick}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lastfm;