import './App.css';

const SongComponent = props => {
  console.log(props);
  return (
    <div className='text-center'>
      <h1>
        <a
          href={props.favoriteSong.youTubeLink}
          target='_blank'
          rel='noreferrer'>
          {`Title: ${props.favoriteSong.title}`}
        </a>
      </h1>
      <h3>{props.favoriteSong.artist}</h3>
      <h3>{props.favoriteSong.genre}</h3>
      <h3>{props.favoriteSong.year}</h3>
    </div>
  );
};

export default SongComponent;
