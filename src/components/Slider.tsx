import { Slider, styled } from '@mui/material';

const StyledSlider = styled(Slider)(() => ({
  color: '#FFD05D',
  height: 8,
  '& .MuiSlider-thumb': {
    height: 26,
    width: 26,
    backgroundColor: '#1B1B1B',
    border: '6px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-track': {
    backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
    border: 0,
  },
  '& .MuiSlider-rail': {
    color: '#fff',
  },
}));

export default StyledSlider;
