
interface CounterProps {
  totalNumberOfItems: number;
  numberOfItemsPacked: number;
}

const Counter: React.FC<CounterProps> = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <p>
      <b>{numberOfItemsPacked} </b> / {totalNumberOfItems} packed
    </p>
  );
};

export default Counter