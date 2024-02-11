import type { FC } from 'react';
import styles from './WeatherCard.module.css';
import { Button, Card } from 'shared/components';

interface Props {
  city: string;
  country: string;
}

export const WeatherCard: FC<Props> = ({city, country}) => {
  const params = [
    { title: 'Weather', description: 'Clouds' },
    { title: 'Temperature', description: '16 C' },
    { title: 'Humidity', description: '92%' },
  ];

  return (
    <Card className={styles.container}>
      <div className={styles.header}>
        <div>{city}</div>
        <div>{country}</div>
      </div>

      {params.map(({ title, description }) => (
        <div key={title} className={styles.param}>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      ))}

      <div className={styles.lastUpdate}>last update just now</div>
      <div className={styles.footer}>
        <Button>REMOVE</Button>
        <Button>RELOAD</Button>
      </div>
    </Card>
  );
};
