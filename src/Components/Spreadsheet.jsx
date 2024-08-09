import  { useState } from 'react';
import useStore from '../store/useStore';
import ColumnHeader from './ColumnHeader'; // Import the ColumnHeader component

const Spreadsheet = () => {
  const { cells, updateCell } = useStore();
  const [selectedCell, setSelectedCell] = useState(null);

  const handleChange = (index, event) => {
    
    const value = event.target.value;
    updateCell(index, value);
  };

  const handleClick = (index) => {
    setSelectedCell(index);
  };

  // Number of columns and rows
  const numColumns = 15;
  const numRows = 50;

  // Generate grid data
  const columnNumbers = [...Array(numRows)].map((_, index) => index + 1);
  const cellsArray = [...Array(numRows * numColumns)].fill('');

  return (
    <div className="flex">
      {/* Column with numbers 1 to 100 */}
      <ColumnHeader numbers={columnNumbers} />

      {/* Grid with cells */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, 100px)`, // Define number of columns
          gridTemplateRows: `repeat(${numRows}, 40px)`, // Define number of rows
        }}
      >
        {cellsArray.map((_, index) => (
          <input
            key={index}
            type="text"
            value={cells[index] || ''}
            onChange={(event) => handleChange(index, event)}
            onClick={() => handleClick(index)}
            className={`border ${
              index === selectedCell ? 'border-blue-500' : 'border-gray-300'
            }`}
            style={{
              width: '100px', // Set width to match the column header
              height: '40px', // Set height to match the column header
              padding: '0',  // Remove padding to eliminate gaps
              margin: '0',   // Remove margin to eliminate gaps
              boxSizing: 'border-box', // Include border and padding in the element's total width and height
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Spreadsheet;
