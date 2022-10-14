import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ThemeContext from '../../context';
import { NewsType } from '../../types';

const NewsList = ({ title, score, by, time, id }: NewsType) => {
  const theme = useContext(ThemeContext);

  return (
    <a
      href={`/news/${id}`}
      className={theme.theme.mainText}
      style={{ textDecoration: 'none' }}
    >
      <Card
        className={`border border-secondary ${theme.theme.newsBackground} mx-4 my-3`}
      >
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Author: {by}</Card.Subtitle>
        </Card.Header>
        <Card.Text className="px-3 py-1">
          <div>Rating: {score}</div>
          <div>{new Date(time * 1000).toDateString()}</div>
        </Card.Text>
      </Card>
    </a>
  );
};

export default NewsList;
