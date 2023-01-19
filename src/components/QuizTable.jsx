import { Grid, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//////////////////////////////////////////////////

const headerRow = { color: '#595959', width: 'fit-content' };
const textRow = { color: 'primary.main', fontWeight: 'bold' };

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function QuizTable(props) {
  return (
    <Grid item xs={6}>
      <TableContainer variant="outlined" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={headerRow}>
                رقم السؤال
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                عدد الاسئلة
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                نوع السؤال
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right" sx={textRow}>
                {/* {currentQuestion?.id === allQuestions?.length ? currentQuestion?.id + ' الاخير' : currentQuestion?.id} */}
              </TableCell>
              <TableCell align="right" sx={textRow}>
                {/* {allQuestions?.length} */}
              </TableCell>
              <TableCell align="right" sx={textRow}>
                {/* {currentQuestion?.type} */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
