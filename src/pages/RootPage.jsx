import { useRef, useState } from 'react';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material';
//////////////////////////////////////////////////

const InputCaption = props => {
  return (
    <Typography
      variant="caption"
      component="span"
      sx={{ position: 'absolute', top: '4rem', right: '0.5rem', color: 'text.secondary' }}
    >
      {props.cap}
    </Typography>
  );
};

const inputContainerStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.5rem',
};

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function RootPage() {
  const [iqamaLength, setIqamaLength] = useState(10);
  const [phoneLength, setPhoneLength] = useState(10);

  const userIqamaRef = useRef(null);
  const userPhoneRef = useRef(null);
  const userNameRef = useRef(null);

  const iqamaLengthHandler = e => setIqamaLength(-e.target.value.toString().length + 10);
  const phoneLengthHandler = e => setPhoneLength(-e.target.value.toString().length + 10);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: '3rem' }}>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Card variant="elevation">
              <CardContent sx={{ padding: '1.5rem' }}>
                {/* User Form Title */}
                <Typography variant="h6" sx={{ marginBottom: '2rem' }}>
                  أدخل بياناتك لمباشرة الاختبار.
                </Typography>
                {/* /////////////////////////////////////////// */}
                {/* User Form */}
                <Box component="form" autoComplete="off" dir="rtl">
                  <Stack spacing={4}>
                    {/* User Name Input */}
                    <div style={inputContainerStyle}>
                      <InputLabel required sx={{ flexGrow: 1 }} dir="rtl">
                        الاسم:
                      </InputLabel>
                      <TextField
                        ref={userNameRef}
                        fullWidth
                        autoFocus
                        type="text"
                        dir="rtl"
                        variant="outlined"
                        placeholder="أدخل اسمك بالكامل"
                        required
                        sx={{ flexGrow: 1 }}
                      />
                    </div>
                    {/* /////////////////////////////////////////// */}
                    {/* User Iqama Input */}
                    <div style={inputContainerStyle}>
                      <InputLabel htmlFor="iqama" required sx={{ flexGrow: 1 }} dir="rtl">
                        رقم الهوية / الاقامة:
                      </InputLabel>
                      <InputCaption cap={iqamaLength} />
                      <TextField
                        ref={userIqamaRef}
                        onChange={iqamaLengthHandler}
                        inputProps={{
                          maxLength: 10,
                          minLength: 10,
                        }}
                        id="iqama"
                        fullWidth
                        type="text"
                        dir="auto"
                        variant="outlined"
                        required
                        placeholder="XXXXXXXXXX"
                        sx={{ flexGrow: 1 }}
                      />
                    </div>
                    {/* /////////////////////////////////////////// */}
                    {/* User Phone Input */}
                    <div style={inputContainerStyle}>
                      <InputCaption cap={phoneLength} />
                      <InputLabel htmlFor="phone" required sx={{ flexGrow: 1 }} dir="rtl">
                        رقم الجوال:
                      </InputLabel>
                      <TextField
                        ref={userPhoneRef}
                        onChange={phoneLengthHandler}
                        inputProps={{
                          maxLength: 10,
                          minLength: 10,
                        }}
                        id="phone"
                        fullWidth
                        type="text"
                        dir="auto"
                        variant="outlined"
                        required
                        placeholder="05XXXXXXXX"
                        sx={{ flexGrow: 1 }}
                      />
                    </div>
                    {/* /////////////////////////////////////////// */}
                    {/* User Input Button */}
                    <Link to="/quiz" style={{ textDecoration: 'none' }}>
                      <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{ color: '#fff', fontSize: '1.2rem' }}
                      >
                        ابدأ الاختبار
                      </Button>
                    </Link>
                    {/* /////////////////////////////////////////// */}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
