import { styled, TextField } from '@mui/material';

const StyledInput = styled(TextField)(({ theme }) => ({
  '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderWidth: '3px',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
    borderWidth: '3px',
  },
}));

export default StyledInput;
