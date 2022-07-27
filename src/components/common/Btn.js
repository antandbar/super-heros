import { styled } from '@mui/material';

const Btn = styled('button')( ({props}) => ({
  background: 'linear-gradient(45deg, #ed1d24 30%, #82404c 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  width: 200,
  padding: '0 30px',
  margin: '10px',
  '&:hover': {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));

export default Btn;
