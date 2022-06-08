export const ItemsList = ({ items }: { items: string[] }) => (
  <div className="Items-List">
    {items.map((item, index) => (
      <span className="Item" key={index}>
        {item}
      </span>
    ))}
  </div>
);
