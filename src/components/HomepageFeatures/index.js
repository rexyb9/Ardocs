import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unique',
    Svg: require('@site/static/img/undraw_1.svg').default,
    description: (
      <>
        Docs yang cukup berbeda dari yang lainnya karena ardocs ini update berdasarkan pembelajaran personal.
      </>
    ),
  },
  {
    title: 'Redundant Better',
    Svg: require('@site/static/img/undraw_2.svg').default,
    description: (
      <>
        Redudansi dokumentasi dengan dukungan video youtube di channel Bocil programer untuk memperjelas panduan.
      </>
    ),
  },
  {
    title: 'Generalist',
    Svg: require('@site/static/img/undraw_3.svg').default,
    description: (
      <>
        Dokumentasi tidak terikat ke satu atau dua bahasa pemrograman saja, bahkan bisa nyebrang sampai ke networking dan lainnya.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
