export default function Home() {
  return(

    <main>
     <h1 className="text-5xl text-center">Welcome To Our Plumbing Services</h1>
      <section  className= "bg-gray-400">
        <div className="flex justify-between gap-6 text-2xl font-extrabold">
           <p className="mt-5 px-2 font-semibold">We Cover A Range Of Plumbing Services</p>
          <div className="flex-col absolute top-45 mt-5 px-9">
          <p className="underline text-5xl mt-9 mb-8 text-center">Services</p>
            <li className="text-2xl mt-2 mb-2 px-8">Drain Cleaning</li>
            <li className="text-2xl mt-2 mb-2 px-8">Leak Detection</li>
            <li className="text-2xl mt-2 mb-2 px-8">Pipe Repair</li>
             <li className="text-2xl mt-2 mb-2 px-8">Water Heater Installation</li>
            <li className="text-2xl mt-2 mb-2 px-8">Water Heater Repair</li>
            <li className="text-2xl mt-2 mb-2 px-8">Emergency Plumbing</li>
            
             <p className="mt-8 ">
              This is just a few of the services we provide
             </p>
             <p>Click button below to book a consultation.</p>

            <button className="mt-22 rounded-full bg-black p-12 text-white">Book Here</button>
          </div>
          <img src="/heropicture.jpg" alt="plumbing picture" className="w-100 h-200"/>
       </div>
       </section>


       <section className="bg-gray-200">
      <h1 className="text-2xl font-bold text-center">A Little About Us</h1>
       <p className="font-semibold text-center mt-6 text-lg">We served over 300 homes in the United States Of America for over 20 years.</p>
       <h1 className="text-center font-semibold text-3xl mt-5 mb-4">Here are some of our happy customers</h1>
       
       <div className="grid grid-template-row: repeat(3, minmax(3, 1fr));
 gap-3">

        <div className="testimonial-card">
         <img src="/callie.jpg" alt="customer testimonial" className="w-100 h-100"/>
         <h3>Callie McCartney</h3>
         <p className="testimonial-text">"Professional Service. They fixed my broken water pipe."</p>
        <span className="testimonial-role">Baltimore,MD</span>
        </div>

      <div className="testimonial-card">
         <img src="/callie.jpg" alt="customer testimonial" className="w-100 h-100"/>
         <h3>Katie Moore</h3>
         <p className="testimonial-text">"I had a leakage, and they came out fixed it same day."</p>
        <span className="testimonial-role"></span>
        </div>


        <div className="testimonial-card">
         <img src="/callie.jpg" alt="customer testimonial" className="w-100 h-100"/>
         <h3>April Janae</h3>
         <p className="testimonial-text">"I really appreciate their services. My well stopped working,and it was fixed the next day."</p>
        <span className="testimonial-role">Baltimore,MD</span>
        </div>


        <div className="testimonial-card">
         <img src="/callie.jpg" alt="customer testimonial" className="w-100 h-100"/>
         <h3>Alex Silver</h3>
         <p className="testimonial-text">"I had several issues before this with my water freezing up. Plumbers before couldn't seem to figure out what was going on. I'm so glad we came across them. It was fixed in less than an hour."</p>
        <span className="testimonial-role">Baltimore,MD</span>
        </div>




       </div>
      
       
       </section>
    </main>
  )
}





















