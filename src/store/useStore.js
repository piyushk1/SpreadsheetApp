import create from 'zustand';

const useStore = create((set) => ({
  cells: Array(1000).fill(''),
  updateCell: (index, value) => set(state => {
    const newCells = [...state.cells];
    newCells[index] = value;
    return { cells: newCells };
  }),
}));

export default useStore;