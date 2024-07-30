import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme, variant }) => ({
  boxShadow: 'none',
  border: '1px solid',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    ...(variant === 'contained' && {
      backgroundColor: theme.palette.background.default,
      borderColor: '#fff',
      boxShadow: 'none',
      color: '#fff',
    }),
    ...(variant === 'outlined' && {
      backgroundColor: '#fff',
      borderColor: '#fff',
      boxShadow: 'none',
      color: theme.palette.background.default,
    }),
  },
}));

export default StyledButton;
