import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sortBooks } from '../redux/actions';

export default function GroupMenu() {
  const sortOrders = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'author', label: 'Author' },
    { value: 'title', label: 'Title' },
    { value: 'readingLevel', label: 'Reading Level' },
  ];

  const dispatch = useDispatch();
  const [currentSortOrder, setCurrentSortOrder] = React.useState(sortOrders[0]);

  const handleSort = (event: SelectChangeEvent<string>) => {
    const criterion = event.target.value;
    const selectedOrder = sortOrders.find(order => order.value === criterion);
    if (selectedOrder) {
      setCurrentSortOrder(selectedOrder);
      dispatch(sortBooks(criterion));
    }
  };

  return (
    <Box sx={{ m: 1, minWidth: 120 }}>
      <FormControl size="small">
        <InputLabel id="demo-select-small-label">Sort By</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={currentSortOrder.value}
          onChange={handleSort}
          label="Sort By"
        >
          {sortOrders.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
