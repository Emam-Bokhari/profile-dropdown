import { useRef, useState } from "react";


const App = () => {
  const [open, setOpen] = useState(false)
  const imgRef = useRef()
  const menuRef = useRef()

  window.addEventListener('click', (event) => {
    if (event.target !== menuRef.current && event.target !== imgRef.current) {
      setOpen(false)
    }
  })
  return (
    <div>


      {/* maindiv */}
      <div className="flex justify-center h-screen bg-gray-200" >

        {/* image */}
        <div className="pt-14 relative" >
          <img ref={imgRef} onClick={() => setOpen(!open)} className="w-10 h-10 object-cover cursor-pointer border-2 border-gray-400 rounded-full" src="https://i.ibb.co/bdhQzzj/user.jpg" alt="Profile Image" />

          {/* profile navlink */}
          {open && <div ref={menuRef} className="bg-white w-52 p-4 absolute -left-20 top-28 cursor-pointer rounded-sm" >
            <ul>
              <li onClick={() => setOpen(false)} className="p-2 hover:bg-blue-100 rounded">UserName</li>
              <li onClick={() => setOpen(false)} className="p-2 hover:bg-blue-100 rounded">Logout</li>
            </ul>
          </div>}

        </div>
      </div>





    </div>
  );
};

export default App;