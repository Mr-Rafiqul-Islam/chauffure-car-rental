import Link from 'next/link';
import React from 'react'

const RouteDotCard = ({ route }) => {
  return (
    <Link href={route.link} className="group block h-full">
      <div className="relative mx-auto w-full max-w-sm h-full rounded-lg border border-dashed border-zinc-700 px-4 sm:px-6 transition-all duration-300 group-hover:border-orange-500/50">
        {/* Horizontal Lines */}
        <div className="absolute top-6 left-0 -z-0 h-px w-full bg-zinc-700" />
        <div className="absolute bottom-6 left-0 z-0 h-px w-full bg-zinc-700" />

        {/* Vertical border lines */}
        <div className="relative w-full h-full border-x border-zinc-700">
          {/* Dot Decorations */}
          <div className="absolute z-0 grid h-full w-full items-center">
            <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
              <div className="bg-orange-500 my-6 size-1.5 -translate-x-[4px] rounded-full outline outline-8 outline-black" />
              <div className="bg-orange-500 my-6 size-1.5 translate-x-[4px] place-self-end rounded-full outline outline-8 outline-black" />
              <div className="bg-orange-500 my-6 size-1.5 -translate-x-[4px] rounded-full outline outline-8 outline-black" />
              <div className="bg-orange-500 my-6 size-1.5 translate-x-[4px] place-self-end rounded-full outline outline-8 outline-black" />
            </section>
          </div>

          {/* Card Content */}
          <div className="relative z-20 mx-auto h-full py-4">
            {/* Added h-full and flex properties to ensure consistent height */}
            <div className="p-6 h-full flex flex-col justify-between text-left">
              <h3 className="mb-1 text-lg font-bold text-gray-100 group-hover:text-orange-400 transition-colors">
                {route.routeName}
              </h3>
              <div className="mt-4 flex justify-between items-baseline">
                <p className="text-xs text-zinc-400">Price Starts From:</p>
                <p className="text-2xl font-bold text-white">
                  <span className="text-sm font-medium mr-1">AUD</span>
                  {route.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RouteDotCard