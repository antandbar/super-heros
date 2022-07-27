import { styled } from '@mui/material';

const Btn = styled('button')(({ theme }) => ({
  background: 'linear-gradient(45deg, #ed1d24 30%, #82404c 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  [theme.breakpoints.up('xs')]: {
    height: 48,
    width: 300,
  },
  [theme.breakpoints.up('sm')]: {
    height: 48,
    width: 600,
  },
  '&:hover': {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '1px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));

export default Btn;
