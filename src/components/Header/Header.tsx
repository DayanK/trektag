import Logo from "./Logo";
import Counter from "./Counter";
import { ItemsContext } from "../../lib/ItemsContext";
import { useItemsContext } from "../../lib/hooks";
ItemsContext

const Header = () => {
 
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.filter((item) => item.packed).length}
        numberOfItemsPacked={items.length}
      />
    </header>
  );
};

export default Header;
