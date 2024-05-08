import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ImgMediaCardProps {
  photo: string;
  event: string;
  content: string;
  theme:string
}

export default function ImgMediaCard(props: ImgMediaCardProps) {
  return (
    <Card className="card" sx={{ minWidth: 280,margin:'1rem',border:props.theme==='light'?'1px solid rgb(0, 51, 153)':'1px solid rgb(68, 157, 68)',backgroundColor:props.theme==='light' ? '#fff':'rgb(17, 17, 17)' }}>
      <div className="d-flex flex-column align-items-center">
        <CardMedia component="img" alt="" height="140" image={props.photo} />
        <CardContent>
          <div className="d-flex justify-content-center">
            <Typography className="head" gutterBottom variant="h5" component="div" fontWeight={800} sx={{color:props.theme==='light'?'black':'rgb(68, 157, 68)'}}>
              {props.event}
            </Typography>
          </div>
          <Typography variant="body2" sx={{color:props.theme==='light'?'text.secondary':'white'}}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions style={{ position: 'absolute', bottom: '-10px' }}>
          <Button size="small" sx={{color:props.theme==='light'?'#003399':'rgb(68, 157, 68)'}}>Learn More</Button>
        </CardActions>
      </div>
    </Card>
  );
}