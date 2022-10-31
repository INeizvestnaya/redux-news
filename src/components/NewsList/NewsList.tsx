import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import ThemeContext from '@/context';
import { NewsType } from '@/interfaces';
import representDate from '@/utils/representDate';

const NewsList = ({ title, score, by, time, id }: NewsType) => {
  const theme = useContext(ThemeContext);

  return (
    <a
      href={`/news/${id}`}
      className={`${theme.theme.mainText} text-decoration-none`}
    >
      <Card
        className={`border border-secondary ${theme.theme.newsBackground} mx-4 my-3`}
      >
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Author: {by}</Card.Subtitle>
        </Card.Header>
        <Card.Text className="px-3 py-1 d-flex flex-column">
          <span>Rating: {score}</span>
          <span>{representDate(time)}</span>
        </Card.Text>
      </Card>
    </a>
  );
};

export default NewsList;
