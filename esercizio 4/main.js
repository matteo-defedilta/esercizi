// Create the MainCounter functional component
function MainCounter() {
  const [mainCount, setMainCount] = React.useState(0);
  const [totalCount, setTotalCount] = React.useState(0);
  const [childCounter, setChildCounter] = React.useState([]);

  let stateRef = React.useRef();
  stateRef.current = childCounter;

  const removeCounter = (id) => {
    const updatedCounters = stateRef.current;

    //console.log(childCounter);

    setChildCounter(
      updatedCounters.filter((el) => {
        return id != el.props.mainCount;
      })
    );
  };

  const incrementCount = () => {
    setMainCount(mainCount + 1);
    setTotalCount(totalCount + 1);
    setChildCounter([
      ...childCounter,
      React.createElement(Counter, { mainCount, totalCount, removeCounter }),
    ]);
  };

  const decrementCount = () => {
    if (mainCount > 0) {
      setMainCount(mainCount - 1);
    }

    const updatedCounters = stateRef.current;
    updatedCounters.pop();
    setChildCounter(updatedCounters);
  };

  React.useEffect(() => {
    const inputCounter = document.querySelector('.inputCounter');
    inputCounter.addEventListener('change', (value) => {
      console.log('dentro il change');
      let currentCount = value.target.value;
      if (currentCount < stateRef.current.length) {
        stateRef.current.forEach((element, index) => {
          if (index >= currentCount) {
            //decrementCount()
            document.querySelector('.decrement-count').click();
          }
        });
      } else {
        for (
          let index = stateRef.current.length;
          index < currentCount;
          index++
        ) {
          document.querySelector('.add-count').click();
          //incrementCount();
        }
      }
    });
  }, [mainCount]);

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, `Main Count: ${mainCount}`),
    React.createElement(
      'button',
      { onClick: decrementCount, className: 'decrement-count' },
      'Decrement Main Count'
    ),
    React.createElement('input', {
      type: 'text',
      // onChange: (event) => {
      //   console.log('Input Value: ' + event.target.value);
      //   handleInput(event.target.value);
      // },
      className: 'inputCounter',
    }),
    React.createElement(
      'button',
      { onClick: incrementCount, className: 'add-count' },
      'Increment Main Count'
    ),
    React.createElement(
      'div',
      { className: 'counters-container' },
      childCounter
    )
  );
}

// Render the MainCounter component
ReactDOM.render(
  React.createElement(MainCounter),
  document.getElementById('root')
);
