import React from 'react';
import Layout from '../../components/Layout';
import ColumnLayout from '../../components/ColumnLayout';

const ContactsPage = () => {
  const dataPhons = [
    'т/ф: +375 (162) 48-60-22',
    'Директор: +375 (29) 223-82-82',
    'Бухгалтер: +375 (162) 52-04-',
    'E-mail: ivabrest@mail.ru',
  ];

  const dataAdres = ['224011', 'г.Брест ул. Луцкая, 46', 'Республика Беларусь'];

  const funcMap = (arr) => arr.map((i, item) => <h1 key={item}>{i}</h1>);

  const dataPhonsHtml = funcMap(dataPhons);
  const dataAdresHtml = funcMap(dataAdres);

  const adresData = (
    <div>
      <h1>Почтовый адрес</h1>
      {dataAdresHtml}
    </div>
  );

  const phoneData = (
    <div>
      <h1>Контактые телефоны</h1>
      {dataPhonsHtml}
    </div>
  );

  return (
    <Layout>
      <ColumnLayout leftColumn={adresData} rightColumn={phoneData} />
    </Layout>
  );
};

export default ContactsPage;
