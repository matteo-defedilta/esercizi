function Counter({ mainCount, totalCount, removeCounter }) {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const removeButton = () => {
    removeCounter(mainCount);
  };

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, `Counter n°: ${totalCount}`),
    React.createElement('button', { onClick: incrementCount }, '+'),
    React.createElement('span', '', `${count}`),
    React.createElement('button', { onClick: decrementCount }, '-'),
    React.createElement('br'),
    React.createElement('button', { onClick: removeButton }, 'remove Counter')
  );
}
