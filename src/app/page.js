'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { Player } from '@lottiefiles/react-lottie-player';

import styles from './styles.module.scss';

const UIData = {
    navItems: [
        {
            id: 1,
            title: 'Capture objects and elements',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/capture-objects-and-elements_.json',
            time: 13000,
        },
        {
            id: 2,
            title: 'Design automation scripts',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/design-automation-scripts_.json',
            time: 11000,
        },
        {
            id: 3,
            title: 'Set up for execution',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/set-up-for-execution-10s.json',
            time: 11000,
        },
        {
            id: 4,
            title: 'Choose environments & run tests',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/choose-environments-run-tests-30s.json',
            time: 31000,
        },
        {
            id: 5,
            title: 'Know why tests fail',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/know-why-tests-fail-8s.json',
            time: 9000,
        },
        {
            id: 6,
            title: 'Debug and troubleshoot',
            gif: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/navs/debug-and-troubleshoot-22s.json',
            time: 23000,
        },
    ],
    slides: [
        {
            id: 1,
            title: (
                <h3>
                    {' '}
                    We’re {` `} <span>free</span>
                    {` `} now and forever.
                </h3>
            ),
            desc: 'Katalon offers a freemium plan: you can still automate tests using the free version or pay for more advanced capabilities after a 30-day trial.',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/slides/were-free-now-and-forever.svg',
            class: 'slide-item-first',
        },
        {
            id: 2,
            title: (
                <h3>
                    Built on {` `}
                    <span>industry-recognized</span>
                    {` `} test methodologies
                </h3>
            ),
            desc: 'Write tests the ways we love most without the framework building.',
            desc_sub:
                'Whether it’s writing tests faster or updating locators in clicks, you can have it all in Katalon.',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/slides/built-on-industry-recognized.svg',
            class: 'slide-item-second',
        },
        {
            id: 3,
            title: (
                <h3>
                    <span>To code or not to code:</span>
                    {` `} your call.
                </h3>
            ),
            desc: 'There’s no pressure to master coding for automation overnight.',
            desc_sub:
                'Record and playback tests to cover simple scenarios. Switch to scripting in Java and Groovy to design custom keywords or get test scripts up-to-date on the latest code changes.',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/slides/to-code-or-not-to-code_your-call.svg',
            class: 'slide-item-third',
        },
    ],

    webItems: [
        {
            id: 1,
            title: 'Smart object spy',
            desc: 'Locate, capture and store object locators by XPath, Attributes or CSS',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/smart-object-spy.svg',
            class: 'item-first',
            link: '',
        },
        {
            id: 2,
            title: 'On-prem or cloud',
            desc: 'Automate tests within your local machine or on our SaaS offering',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/on-prem-or-cloud-final.svg',
            class: 'item-second',
            link: '',
        },
        {
            id: 3,
            title: 'Best for regression testing',
            desc: 'Assign tags and IDs to automated tests. Filter and select test cases to run on-demand',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/regression-testing.svg',
            class: 'item-third',
            link: '',
        },
        {
            id: 4,
            title: 'Run on CI and containers',
            desc: 'Schedule and auto-trigger Katalon test to run on your pipelines and containers',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/run-on-CI-and-containers.svg',
            class: 'item-fourth',
            link: '',
        },
        {
            id: 5,
            title: 'Web API testing',
            desc: 'Test GraphQL, SOAP and REST requests. Import API objects from Postman, Swagger, SoapUI and WADL/WSDL',
            icon: 'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/web-API-testing.svg',
            class: 'item-fifth',
            link: '',
        },
    ],
};

const TestProjectPage = () => {
    const headerSectionRef = useRef(null);
    const formSectionRef = useRef(null);

    const [tab, setTab] = useState(UIData.navItems[0].id);
    const [tabRefs, setTabRefs] = useState([]);

    // find time for each gif
    const findTimeGif = (id) => {
        const time = UIData.navItems.find((item) => item.id === id).time;
        return time;
    };

    // animation active tab (loop: true)
    useEffect(() => {
        let activeTab = setInterval(() => {
            setTab((tab) => {
                if (tab === UIData.navItems.length) {
                    return 1;
                }
                return tab + 1;
            });
        }, findTimeGif(tab));

        return () => {
            clearInterval(activeTab);
        };
    }, [tab]);

    // get refs current for each tab ([tabRefs]])
    useEffect(() => {
        setTabRefs((prevRefs) => {
            const newRefs = Array(UIData.navItems.length)
                .fill()
                .map((_, i) => prevRefs[i] || React.createRef());

            return newRefs;
        });
    }, [UIData.navItems.length]);

    // animation progress bar (circle)
    useEffect(() => {
        let progressStartValue = 0;
        let progressEndValue = 100;
        let speed = findTimeGif(tab) / 100;
        // Ex 3s: 3000/100

        let progress = setInterval(function () {
            progressStartValue++;

            let test = tabRefs[tab - 1]?.current;
            if (test) {
                test.style.background = `conic-gradient(#ffffff ${
                    360 - 3.6 * progressStartValue
                }deg, rgb(101,101,101) 0deg)`;
            }

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);

        return () => {
            clearInterval(progress);
        };
    }, [tab, tabRefs]);

    return (
        <>
            {/* <Head>
                <link
                    href='https://unpkg.com/aos@2.3.1/dist/aos.css'
                    rel='stylesheet'></link>
                <script
                    src='https://unpkg.com/aos@2.3.1/dist/aos.js'
                    async></script>
                <script
                    src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
                    async></script>
            </Head> */}

            <main className={styles.wrapperTestProject}>
                <section id='free-trial'>
                    <section className='test-project-container free-trial-container'>
                        <h1 className='free-trial-title'>
                            TestProject end-of-life? <br />
                            <span className='headline-filter'>
                                Not the end of the word.
                            </span>
                        </h1>

                        <section className='free-trial-desc'>
                            <p>
                                You loved TestProject, but the show must go on.{' '}
                                <br />
                                Design, run, debug and maintain test suites like
                                you’ve been doing. <br /> Katalon just makes{' '}
                                <strong>UI and API automation</strong> a whole
                                lot easier.
                                <span className='free-trial-desc-icon'>
                                    <img
                                        src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/headline/exclam-icon.svg'
                                        alt=''
                                    />
                                </span>
                            </p>
                        </section>

                        <button
                            className='free-trial-btn'
                            onClick={() => {
                                formSectionRef?.current?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}>
                            Start testing
                        </button>
                    </section>
                </section>

                <section id='go-to-solution'>
                    <section className='test-project-container go-to-solution-container'>
                        <h2 className='go-to-solution-title'>
                            The{' '}
                            <span
                                className='headline-motion'
                                ref={headerSectionRef}>
                                same{' '}
                                <i>
                                    <Player
                                        src={
                                            'https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/headline/motion-headline.json'
                                        }
                                        autoplay
                                        loop
                                    />
                                </i>
                            </span>{' '}
                            way to automate. <br />{' '}
                            <span>Now with fewer steps.</span>
                        </h2>

                        <section className='lib-section'>
                            <section className='navs'>
                                {UIData.navItems.map((nav) => {
                                    return (
                                        <section
                                            key={nav.id}
                                            className={
                                                nav.id === tab
                                                    ? 'navs-item active'
                                                    : 'navs-item'
                                            }
                                            onClick={() => setTab(nav.id)}>
                                            <h3 className='navs-item-title'>
                                                {nav.title}
                                            </h3>
                                            <div className='navs-item-duration'>
                                                <div className='process-container'>
                                                    <div
                                                        ref={
                                                            tabRefs[nav.id - 1]
                                                        }
                                                        className='process'></div>
                                                </div>
                                            </div>
                                        </section>
                                    );
                                })}
                            </section>
                            <section className='gif-player'>
                                <Player
                                    key={tab}
                                    src={
                                        UIData?.navItems.find(
                                            (gif) => gif.id === tab
                                        ).gif
                                    }
                                    autoplay
                                />
                            </section>
                        </section>

                        <section className='on-demand-section'>
                            <h2 className='on-demand-section-title'>
                                Making your switch worth it
                            </h2>

                            <section className='on-demand-section-slides'>
                                {UIData.slides.map((slide) => {
                                    return (
                                        <section
                                            key={slide.id}
                                            className={`slide-item ${slide.class}`}>
                                            <section className='slile-item-left'>
                                                <div className='slile-item-left-title'>
                                                    {slide.title}
                                                </div>
                                                <p className='desc-main'>
                                                    {slide.desc}
                                                </p>
                                                <p className='desc-sub'>
                                                    {slide?.desc_sub}
                                                </p>
                                            </section>
                                            <figure className='slide-item-right'>
                                                {' '}
                                                <img src={slide.icon} alt='' />
                                            </figure>
                                        </section>
                                    );
                                })}
                            </section>
                        </section>
                    </section>

                    <section className='test-project-script'>
                        <section className='web-ui-and-api-testing'>
                            <section className='test-project-container web-ui-container'>
                                <section className='web-ui-heading'>
                                    <section
                                        className='web-ui-heading-left'
                                        data-aos='fade-right'
                                        data-aos-duration='500'>
                                        <h2 className='web-ui-title'>
                                            The best of functional{' '}
                                            <span>web UI</span> and{' '}
                                            <span>API testing</span>
                                        </h2>
                                        <img
                                            src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/web-ui-icon.svg'
                                            alt=''
                                        />
                                    </section>
                                    <a
                                        href=''
                                        className='web-ui-heading-right'
                                        data-aos='fade-up'
                                        data-aos-duration='500'
                                        data-aos-offset='200'>
                                        <figure className='right-icon'>
                                            <img
                                                src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/web-ui-r-icon.svg'
                                                alt=''
                                            />
                                        </figure>

                                        <figure className='right-vector'>
                                            <img
                                                src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/Vector.svg'
                                                alt=''
                                            />
                                        </figure>
                                        <img
                                            className='web-ui-heading-right-img'
                                            src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/flaky-end-to-end-final.svg'
                                            alt=''
                                        />
                                        <section className='right-p'>
                                            <h4 className='right-p-title'>
                                                Handle flaky end-to-end UI tests
                                            </h4>
                                            <p className='right-p-desc'>
                                                Pinpoint unreliable tests with
                                                flakiness rates and similar
                                                failures
                                            </p>
                                        </section>
                                    </a>
                                </section>

                                <section className='web-ui-content'>
                                    <figure className='web-ui-content-icon'>
                                        <img
                                            src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/web-ui-section/head-ui-bottom-icon.svg'
                                            alt=''
                                        />
                                    </figure>
                                    <section className='first-section'>
                                        {UIData.webItems.map((item, index) => {
                                            return index < 3 ? (
                                                <a
                                                    href=''
                                                    key={item.id}
                                                    className={`first-section-item ${item.class}`}
                                                    data-aos='fade-up'
                                                    data-aos-duration={700}
                                                    data-aos-offset={
                                                        200 + index * 150
                                                    }>
                                                    <img
                                                        src={item.icon}
                                                        alt=''
                                                    />
                                                    <section className='description'>
                                                        <h3 className='description-title'>
                                                            {item.title}
                                                        </h3>
                                                        <p className='description-p'>
                                                            {item.desc}
                                                        </p>
                                                    </section>
                                                </a>
                                            ) : null;
                                        })}
                                    </section>

                                    <section className='second-section'>
                                        {UIData.webItems.map((item, index) => {
                                            return index > 2 ? (
                                                <a
                                                    href=''
                                                    key={item.id}
                                                    className={`second-section-item ${item.class}`}
                                                    data-aos='fade-up'
                                                    data-aos-duration={700}
                                                    data-aos-offset={
                                                        100 + index * 100
                                                    }>
                                                    <img
                                                        src={item.icon}
                                                        alt=''
                                                    />
                                                    <section className='description'>
                                                        <h3 className='description-title'>
                                                            {item.title}
                                                        </h3>
                                                        <p className='description-p'>
                                                            {item.desc}
                                                        </p>
                                                    </section>
                                                </a>
                                            ) : null;
                                        })}
                                    </section>
                                </section>
                            </section>
                        </section>

                        <section className='more-about-betterQA'>
                            <section className='test-project-container'>
                                <section className='more-about-container'>
                                    <section className='more-about-left'>
                                        <h3 className='more-about-title'>
                                            Don’t waste your TestProject scripts
                                        </h3>

                                        <div className='more-about-desc'>
                                            Yes. You can continue to edit and
                                            run existing TestProject. Get in
                                            touch with <span>BetterQA</span> – a
                                            Katalon Partner – that offers a
                                            complete migration strategy
                                        </div>
                                    </section>

                                    <section className='more-about-right'>
                                        <button
                                            className='more-about-btn'
                                            onClick={() =>
                                                formSectionRef?.current?.scrollIntoView(
                                                    {
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                    }
                                                )
                                            }>
                                            More about BetterQA
                                        </button>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section
                        className='set-up'
                        id='form-section'
                        ref={formSectionRef}>
                        <section className='test-project-container'>
                            <h2 className='set-up-title'>
                                Select a {` `}
                                <span className='footline-motion'>
                                    Katalon tool{' '}
                                    <i>
                                        <Player
                                            src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/test-project/testing/footer-motion.json'
                                            autoplay
                                            loop
                                        />
                                    </i>
                                </span>{' '}
                                to get started{' '}
                            </h2>

                            <section className='set-up-content'>
                                <section className='content-item content-item-left'>
                                    <section className='content-item-recomm'>
                                        <label className='recommend-label'>
                                            Recommended
                                        </label>
                                        <section className='recomm-KSOP'>
                                            <a href=''>
                                                Katalon Studio On-Prem
                                                (Standalone Edition)
                                            </a>
                                            <p className='recomm-KSOP-desc'>
                                                A fully on-premise version of
                                                Katalon Studio. Best for teams
                                                that need to host private
                                                testing infrastructures.
                                            </p>
                                        </section>
                                        <hr />
                                        <section className='recomm-KRE'>
                                            <a href=''>
                                                Katalon Runtime Engine
                                            </a>
                                            <p>
                                                Extend execution and coverage
                                                beyond your local environment.
                                                Schedule parallel tests on CI,
                                                Docker and Kubernetes.
                                            </p>
                                        </section>
                                    </section>

                                    <section className='content-item-KSOC'>
                                        <a href=''>
                                            Katalon Studio On Cloud (Platform
                                            Edition)
                                        </a>
                                        <p>
                                            SaaS test automation IDE to write
                                            tests. Reusable test artifacts,
                                            smart object spy and object
                                            repositories to maintain scripts.
                                        </p>
                                    </section>
                                </section>
                                <section className='content-item content-item-right'>
                                    <section className='form'>
                                        <section className='form-control'>
                                            <img
                                                src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/sign_up/rebrand_2022/username.svg'
                                                alt=''
                                            />
                                            <input
                                                type='text'
                                                placeholder='Full Name'
                                            />
                                        </section>
                                        <section className='form-control'>
                                            <img
                                                src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/sign_up/rebrand_2022/email.svg'
                                                alt=''
                                            />
                                            <input
                                                type='text'
                                                placeholder='Email'
                                            />
                                        </section>

                                        <section className='form-control'>
                                            <img
                                                src='https://d1h3p5fzmizjvp.cloudfront.net/themes/katalon_4/images/pages/sign_up/rebrand_2022/password.svg'
                                                alt=''
                                            />
                                            <input
                                                type='text'
                                                placeholder='Password'
                                            />
                                        </section>

                                        <button className='form-btn'>
                                            Start Testing
                                        </button>
                                    </section>

                                    <section className='privacy'>
                                        <a> Katalon Terms</a> and{' '}
                                        <a>Privacy Policy</a>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </main>
            {/* <Script id=''>AOS.init();</Script> */}
        </>
    );
};

export default TestProjectPage;
