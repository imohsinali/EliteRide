import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
// import Menu from './menu';
// import data from '@/lib/data';
// import Search from './search';
// import Sidebar from './sidebar';

export default async function Header() {
  const headerMenus = [
    {
      name: 'Airport ride',
      href: '/search?tag=todays-deal',
    },
    {
      name: 'City rides',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Hourly Service',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Help',
      href: '/search?tag=featured',
    },
  ];
  return (
    <header className='bg-white  text-black'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1  '
            >
              <Image
                src='/icons/logo.png'
                width={150}
                height={100}
                alt={`${APP_NAME} logo`}
              />
              {/* {APP_NAME} */}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            {/* <Search /> */}
          </div>
          {/* <Menu /> */}

          <div className=' flex items-center px-3 mb-[1px] '>
            {/* <Sidebar /> */}
            <div className='hidden md:block  flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
              {headerMenus.map((menu) => (
                <Link
                  href={menu.href}
                  key={menu.href}
                  className='header-button !p-2'
                >
                  {menu.name}
                </Link>
              ))}
            </div>

            <MenuIcon className='md:hidden' />
          </div>
        </div>
        <div className='md:hidden block py-2'>{/* <Search /> */}</div>
      </div>
    </header>
  );
}
