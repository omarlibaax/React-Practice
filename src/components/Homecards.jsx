import React from 'react'
import Cards from './Cards';

const Homecards = () => {
  return (
    
    <>
          <section className="py-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 p-4">

<Cards>
    <div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-2xl font-bold">For Developers</h2>
<p className="mt-2 mb-4">
Create your profile and showcase your coding skills
</p>

<button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
Create Profile
</button>

</div>
</Cards>

<div className="bg-blue-100 p-6 rounded-lg shadow">
<h2 className="text-2xl font-bold">For Companies</h2>
<p className="mt-2 mb-4">
Find and hire the best developers for your project
</p>

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
Post Job
</button>

</div>

</div>
</section>

<section className="px-6 py-10">
<div className="max-w-7xl mx-auto">

<h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
Top Developers
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl shadow-md p-6">

<h3 className="text-xl font-bold">Frontend Developer</h3>

<p className="my-4 text-gray-600">
Expert in React, Tailwind CSS and modern UI design
</p>

<h4 className="text-blue-600 font-semibold">
$60 - $90 / Hour
</h4>

<hr className="my-4"/>

<div className="flex justify-between items-center">

<span className="text-blue-800">
<i className="fa-solid fa-location-dot"></i>
Remote
</span>

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
View Profile
</button>

</div>

</div>

<div className="bg-white rounded-xl shadow-md p-6">

<h3 className="text-xl font-bold">Full Stack Developer</h3>

<p className="my-4 text-gray-600">
Specialized in React, Node.js and MongoDB applications
</p>

<h4 className="text-blue-600 font-semibold">
$70 - $100 / Hour
</h4>

<hr className="my-4"/>

<div className="flex justify-between items-center">

<span className="text-blue-800">
<i className="fa-solid fa-location-dot"></i>
London
</span>

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
View Profile
</button>

</div>

</div>

<div className="bg-white rounded-xl shadow-md p-6">

<h3 className="text-xl font-bold">UI/UX Designer</h3>

<p className="my-4 text-gray-600">
Designing beautiful user experiences for web apps
</p>

<h4 className="text-blue-600 font-semibold">
$50 - $80 / Hour
</h4>

<hr className="my-4"/>

<div className="flex justify-between items-center">

<span className="text-blue-800">
<i className="fa-solid fa-location-dot"></i>
New York
</span>

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
View Profile
</button>

</div>

</div>

</div>
</div>
</section>

    </>
  )
}

export default Homecards