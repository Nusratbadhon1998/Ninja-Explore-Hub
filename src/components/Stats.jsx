import React from 'react'

function Stats() {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
		<h1 data-aos="fade-down" data-aos-duration="800" className='text-center text-xl md:text-2xl lg:text-4xl text-stone-100 font-bold my-12'>Unrivaled Experience and Influence</h1>
		{/* Aos */}
	<div  className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
			<p className="text-sm sm:text-base">Followers on social media</p>
		</div>
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
			<p className="text-sm sm:text-base">Published books</p>
		</div>
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
			<p className="text-sm sm:text-base">TED talks</p>
		</div>
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">15</p>
			<p className="text-sm sm:text-base">Years of experience</p>
		</div>
		<div data-aos="fade-up" data-aos-duration="800" 												  className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
  )
}

export default Stats