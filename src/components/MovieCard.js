import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import Rating from '../components/Rating';


class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, rating, imagePath } = this.props.movie;
    return (
      <Card className="movie-card" data-testid="movie-card" >
        <Card.Img variant="top" src={imagePath} alt="Movie Cover" className="movie-card-image" />
        <Card.Body className="movie-card-body" style={{ height: 200 }} >
          <Card.Title data-testid="movie-card-title" className="movie-card-title">
            {title}
          </Card.Title>
          <Card.Text className="movie-card-storyline">{storyline}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col sm={9}>
              <Link to={`/movies/${id}`}>VER DETALHES</Link>
            </Col>
            <Col sm={3}>
              <Rating rating={rating} className="justify-content-end" />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape.isRequired };

export default MovieCard;
