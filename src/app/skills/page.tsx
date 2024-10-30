
  import Header from "../component/header";
  import Image from "next/image";
const Skills=()=>{
    return(
        <div>
<Header/>

    <section className={"text-gray-600 body-font"}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      I Also Do Some Coding
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Highly skilled web developer with expertise in crafting innovative,user-friendly digital solutions.Proficient in developing dynamic website,

web application,and mobile-responsive designs,Passionate about satying updated with the latest technologies and trends.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
           src="/html.png"
           width={250}
           height={250}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100  hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              HTML
            </h1>
            <p className="leading-relaxed">
            Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
           src="/css.png"
           width={250}
           height={250}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100  hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CSS
            </h1>
            <p className="leading-relaxed">
            Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            src="/js.webp"
            width={250}
            height={250}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100  hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              JAVA SCRIPT
            </h1>
            <p className="leading-relaxed">
            Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            src="/ts.png"
            width={250}
            height={250}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100  hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Typescript
            </h1>
            <p className="leading-relaxed">
             Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
           src="/git2.jpeg"
            width={150}
            height={150}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100  hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              GitHub
            </h1>
            <p className="leading-relaxed">
              Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
           src="/next.js.png"
            width={150}
            height={150}
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-orange-50">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Next.js Going on
            </h1>
            <p className="leading-relaxed">
          Custom web development -Responsive design-Interactive web application-Component-based development- Cross-browser compatibilty.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
   


        
    )
}
export default Skills