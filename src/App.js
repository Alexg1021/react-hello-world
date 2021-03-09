import SubHeadingComponent from './SubHeading';
import HeadingComponent from './Heading';
import CarComponent from './CarComponent';

const App = () => {
  // Initialize my variables
  let headingText = 'This is my heading from our App Component';
  let numberValue = 250;
  let car = {
    model: 'Sierra 1500',
    make: 'GMC',
    year: 2021,
    type: 'AT4',
  };
  // initialize my functions
  const addTwoNumbers = (num1, num2) => {
    return num1 - num2;
  };

  // render my JSX
  return (
    <div>
      <HeadingComponent
        h1Text={headingText}
        textToLog={'This is some text to console.log'}
        numberToPass={25}
      />
      <SubHeadingComponent numberFromApp={numberValue} />
      <CarComponent vehicle={car} />

      {/* <h3>What is the sum of 55 and 34? {addTwoNumbers(155, 349)}</h3> */}
    </div>
  );
};

export default App;
