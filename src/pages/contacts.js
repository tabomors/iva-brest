import React from 'react';
import Layout from '../components/Layout';
import ColumnLayout from '../components/ColumnLayout';
import styles from '../components/ColumnLayout/ColumnLayout.module.css';

const Contacts = () => {
  return (
    <Layout>
      <ColumnLayout
        leftColumn={
          <aside className={styles.aside}>
            <h2>Почтовый адрес:</h2>
            <ul>
              <li>224011 г.Брест</li>
              <li>ул. Луцкая, 46</li>
              <li>Республика Беларусь</li>
            </ul>
            <iframe
              title="map"
              src="https://yandex.com/map-widget/v1/?um=constructor%3Aa7d0d85cd0c4dafa1df9bc1bf981bbcdb849de4d41f142656d826c8931dd1ba4&amp;source=constructor"
              width="403"
              height="396"
              frameBorder="0"
            ></iframe>
          </aside>
        }
        rightColumn={
          <section className={styles.section}>
            <h2>Контактные телефоны:</h2>
            <ul>
              <li>
                <span>т/ф:</span>{' '}
                <strong>
                  <a href="tel:+375162486022">+375 (162) 48-60-22</a>
                </strong>
              </li>
              <li>
                <span>Директор:</span>{' '}
                <strong>
                  <a href="tel:+375292238282">+375 (29) 223-82-82</a>
                </strong>
              </li>
              <li>
                <span>Бухгалтер:</span> {/* TODO: уточнить номер */}
                <strong>
                  <a href="tel:">+375 (162) 52-04-</a>
                </strong>
              </li>
              <li>
                <span>email:</span>{' '}
                <strong>
                  <a href="mailto:ivabrest@mail.ru">ivabrest@mail.ru</a>
                </strong>
              </li>
            </ul>
          </section>
        }
      />
    </Layout>
  );
};

export default Contacts;
