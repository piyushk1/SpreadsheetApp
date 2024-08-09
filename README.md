# Spreadsheet Application

## Overview

This is a simple spreadsheet application built using React.js and styled with Tailwind CSS. It provides a grid of editable cells that can accept both numeric and text inputs. The application uses Zustand for state management to handle cell data and selections.

## Features

- **Editable Cells:** Each cell in the grid can be edited to accept numeric or text input.
- **Column Header:** Displays a column with numbers from 1 to 1000 for easy reference.
- **Cell Highlighting:** Cells are highlighted with a blue border when selected.
- **Grid Layout:** The grid is responsive and can handle a large number of cells efficiently.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Steps

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the Development Server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open the Application:**

    Navigate to `http://localhost:5173` in your web browser to view the application.

## Usage

- **Editing Cells:** Click on any cell to start editing. You can enter numeric or text values.
- **Selecting Cells:** Click on a cell to select it. The selected cell will be highlighted with a blue border.

## File Structure

- `components/`
  - `ColumnHeader.js` - Component for rendering the column header with numbers.
  - `Spreadsheet.js` - Main component rendering the grid of cells.
- `store/`
  - `useStore.js` - Zustand store for managing cell data and selection.
- `pages/`
  - `index.js` - Entry point of the application.

## Customization

- **Column and Row Count:** Adjust the `numColumns` and `numRows` variables in `Spreadsheet.js` to change the size of the grid.
- **Cell Size:** Modify the `width` and `height` properties in the `style` attribute of the cell input fields to change cell dimensions.

## Contributing

Feel free to submit issues, suggestions, or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Zustand](https://github.com/pmndrs/zustand) - State management library for React.
