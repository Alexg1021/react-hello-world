const SubHeadingComponent = props => {
  // initialize variables
  console.log(props);
  //   let myNumber = 100;

  // render jsx
  return <h2>My favorite number is: {props.numberFromApp}</h2>;
};

export default SubHeadingComponent;
