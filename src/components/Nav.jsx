const Nav = () => {
  return (
   <>   
   <nav className="bg-blue-900 border-b border-blue-700">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center text-white text-2xl font-bold">
<i className="fa-solid fa-code mr-2"></i>
DevConnect
</a>

<div className="flex space-x-4">
<a href="#" className="bg-blue-700 text-white px-3 py-2 rounded-md">Home</a>
<a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Developers</a>
<a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Hire</a>
</div>

</div>
</div>
</nav>
   </>
  )
}

export default Nav
