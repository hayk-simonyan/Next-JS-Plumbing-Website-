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
       
      
       
       </section>
    </main>
  )
}





















// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
