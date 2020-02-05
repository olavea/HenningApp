import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 330,
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function BookCard({ book, erKaninete, setKanin }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={book.ForsideBilde}
          title={book.Engelsk_navn}
        />
        <CardContent>
          <CardActions>
            <Typography gutterBottom variant="h3" component="h1">
              <Button
                href={book.Lenke_til_boka}
                variant="contained"
                className={classes.button}
                color="secondary"
                size="large"
              >
                {book.Norsk_navn}
              </Button>
            </Typography>
          </CardActions>
          <Typography gutterBottom variant="h5" component="h1">
            <Chip
              label={book.passord}
              onClick={() => setKanin(book.passord)}
              className={classes.chip}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
