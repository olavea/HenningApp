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
    height: 33,
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
        <CardContent>
          <CardActions>
            <Button
              href={book.Lenke_til_boka}
              variant="contained"
              className={classes.button}
              color="secondary"
              size="large"
            >
              {book.Norsk_navn}
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
