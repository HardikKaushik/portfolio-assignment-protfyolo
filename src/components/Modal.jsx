import React from 'react'

const Modal = () => {
    
  return (
    <div>
      

{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn " onClick={()=>document.getElementById('my_modal_1').showModal()}>Click for Details</button>
<dialog id="my_modal_1" className="modal h-1/2 w-1/2 bg-indigo-400 rounded-lg">
  <div className="modal-box py-20 h-1/4">

  <p className="text-2xl text-center font-playfair">Project </p>
    <p className="py-8 text-center leading-relaxed text-white">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti mollitia minima optio libero doloremque modi rem ipsa perspiciatis, iste aliquid tenetur enim sapiente quos.</p>
    <a  href="sdfsdf" class="text-white flex justify-center items-center mb-1 md:mb-2 lg:mb-0">Github link
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
    <div className="modal-action  mt-3 flex justify-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn leading-relaxed text-white p-2 border-2 rounded m-2">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  )
}

export default Modal
