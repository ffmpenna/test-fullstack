import { Box } from '@mui/material';
import uolLogo from '../assets/uolLogo.png'

function Header() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100%'
      mb={5}
      py={2}
      sx={{ backgroundColor: '#333333' }}
    >
      <Box component='img' src={uolLogo} height='50px' />
    </Box>
  );
}

export default Header;
