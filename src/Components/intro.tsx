import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '/src/assets/css/intro.css';

interface Props{
    name:string;
    photo:string;
    post:string;
    contact:string,
    theme:string,
}
function Intro(props:Props) {
  return (
    <Card sx={{ minWidth: 300,maxWidth:300, border:props.theme==='light'?'1px solid rgb(0, 51, 153)':'1px solid rgb(68, 157, 68)',backgroundColor:props.theme==='light' ? '#fff':'rgb(17, 17, 17)'}} className='my-2'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.photo}
          alt=""
          sx={{border:'none'}}
        />
        <CardContent className='d-flex flex-column align-items-center'>
          <Typography gutterBottom variant="h5" component="div" className={(props.theme==='light'?'font-light-mode-head':'font-dark-mode-head')}>
           {props.name}
          </Typography>
          <Typography variant="body2" className={(props.theme==='light'?'font-light-mode-body':'font-dark-mode-body')}>
            {props.post}
          </Typography>
          <Typography variant="body2" className={(props.theme==='light'?'font-light-mode-body':'font-dark-mode-body')}>
            {props.contact}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Intro;
