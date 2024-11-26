import Logo from './Logo';
import Counter from './Counter';

interface HeaderProps {
  totalNumberOfItems: number;
  numberOfItemsPacked: number;
}

const Header: React.FC<HeaderProps> = ({
  totalNumberOfItems,
  numberOfItemsPacked,
}) => {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
};

export default Header