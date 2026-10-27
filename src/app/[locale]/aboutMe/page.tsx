'use client';

import Image from 'next/image';
import './aboutMe.scss';
import { useTranslation } from 'react-i18next';
import { assetPath } from "@/lib/site";
import {
    Accordion,
    AccordionItem,
} from '@/components/accordion/accordion';

export default function AboutMe() {
    const { t } = useTranslation('aboutMe');

    return (
        <div className="about-me-page">
            <div className='about-me-container'>
                <div className="about-me-image-container">
                    <Image
                        className="about-me-image"
                        src={assetPath('/aboutMe/aboutMe.jpg')}
                        alt="About Me"
                        width={1080}
                        height={1620}
                        loading="eager"
                    />
                </div>
                <div className="about-me-content">
                    <div className='about-me-chapter'>
                        <h3>{t('title')}</h3>
                        <span><h5>{t('born')}:</h5> <p>{t('born-date')}</p></span>
                        <span><h5>{t('from')}:</h5> <p>{t('from-place')}</p></span>
                        <span><h5>{t('living')}:</h5> <p>{t('living-place')}</p></span>

                        <p>{t('description')}</p>

                    </div>
                    <Accordion>
                        <AccordionItem title={t('jobs-title')}>
                            <div className='about-me-chapter'>
                                <div className="about-me-subcontent">
                                    <h4>{t('army')}</h4>
                                    <p>{t('army-subtitle')}</p>
                                    <ul>
                                        <li>{t('army-1')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('mobiweb')}</h4>
                                    <p>{t('mobiweb-description')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('eski')}</h4>
                                    <p>{t('eski-frontend')}</p>
                                    <ul>
                                        <li>{t('eski-landing')}</li>
                                        <li>{t('eski-customer')}</li>
                                        <li>{t('eski-suplier')}</li>
                                    </ul>
                                    <p>{t('eski-ui')}</p>
                                    <ul>
                                        <li>{t('eski-design-landing')}</li>
                                        <li>{t('eski-design-customer')}</li>
                                        <li>{t('eski-design-suplier')}</li>
                                        <li>{t('eski-research')}</li>
                                    </ul>
                                    <p>{t('eski-graphic')}</p>
                                    <ul>
                                        <li>{t('eski-brand')}</li>
                                        <li>{t('eski-cards')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('asto')}</h4>
                                    <p>{t('asto-subtitle')}</p>
                                    <ul>
                                        <li>{t('asto-1')}</li>
                                        <li>{t('asto-2')}</li>
                                        <li>{t('asto-3')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('sinialo')}</h4>
                                    <p>{t('sinialo-subtitle')}</p>
                                    <ul>
                                        <li>{t('sinialo-1')}</li>
                                        <li>{t('sinialo-2')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('anth')}</h4>
                                    <p>{t('anth-subtitle')}</p>
                                    <ul>
                                        <li>{t('anth-1')}</li>
                                        <li>{t('anth-2')}</li>
                                        <li>{t('anth-3')}</li>
                                        <li>{t('anth-4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title={t('publications-title')}>
                            <div className='about-me-chapter'>
                                <div className="about-me-subcontent">
                                    <a href='https://dl.acm.org/doi/full/10.1145/3772363.3798728' target="_blank" rel="noopener noreferrer">
                                        <h4>{t('chi2026')}</h4>
                                    </a>
                                    <p>{t('chi2026-description')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <a href='https://link.springer.com/chapter/10.1007/978-3-032-05005-2_1' target="_blank" rel="noopener noreferrer">
                                        <h4>{t('interact2025')}</h4>
                                    </a>
                                    <p>{t('interact2025-description')}</p>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title={t('volunteering-title')}>
                            <div className='about-me-chapter'>
                                <div className="about-me-subcontent">
                                    <h4>{t('interact')}</h4>
                                    <h5>{t('interact-date')}</h5>
                                    <p>{t('interact-description')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('upatras')}</h4>
                                    <h5>{t('upatras-date-2')}</h5>
                                    <p>{t('upatras-description-2')}</p>
                                    <h5>{t('upatras-date-1')}</h5>
                                    <p>{t('upatras-description-1')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('n+1')}</h4>
                                    <h5>{t('n+1-date')}</h5>
                                    <p>{t('n+1-description')}</p>
                                    <ul>
                                        <li>{t('n+1-activity-1')}</li>
                                        <li>{t('n+1-activity-2')}</li>
                                        <li>{t('n+1-activity-3')}</li>
                                        <li>{t('n+1-activity-4')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('ieee')}</h4>
                                    <h5>{t('ieee-date')}</h5>
                                    <p>{t('ieee-description')}</p>
                                    <ul>
                                        <li>{t('ieee-activity-1')}</li>
                                        <li>{t('ieee-activity-2')}</li>
                                        <li>{t('ieee-activity-3')}</li>
                                        <li>{t('ieee-activity-4')}</li>
                                        <li>{t('ieee-activity-5')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('eestec')}</h4>
                                    <h5>{t('eestec-date-1')}</h5>
                                    <p>{t('eestec-description-1')}</p>
                                    <h5>{t('eestec-date-2')}</h5>
                                    <p>{t('eestec-description-2')}</p>
                                    <ul>
                                        <li>{t('eestec-2-activity-1')}</li>
                                        <li>{t('eestec-2-activity-2')}</li>
                                        <li>{t('eestec-2-activity-3')}</li>
                                        <li>{t('eestec-2-activity-4')}</li>
                                        <li>{t('eestec-2-activity-5')}</li>
                                        <li>{t('eestec-2-activity-6')}</li>
                                        <li>{t('eestec-2-activity-7')}</li>
                                        <li>{t('eestec-2-activity-8')}</li>
                                    </ul>
                                    <h5>{t('eestec-date-3')}</h5>
                                    <p>{t('eestec-description-3')}</p>
                                    <ul>
                                        <li>{t('eestec-3-activity-1')}</li>
                                        <li>{t('eestec-3-activity-2')}</li>
                                        <li>{t('eestec-3-activity-3')}</li>
                                        <li>{t('eestec-3-activity-4')}</li>
                                    </ul>
                                    <h5>{t('eestec-date-4')}</h5>
                                    <p>{t('eestec-description-4')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('asto-v')}</h4>
                                    <h5>{t('asto-v-date')}</h5>
                                    <p>{t('asto-v-description')}</p>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('pofpp')}</h4>
                                    <h5>{t('pofpp-date')}</h5>
                                    <p>{t('pofpp-description')}</p>
                                    <h5>{t('pofpp-2-date')}</h5>
                                    <p>{t('pofpp-2-description')}</p>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem title={t('education')}>
                            <div className='about-me-chapter'>
                                <div className="about-me-subcontent">
                                    <h4>{t('upatras-edu')}</h4>
                                    <h5>{t('upatras-edu-date')}</h5>
                                    <p>{t('upatras-edu-description')}</p>
                                    <ul>
                                        <li>{t('upatras-edu-activity-1')}</li>
                                        <li>{t('upatras-edu-activity-2')}</li>
                                        <li>{t('upatras-edu-activity-3')}</li>
                                        <li>{t('upatras-edu-activity-4')}</li>
                                        <li>{t('upatras-edu-activity-5')}</li>
                                    </ul>
                                </div>
                                <div className="about-me-subcontent">
                                    <h4>{t('workshops')}</h4>
                                    <h5>{t('workshops-date-1')}</h5>
                                    <p>{t('workshops-description-1')}</p>
                                    <h5>{t('workshops-date-2')}</h5>
                                    <p>{t('workshops-description-2-1')}</p>
                                    <p>{t('workshops-description-2-2')}</p>
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>




                </div>
            </div>
        </div >
    );
}
