export default function Navbar() {
    return(
        <div className="bg-blue-400 text-2xl text-center p-1 flex justify-between">
         <img src="/plumber.png" alt="plumbing" className="h-22 w-22"/>
        
        
            <nav className="flex gap-6 mt-10 px-5">
                <ul>Home</ul>
                 <ul>About</ul>
                <ul>Services</ul>
                <ul>Contact</ul>
            </nav>
              
        </div>
    )
}