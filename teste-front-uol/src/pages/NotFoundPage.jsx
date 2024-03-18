import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

function NotFoundPage() {
  return (
    <Box
      minWidth='100%'
      minHeight='65vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Stack spacing={3} alignItems='center' width='30vw'>
        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
          <Typography variant='h1' fontWeight={900} fontSize={200} color='primary.dark' mb={2}>
            404
          </Typography>
          <Typography variant='h5' color='primary' mb={1}>
            Desculpe, página não encontrada.
          </Typography>

          <Typography variant='subtitle2' color='primary.dark'>
            Não se preocupe, você pode voltar para nossa página inicial.
          </Typography>

        </Box>
        <Button component={Link} to='/' variant='contained'>
          Voltar para início
        </Button>
      </Stack>
    </Box>
  );
}

export default NotFoundPage;
