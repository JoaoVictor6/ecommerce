import Image from 'next/image';
import React from 'react';
import reactLogo from '@assets/images/logo.svg';
import Link from 'next/link';

const linkItem = [
  {
    href: '/new/products',
    textContent: 'New products'
  },
  {
    href: '/account',
    textContent: 'My account'
  },
  {
    href: '/account/wishlist',
    textContent: 'My wishlist'
  }
];

export default function Menu() {
  return (
    <nav
      className='p-4 shadow'
    >
      <div className="container flex justify-between m-auto">
        <Image
          alt="Site logo(is a react logo LOL)"
          src={reactLogo}
          className="logo"
          width={38}
          height={38}
        />
        <menu className='flex gap-8 items-center'>
          {linkItem.map(({ href, textContent }) => (
            <Link
              href={href}
              key={textContent}
            >
              <a className='font-medium text-gray-400 hover:text-teal-600 transition-colors'>
                {textContent}
              </a>
            </Link>
          ))}
        </menu>
      </div>
    </nav>
  );
}
