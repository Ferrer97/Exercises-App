import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ExercisesCard = ({exercise}) => {
  return (
    <Card sx={{ maxWidth: 235, display : 'inline-block',}} >
      <CardActionArea>
        <CardMedia
          component="img"
          image={exercise.gifUrl}
          alt={exercise.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exercise.bodyPart}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
