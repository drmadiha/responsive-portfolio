import Image from "next/image"
const Herosection=()=>{
    return(

<section className={"text-gray-600 body-font"}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image src="/girl3.png" 
      width={350}
      height={350}
      alt="hero"
      className="object-cover object-center rounded"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I Am Madiha Rashid
        <br className="hidden lg:inline-block"/> Web Developer
      </h1>
      <p className="mb-8 leading-relaxed">Highly skilled web developer with expertise in crafting innovative,user-friendly digital solutions.Proficient in developing dynamic website,

web application,and mobile-responsive designs,Passionate about satying updated with the latest technologies and trends.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sing In</button>
        <button className="ml-4 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-950 rounded text-lg">Sing Out</button>
      </div>
    </div>
  </div>
</section>

    )
}
export default Herosection;