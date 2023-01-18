import { useState } from 'react';
import { Button, Divider, IconButton, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
const sfflogo = 'https://alsourayia.com/images/thumbs/0000427_logoWEBalsourayia.png';

const instructionsModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '0.4rem',
  border: 'none',
  boxShadow: 24,
};

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function NavBar(props) {
  const [openInstructionsModal, setOpenInstructionsModal] = useState(false);
  const handleOpenInstructionsModal = () => setOpenInstructionsModal(true);
  const handleCloseInstructionsModal = () => setOpenInstructionsModal(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
        <Toolbar sx={{ gap: 3 }}>
          <img src={sfflogo} alt="sfflogo" width="100rem" />
          <Typography variant="h6" color="#333" component="div" sx={{ flexGrow: 1 }}>
            {props.navTitle}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              flexGrow: 0,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
            }}
            onClick={handleOpenInstructionsModal}
          >
            <AnnouncementOutlinedIcon />
            <Typography>تعليمات</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={openInstructionsModal}
        onClose={handleCloseInstructionsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={instructionsModalStyle}>
          <AnnouncementRoundedIcon
            sx={{
              fontSize: '6rem',
              color: 'primary.main',
              position: 'absolute',
              top: -15,
              right: -20,
            }}
          />
          <Tooltip onClick={handleCloseInstructionsModal} title="Close" placement="right">
            <IconButton sx={{ position: 'absolute', left: 15, top: 22 }}>
              <CloseRoundedIcon sx={{ fontSize: '1.8rem', color: 'text.secondary' }} />
            </IconButton>
          </Tooltip>
          <Typography id="modal-modal-title" variant="h4" component="div" gutterBottom sx={{ px: '5rem', py: '1rem' }}>
            تعليمات
          </Typography>
          <Divider variant="middle" />
          <Typography id="modal-modal-description" component="div" sx={{ py: '1.5rem', px: '3rem' }}>
            <Typography variant="body1" component="div" sx={{ fontSize: '1.2rem' }}>
              - يتكون الإختبار من أربعة أجزاء رئيسية
              <br />
              <br />
              - يتم الإجابة على الاسئلة المتضمنة في كل جزء بالترتيب الآتي :
              <br />
              <Typography
                variant="body1"
                component="div"
                sx={{ paddingRight: '1.5rem', paddingTop: '.5rem', fontSize: '1.2rem' }}
              >
                1. أسئلة إختيار من متعدد.
                <br />
                2. أسئلة عملية تشمل قيود يومية.
                <br />
                3. أسئلة مقالية.
                <br />
                4. أسئلة شخصية (إختياري).
              </Typography>
              <br />
              - عقب انتهاءك من الاختبار الرجاء التوجه إلى مختص المقابلة
              <br />
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
