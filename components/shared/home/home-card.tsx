import Image from 'next/image';
import React from 'react';

type CardItem = {
  title: string;
  subTitle: string;
  image: string;
};

export function HomeCard({ cards }: { cards: CardItem[] }) {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
      {cards.map((card) => (
        <div key={card.title} className='flex flex-col rounded-lg'>
          <div className='flex-1 gap-2'>
            <div className='grid grid-cols-1 gap-4'>
              <Image
                src={card.image}
                alt={'alt'}
                className='  max-w-full mx-auto rounded-lg'
                height={10}
                width={320}
              />
            </div>
            <h3 className='text-2xl font-bold mb-4'>{card.title}</h3>
            <h3 className='text-lg  mb-4'>{card.subTitle}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
