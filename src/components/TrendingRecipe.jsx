import React from 'react'
import { useFetch } from './useFetch'
import SliderModule from "react-slick";
import { Clock, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const Slider = SliderModule.default;

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl)
  console.log("my meal data = ", data?.meals)
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    appendDots: () => null,
    customPaging: () => null,
  };

  if (loading) return (
    <div className='text-center p-8 text-gray-300'>
      <Loader className='animate-spin inline-block mr-2 text-blue-400' />
      Loading {title}...
    </div>
  )

  return (
    <>
      <section className='mt-2 mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-10 mb-6 tracking-tight
        border-1-4 border-yellow-400 pl-4 flex items-center'>
          <Clock className='w-6 h-6 mr-3 text-blue-500' />
          {title}
        </h2>

        <div className='w-full mx-auto'>

          <Slider {...settings}>

            {meals.map(meal =>
              <div key={meal.idMeal} className='px-10 flex justify-center'>

                <Link to={`/recipe/${meal.idMeal}`}>

                  <div className='relative bg-gray900 rounded-xl shadow-xl shadow-black/50 
                overflow-hidden group transform transition duration-500 cursor-pointer 
                border border-gray-800 hover:shadow-blue-600/50 mb-5'>

                    {/* Hover glow */}
                    <div className='absolute insert-0 rounded-xl border-2 border-transparent 
                  group-hover:border-blue-500/100 transition duration-500'>
                    </div>

                    <div className='flex justify-center items-center p-5'>
                      <img src={meal?.strMealThumb} alt="food pic" className='h-[120px] w-[120px]
                    rounded-xl border border-yellow-400 transition duration-500
                    group-hover:scale-105'/>
                    </div>


                  </div>

                </Link>

              </div>)}

          </Slider>

        </div>
      </section>
    </>
  )
}

export default TrendingRecipe