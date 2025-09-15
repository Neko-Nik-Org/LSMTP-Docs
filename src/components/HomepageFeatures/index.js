import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightweight and Fast',
    Svg: require('@site/static/img/undraw_outer-space.svg').default,
    flip: true,
    description: (
      <>
        LSMTPD is minimal and efficient. It uses very few resources, making it ideal for containers, VMs, and microservices.
      </>
    ),
  },
  {
    title: 'Seamless AMQP Integration',
    Svg: require('@site/static/img/undraw_letter.svg').default,
    flip: true,
    description: (
      <>
        Emails flow directly into your message broker, turning SMTP traffic into actionable events for your systems.
      </>
    ),
  },
  {
    title: 'Open Source & Transparent',
    Svg: require('@site/static/img/undraw_open-source.svg').default,
    flip: false,
    description: (
      <>
        LSMTPD is open source and transparent. You can inspect the code, contribute, and ensure it meets your needs.
      </>
    ),
  },
];

function Feature({Svg, title, description, flip}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" style={{ transform: flip ? 'scaleX(-1)' : 'none' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
