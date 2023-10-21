import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  options: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Chatulus for Mobile',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    options: (
      <>
      <Link
        className="button button--secondary button--lg"
        to="/download/android">
        Android
      </Link>
      <Link
        className="button button--secondary button--lg"
        to="/download/ios">
        iOS / iPadOS
      </Link>
      <Link
        className="button button--secondary button--lg"
        to="/download/linux">
        Linux
      </Link>
      </>
    ),
  },
  {
    title: 'Chatulus for Desktop',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    options: (
      <>
      <Link
        className="button button--secondary button--lg"
        to="/download/win">
        Windows
      </Link>
      <Link
        className="button button--secondary button--lg"
        to="/download/mac">
        macOS
      </Link>
      <Link
        className="button button--secondary button--lg"
        to="/download/linux">
        Linux
      </Link>
      </>
    ),
  },
  {
    title: 'Chatulus for Web',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    options: (
      <>
      <br />
      <p>Use Chatulus from anywhere without downloading.</p>
      <Link
        className="button button--secondary button--lg">
        Coming Soon
      </Link>
      </>
    ),
  },
];

function Feature({title, Svg, options}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <br /><br />
        <h1>{title}</h1>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.options}>{options}</div>
      </div>
    </div>
  );
}

export default function DownloadCard(): JSX.Element {
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
