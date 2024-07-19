import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <TextField
          label="password"
          placeholder="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Container>
  );
}
