// import SubHeadingComponent from './SubHeading';
import HeadingComponent from './Heading';
// import CarComponent from './CarComponent';
import SongComponent from './Song';

// Create an object for your favorite song. Properties should include
// {artist, title, genre, year, youTubeLink}// Create a component called SongComponent
// Pass your song object into your SongComponent
// Render the song details inside of your component
// Make the song name clickable, so when a user clicks on
// the name of the song it redirects to the song link on YouTube

const App = () => {
  // Initialize my variables
  let headingText = 'This is my heading from our App Component';
  // let numberValue = 250;
  // let car = {
  //   model: 'Sierra 1500',
  //   make: 'GMC',
  //   year: 2021,
  //   type: 'AT4',
  // };

  let song = {
    title: 'Gangstas Paradise',
    artist: 'Coolio',
    genre: 'Rap',
    year: 1996,
    youTubeLink:
      'https://www.youtube.com/watch?v=fPO76Jlnz6c&ab_channel=TommyBoy',
  };
  // initialize my functions
  // const addTwoNumbers = (num1, num2) => {
  //   return num1 - num2;
  // };

  // render my JSX
  return (
    <div>
      <HeadingComponent
        h1Text={headingText}
        textToLog={'This is some text to console.log'}
        numberToPass={25}
      />
      {/* <SubHeadingComponent numberFromApp={numberValue} /> */}
      {/* <CarComponent vehicle={car} /> */}
      <SongComponent favoriteSong={song} />

      {/* <h3>What is the sum of 55 and 34? {addTwoNumbers(155, 349)}</h3> */}
    </div>
  );
};

export default App;
