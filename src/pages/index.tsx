import Container from '@mui/material/Container';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Slider from '@/components/Slider';

export default function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
    >
      <Button variant="outlined">button</Button>
      <Input />
      <Slider defaultValue={20} />
    </Container>
  );
}
