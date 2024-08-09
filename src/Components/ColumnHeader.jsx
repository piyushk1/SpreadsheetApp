/* eslint-disable react/prop-types */

const ColumnHeader = ({ numbers }) => {
  return (
    <div className="flex flex-col border-r border-gray-300">
      {numbers.map((number) => (
        <div
          key={number}
          className="border-b border-gray-300 p-2 text-right"
          style={{ width: '60px' }} // Set width to match the grid cells
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default ColumnHeader;
