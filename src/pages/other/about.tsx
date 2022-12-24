import Layout from '../../components/Main';

export default function Home() {
  return (
    <Layout>
      <div className='mainx justify-start'>
        <p>
          ezikTok e сайт за безплатни обяви в категории: Недвижими имоти,
          Автомобили и авточасти, Eлектроника, Мода, За бебето и детето, Дом и
          градина, Свободно време, Домашни любимци, Услуги, Работа, Екскурзии и
          почивки. В езикТок можете да намерите интересни обяви за продажба на
          почти всичко, което търсите. Свържете се лесно и бързо с продавача и
          намерете атрактивни предложения на по-ниски цени отколкото в магазина.
          Ако искате да продадете нещо, добавете бързо, лесно и безплатно обява
          в езикТок. Купувайте и продавайте с езикТок!
        </p>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
