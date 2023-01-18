import { useState } from 'react';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function FinishPage() {
  // Other LOCAL UI Hooks:
  const [openDialog, setOpenDialog] = useState(false);

  // OTHRS LOCAL UI HANDLERS ////////////////////

  // on ensure reset quiz modal:
  const openDialoghandler = () => setOpenDialog(true);
  const closeDialoghandler = () => setOpenDialog(false);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: '3rem' }}>
        <Grid>
          <Stack spacing={3} direction="column">
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Divider />
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  bgcolor: '#fdeded',
                  gap: 3,
                  py: 2,
                  px: 4,
                  borderRadius: '0.4rem',
                }}
              >
                <Button onClick={openDialoghandler} type="button" variant="contained" color="error" size="large">
                  إعادة الاختبار
                </Button>
                <Typography color="error">تحذير : سوف يتم مسح جميع الاجابات المدخلة.</Typography>
              </Box>
            </Grid>
          </Stack>
        </Grid>
      </Box>
      <Dialog
        open={openDialog}
        onClose={closeDialoghandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle color="primary.main" id="alert-dialog-title">
          {'تأكيد إعادة الاختبار'}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="ActiveCaption">
            تحذير : سوف يتم مسح جميع الاجابات المدخلة.
            <br />
            <br />
            هل أنت متأكد من إعادة الاختبار مرة أخرى؟
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Button size="large" variant="outlined" onClick={closeDialoghandler}>
            إغلاق
          </Button>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button size="large" variant="contained" autoFocus sx={{ color: '#fff' }}>
              موافق
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
