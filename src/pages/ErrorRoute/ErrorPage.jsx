import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReportIcon from '@mui/icons-material/Report';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

const Erorrcolor = red[500];

// UI FUNCTION -----------------------
export default function ErrorPage() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Card sx={{ minWidth: '50%' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography color={Erorrcolor} gutterBottom>
            <ReportIcon sx={{ fontSize: '5rem' }} />
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            خطأ <br />
            الصفحة غير موجودة
          </Typography>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="contained" size="large" sx={{ color: '#fff' }}>
                الرجوع الى الرئيسية
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
