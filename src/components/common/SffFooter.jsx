import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function SffFooter() {
  return (
    <Container>
      <Box
        sx={{
          borderTop: '1px solid',
          borderColor: '#0000001f',
          bgcolor: '#fff',
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '100%',
          p: 1,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="overline"
          color="GrayText"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.8 }}
        >
          <CopyrightRoundedIcon fontSize="small" />
          <span>{new Date().getFullYear()}</span>
          <span>شركة السريع التجارية للارضيات والمفروشات</span>
          <span>|</span>
          <span>جميع الحقوق محفوظة.</span>
        </Typography>
      </Box>
    </Container>
  );
}
