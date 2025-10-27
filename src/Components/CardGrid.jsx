// CardGrid.jsx
export const CardGrid = ({ items, renderItem }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
};