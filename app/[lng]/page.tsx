'use client'; // Converted to client component

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { useTranslation } from '../i18n/client';
import { ParallaxBanner } from "react-scroll-parallax";
import External_Link_Icon from "@/public/assets/svgs/external-link_icon.svg";
import HomeBannerImage from "@/public/assets/images/home-banner-img.jpg";
import Logo_Icon_White from "@/public/assets/svgs/juno-logo-j-white.svg";
import Logo_Icon_Blue from '@/public/assets/svgs/juno-care-icon-blue.svg';
import Down_Arrow_White from "@/public/assets/svgs/down-arrow-icon.svg";
import Video_Icon_White from "@/public/assets/svgs/video-icon.svg";
import Custom_Separator_Corner from "@/public/assets/svgs/hero-custom-corner.svg";
import About_Image from "@/public/assets/images/doctor_illustration.png";
import Phone_Icon_White from '@/public/assets/svgs/contact-icon-white.svg';
import Phone_Icon_Dark from '@/public/assets/svgs/contact-icon-dark.svg';
import Email_Icon_Dark from '@/public/assets/svgs/email-icon.svg';
import Live_Support_Icon_White from '@/public/assets/svgs/live-support_icon.svg';
import Money_Icon_White from '@/public/assets/svgs/money_icon.svg';
import Team_Icon_White from '@/public/assets/svgs/team_icon.svg';
import Clinic_Icon_White from '@/public/assets/svgs/clinic_icon.svg';
import Gear_Icon_White from '@/public/assets/svgs/gear_icon.svg';
import Logo from '@/public/assets/svgs/juno_care_logo.svg';
import Medical_Icon_White from '@/public/assets/svgs/medical-icon-white.svg';



// Define the props type for the HomePage component
type HomePageProps = {
  params: {
    lng: string;
  };
};

export default function Home({ params: { lng } }: HomePageProps) {

  // Language
  const { t } = useTranslation(lng, 'home-page');

  // Images for ParallaxBanner
  const homeBannerImage = "/assets/images/home-banner-img.jpg";

  // Email Sending
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:' + 'junocare@junopharm.com';
  };

  return (
    <main className={styles.main}>
      
      <section id="section-hero" className="hero">

        {/* Main Contents */}
        <div className="hero__contents page-span-big">

          <div className="hero__contents_intro">
            {/* <Image src={Logo_Icon_White} alt="Logo Icon (Heart)" unoptimized={true} className="hero__contents_intro-logoicon" /> */}
            <h1 className="hero__contents_intro-header">{t('hero-header')}</h1>
            <p className="hero__contents_intro-description">{t('hero-description')}</p>
            {/* <div className="hero__contents_intro-keep-scrolling keep-scrolling">
              <div className="keep-scrolling__text">{t('keep-scrolling')}</div>
              <Image src={Down_Arrow_White} alt="Down Arrow" unoptimized={true} className="keep-scrolling__icon" />
            </div> */}
          </div>

          {/* Links */}
          <div className="hero__contents_links">
            <Link href="https://www.junopharm.ca/" target="blank" className="hero__contents_links-link">
              <Image src={External_Link_Icon} alt="Video Icon" unoptimized={true} className="hero__contents_links-link--icon" />
              <p className="hero__contents_links-link--text">{t('hero-juno-link')}</p>
            </Link>
            <Link href="https://www.omegapharma.ca/" target="blank" className="hero__contents_links-link">
              <Image src={External_Link_Icon} alt="Video Icon" unoptimized={true} className="hero__contents_links-link--icon" />
              <p className="hero__contents_links-link--text">{t('hero-omega-link')}</p>
            </Link>
          </div>

          {/* <Link href="/noromby-guide#noromby-section-video" className="hero__contents_video-circle">
            <Image src={Video_Icon_White} alt="Video Icon" unoptimized={true} className="hero__contents_video-circle--icon" />
          </Link> */}

        </div>

        {/* Banner Image */}
        <ParallaxBanner
            layers={[
              {
                image: homeBannerImage,
                speed: -70,
                translateY: [0, 30],
                opacity: [1, 1],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
              },
            ]}
            className="w-full aspect-2-1 hero__image"
        />
        <div className="banner-shadow"></div>
      </section>

    </main>
  );
}
