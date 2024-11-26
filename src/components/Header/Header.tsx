import Logo from "./Logo";
import Counter from "./Counter";
import { ItemsContext } from "../../lib/ItemsContext";
import { useItemsStore } from "../../stores/itemsStore";
ItemsContext

const Header = () => {
  const items = useItemsStore((state) => state.items);

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
