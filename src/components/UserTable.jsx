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
const numRow = { color: 'primary.main', letterSpacing: '0.5px', fontWeight: 'bold' };

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function UserTable(props) {
  return (
    <Grid item xs={6}>
      <TableContainer variant="outlined" component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={headerRow}>
                الاسم
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                رقم الهوية / الاقامة
              </TableCell>
              <TableCell align="right" sx={headerRow}>
                رقم الجوال
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right" sx={textRow}>
                {props.userName}
              </TableCell>
              <TableCell align="right" sx={numRow}>
                {props.userIqama}
              </TableCell>
              <TableCell align="right" sx={numRow}>
                {props.userPhone}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
