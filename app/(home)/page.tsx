import BrowsingHistoryList from '@/components/shared/browsing-history-list';
import { HomeCard } from '@/components/shared/home/home-card';
import { HomeCarousel } from '@/components/shared/home/home-carousel';
import ProductSlider from '@/components/shared/product/product-slider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { MapPin, SearchIcon, Users } from 'lucide-react';
import Image from 'next/image';

export default async function Page() {
  const data1 = [
    {
      title: 'Airport transfers',

      subTitle:
        'Book your stress-free airport transportation at competitive prices.',
      image: '/images/p1.avif',
    },

    {
      title: 'Chauffeur by the hour',

      subTitle: 'Hire an hourly chauffeur for your business or leisure needs.',
      image: '/images/p2.avif',
    },
    {
      title: 'City rides',

      subTitle:
        'Get around the city at your convenience, anytime and anywhere, even for long distances.',
      image: '/images/p3.avif',
    },
  ];

  const data2 = [
    {
      title: 'Economy Taxi',

      subTitle: 'Up to 3 Passengers',
      image: '/images/p11.avif',
    },

    {
      title: 'Standard Class',

      subTitle: 'Up to 3 Passengers',
      image: '/images/p12.avif',
    },

    {
      title: 'First Class',

      subTitle: 'Up to 3 Passengers',
      image: '/images/p13.avif',
    },

    {
      title: 'SUV',

      subTitle: 'Up to 6 Passengers',
      image: '/images/p14.avif',
    },

    {
      title: 'Van Standard',

      subTitle: 'Up to 7 Passengers',
      image: '/images/p15.avif',
    },
    {
      title: 'Van First Class',

      subTitle: 'Up to 6 Passengers',
      image: '/images/p15.avif',
    },

    {
      title: 'Minibus',

      subTitle: 'Up to 16 Passengers',
      image: '/images/p15.avif',
    },
  ];
  return (
    <>
      {/* <HomeCarousel items={data.carousels} /> */}
      <div className='md:p-4 md:space-y-4 bg-border flex flex-col gap-10'>
        <div>
          <div className='bg-slate-600 p-5 text-white  flex  md:flex-row flex-col '>
            <div className='flex-1 flex items-center justify-center'>
              <h1 className='text-sm md:text-5xl font-bold '>
                Your Reliable airport transfer
              </h1>
            </div>

            <div className='flex-1'>
              <div className='bg-white flex flex-col gap-4 p-4 rounded-md text-black'>
                <div className='bg-gray-200 p-2 rounded-md gap-y-3'>
                  <h2 className='font-bold'>From</h2>
                  <span className='flex flex-row'>
                    <MapPin />
                    <input
                      className='bg-gray-200'
                      placeholder='Address, airport,hotel,...'
                    />
                  </span>
                </div>

                <div className='bg-gray-200 p-2 rounded-md gap-y-3'>
                  <h2 className='font-bold'>To</h2>
                  <span className='flex flex-row'>
                    <MapPin />
                    <input
                      className='bg-gray-200'
                      placeholder='Address, airport,hotel,...'
                    />
                  </span>
                </div>

                <div className='flex flex-row gap-4  flex-1'>
                  <div className='bg-gray-200 p-2  flex-auto rounded-md gap-y-3'>
                    <h2 className=''>Pickup date</h2>
                    <span className='flex flex-row'>
                      <input
                        type='date'
                        className='bg-gray-200'
                        placeholder='Address, airport,hotel,...'
                      />
                    </span>
                  </div>
                  <div className='bg-gray-200 p-2 rounded-md flex-auto  gap-y-3 '>
                    <h2 className=''>Pickup time</h2>
                    <span className='flex flex-row'>
                      <input
                        type='time'
                        className='bg-gray-200'
                        placeholder='Address, airport,hotel,...'
                      />
                    </span>
                  </div>
                </div>

                <button className='border p-4 rounded-sm'>ADD RETURN</button>

                <div className='bg-gray-200 p-2 rounded-md gap-y-3'>
                  <span className='flex flex-row'>
                    <Users />
                    <h2 className=''>Passengers</h2>
                  </span>

                  <input className='bg-gray-200' value={2} />
                </div>

                <button className='flex items-center justify-center border p-4 rounded-sm text-white bg-black'>
                  <SearchIcon />
                  <h1>SEARCH </h1>
                </button>
              </div>
            </div>
          </div>
          <div className='bg-slate-600 border-b-10-amber-500   rounded-md m-4 text-white max-w-[350px] sm:w-[100%]'>
            <div className=' p-4'>
              <div>
                <h1 className='text-4xl font-bold'>Reliability, worldwide</h1>
              </div>

              <div className='flex flex-row justify-between p-4'>
                <h3>Affordable</h3>
                <h3> Punctual</h3>
                <h3> Professional</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <HomeCard cards={data1} />
        </div>

        <div className='p-10  flex  md:flex-row flex-col items-center  '>
          <div className='flex-1 flex flex-col gap-3 '>
            <h1 className='text-3xl font-bold '>Easy online booking Enjoy</h1>
            <h1>
              a hassle-free journey by booking your private chauffeur
              online—quick, simple, and ready whenever you are. Your ride, your
              rules, just a few clicks away.
            </h1>
          </div>

          <div className='flex-1 flex flex-col gap-3'>
            <Image
              src={'/images/p5.avif'}
              alt={'alt'}
              className='max-w-full mx-auto rounded-lg'
              height={10}
              width={350}
            />
            <div className='h-2 bg-red-100 rounded-md' />
          </div>
        </div>

        <div className='p-10  flex  md:flex-row flex-col items-center  '>
          <div className='flex-1 flex flex-col gap-3'>
            <Image
              src={'/images/p6.avif'}
              alt={'alt'}
              className='max-w-full mx-auto rounded-lg'
              height={10}
              width={350}
            />
            <div className='h-2 bg-red-100 rounded-md' />
          </div>
          <div className='flex-1 flex flex-col gap-3 '>
            <h1 className='text-3xl font-bold '> Clear price</h1>
            <h1>
              At Transfeero, select your ideal ride and enjoy instant booking
              confirmation. Our transparent pricing policy guarantees no hidden
              fees—what you see is what you pay, ensuring a seamless travel
              experience.
            </h1>
          </div>
        </div>

        <div className='p-10  flex  md:flex-row flex-col items-center  '>
          <div className='flex-1 flex flex-col gap-3 '>
            <h1 className='text-3xl font-bold '> Complimentary wait time</h1>
            <h1>
              Experience seamless travel with our meet-and-greet service,
              provided with a complimentary one-hour wait time and efficient
              flight tracking for a stress-free journey. Enjoy the convenience
              at no extra cost.
            </h1>
          </div>

          <div className='flex-1 flex flex-col gap-3'>
            <Image
              src={'/images/p7.avif'}
              alt={'alt'}
              className='max-w-full mx-auto rounded-lg'
              height={10}
              width={350}
            />
            <div className='h-2 bg-red-100 rounded-md' />
          </div>
        </div>

        <div className='p-10  flex  md:flex-row flex-col items-center  '>
          <div className='flex-1 flex flex-col gap-3'>
            <Image
              src={'/images/p8.avif'}
              alt={'alt'}
              className='max-w-full mx-auto rounded-lg'
              height={10}
              width={350}
            />
            <div className='h-2 bg-red-100 rounded-md' />
          </div>
          <div className='flex-1 flex flex-col gap-3 '>
            <h1 className='text-3xl font-bold '> Professional drivers </h1>
            <h1>
              Our seasoned drivers, boasting local area expertise and savvy
              traffic insights, guarantee punctual journeys. Travel with peace
              of mind in the hands of licensed, insured professional chauffeurs.
            </h1>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center p-6'>
          <h1 className='text-4xl align-middle bold'>
            Maximum comfort and safety for your trip
          </h1>
          <h1>Licensed vehicles, professional drivers</h1>

          <div className='w-full bg-background'>
            <Carousel
              opts={{
                align: 'start',
              }}
              className='w-full'
            >
              <CarouselContent>
                {data2.map((product) => (
                  <CarouselItem
                    key={product.title}
                    className={
                      'md:basis-1/3 lg:basis-1/5 justify-center items-center flex flex-col'
                    }
                  >
                    <Image
                      src={product.image}
                      alt={'alt'}
                      className='max-w-full mx-auto rounded-lg'
                      height={10}
                      width={100}
                    />
                    <div>
                      <h1 className='text-lg bold'>{product.title}</h1>
                      <h1>{product.subTitle}</h1>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-0' />
              <CarouselNext className='right-0' />
            </Carousel>
          </div>
        </div>
        {/* <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card> */}
        {/* 
        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider
              title='Best Selling Products'
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card> */}
      </div>
      <div className='p-4 bg-background'>{/* <BrowsingHistoryList /> */}</div>
    </>
  );
}
