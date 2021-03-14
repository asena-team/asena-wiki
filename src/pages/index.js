import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Kullanımı Kolay',
        imageUrl: 'img/1.svg',
        description: (
            <>
                Her yaşta insanın anlıyabileceği şekilde, kolay kullanıma sahip, oldukça hızlı ve optimize, her türlü
                isteğinize yanıt verebilecek özelliklere sahip bir bot ile kitlenizi sizde mutlu edebilirsiniz.
            </>
        )
    },
    {
        title: 'Hızlı ve Güvenilir',
        imageUrl: 'img/2.svg',
        description: (
            <>
                Asena yüksek güvenlikli Google Cloud, Avrupa sunucularında barınır. Bu makinelere doğrudan erişim yoktur
                ve çok sıkı güvenlik protokolleri mevcuttur. Yani çekilişleriniz Asena ile 7/24 güvende.
            </>
        )
    },
    {
        title: 'Kaliteli',
        imageUrl: 'img/3.svg',
        description: (
            <>
                "Kalite fark yaratır." sözü ile başladığımız bu yolda her zaman daha iyiyi hedeflediğimizi ve hizmet
                kalitemizden aslağa ödün vermiyeceğimizden emin olabilirsiniz.
            </>
        )
    }
]

function Feature({imageUrl, title, description}){
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home(){
    const context = useDocusaurusContext()
    const {siteConfig = {}} = context
    return (
        <Layout
            title={'Docs'}
            description={siteConfig.tagline}>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/commands')}>
                            Hızlı Başlangıç
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    )
}

export default Home;
