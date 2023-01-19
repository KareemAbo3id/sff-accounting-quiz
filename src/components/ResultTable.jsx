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
export default function ResultTable(props) {
  return (
    <Grid item xs={6}>
      <TableContainer variant="outlined" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={headerRow}>
                عدد الاسئلة
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                عدد الاجابات الصحيحة
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                عدد الاجابات الخاطئة
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                النتيجة
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right" sx={textRow}>
                {props.questionsLength}
              </TableCell>
              <TableCell align="right" sx={textRow}>
                {props.totTrueAns}
              </TableCell>
              <TableCell align="right" sx={textRow}>
                {props.totFalseAns}
              </TableCell>
              <TableCell align="right" sx={textRow}>
                {props.quizRes}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
