import { useGetQuizData } from '../../hooks/getQuizData';
import { useEffect, useState } from 'react';
import ErrorPage from '../ErrorRoute/ErrorPage';
import Loading from '../../components/common/Loading';
import QuizTable from '../../components/QuizTable';
import UserTable from '../../components/UserTable';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Container } from '@mui/system';
import { Button, Stack, Divider, Typography, Grid, Paper } from '@mui/material';
//////////////////////////////////////////////////

const questionIdNumStyle = {
  bgcolor: 'primary.main',
  color: '#fff',
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  padding: '0.2rem 0.5rem',
  borderRadius: '0.2rem',
};

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function McqQuizPage() {
  // GLOBAL HOOKS:
  const [quizData, quizLoading, quizError] = useGetQuizData();

  // LOCAL HOOKS
  const [questionTrace, setQuestionTrace] = useState(0);
  const questionsStore = quizData;
  const currentQuestion = quizData[questionTrace];

  useEffect(() => {
    console.clear();
    console.log(currentQuestion);
  });

  // UI HANDLERS:
  const nextQuestionHandler = () => {
    if (questionTrace < quizData.length - 1) {
      setQuestionTrace(questionTrace + 1);
    }
  };

  if (quizLoading) {
    return <Loading />;
  }
  if (quizError !== null) {
    return <ErrorPage />;
  }

  // THE UI:
  return (
    <Container>
      <Stack direction="column" spacing={2} sx={{ flexGrow: 1, marginTop: '2rem' }}>
        {/* QUIZ / USER INFO */}
        <Grid container spacing={2}>
          <QuizTable />
          <UserTable />
        </Grid>
        {/* ------------------------------- */}
        {/* QUIZ BLOCK */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper variant="elevation">
              <Stack spacing={2}>
                {/* Question Box */}
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1} sx={{ px: 2.2, pt: 2 }}>
                  <Typography component="div" sx={questionIdNumStyle}>
                    {/* {currentQuestion?.id === questionsStore?.length ? currentQuestion?.id + ' الاخير' : currentQuestion?.id} */}
                  </Typography>
                  <Typography component="div" variant="h5">
                    {/* {currentQuestion?.questionTitle} */}
                  </Typography>
                </Stack>
                {/* ------------------------------- */}
                <Divider light />
                {/* Options Box */}

                {/* ------------------------------- */}
                <Divider light />
                {/* Buttons Box */}
                <Stack direction="row" justifyContent="flex-end" alignItems="center" gap={2} sx={{ px: 4, pb: 2 }}>
                  <Button
                    name="prevQuestion"
                    // onClick={onPrevQuestionClick}
                    // disabled={prevDisablility}
                    variant="outlined"
                    size="large"
                    type="button"
                    sx={{ color: 'primary.main', gap: 1, pr: 0 }}
                    startIcon={<ArrowForwardIosRoundedIcon />}
                  >
                    السؤال السابق
                  </Button>
                  <Button
                    name="nextQuestion"
                    // onClick={onNextQuestionClick}
                    variant="contained"
                    size="large"
                    defaultValue="السؤال التالي"
                    type="button"
                    sx={{ color: '#fff', gap: 1, pl: 0 }}
                    endIcon={<ArrowBackIosRoundedIcon />}
                  >
                    {/* {nextStepText} */}
                  </Button>
                </Stack>
                {/* ------------------------------- */}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        {/* //////////////////////////////////////////////////////////////////// */}
        {/* <div>
          {showScore ? (
            <div>
              You scored {score} out of {quizData.length}
            </div>
          ) : (
            <>
              <div>
                <div>
                  <span>Question {questionTrace + 1}</span>/{quizData.length}
                </div>
                <div>{quizData[questionTrace].questionText}</div>
              </div>
              <div>
                {quizData[questionTrace].answerOptions.map(answerOption => (
                  <button key={answerOption.answerText} onClick={() => nextQuestionHandler(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div> */}
      </Stack>
    </Container>
  );
}
