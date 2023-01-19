import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/system';
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function Loading() {
  // THE UI:
  return (
    <Container sx={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size="60px" />
    </Container>
  );
}
