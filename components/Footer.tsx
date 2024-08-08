import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 pt-10"> {/* Added padding-top (pt-10) */}
      <div className="padding-container max-container flex w-full flex-col items-center gap-14">
        {/* Social Icons */}
        <div className="flex gap-4">
          {SOCIALS.links.map(({ src, url }) => (
            <Link href={url} key={src} legacyBehavior passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={src}
                  alt="social-icon"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          ))}
        </div>
        {/* Copyright Line */}
        <div className="border bg-gray-20 w-full" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Levitate | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
