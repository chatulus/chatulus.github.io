import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Truly Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Chatulus is truly open source, from end-to-end, client to server, Chatulus source code is available on GitHub, you can even self-host both a custom client app and/or a custom server.
      </>
    ),
  },
  {
    title: 'Focus on Customizability',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chatulus provides a user customizable messaging client. Not only you can change how the Chatulus app look like, it allows user to choose between different encyption method, manage how your data are stored in local or in the cloud. You can even connect to your own server, or any 3rd party server that you trust.
      </>
    ),
  },
  {
    title: 'Truly Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Chatulus is truly open source, from end-to-end, client to server, Chatulus source code is available on GitHub, you can even self-host both a custom client app and/or a custom server.
      </>
    ),
  },
  {
    title: 'Truly Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Chatulus is truly open source, from end-to-end, client to server, Chatulus source code is available on GitHub, you can even self-host both a custom client app and/or a custom server.
      </>
    ),
  },
  {
    title: 'Focus on Customizability',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chatulus provides a user customizable messaging client. Not only you can change how the Chatulus app look like, it allows user to choose between different encyption method, manage how your data are stored in local or in the cloud. You can even connect to your own server, or any 3rd party server that you trust.
      </>
    ),
  },
  {
    title: 'Community Store',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize Chatulus quickly by installing or sharing extensions from the Community Store. Chatulus allows everyone to quickly creates or install extensions, shortcuts, or even your customized settings with other users over the community.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
