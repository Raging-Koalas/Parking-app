import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
const Chat = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
  return (
    <>
    <div className=" relative">
      <button 
        type="button"
        onClick={openModal}
        className="btn btn-primary  bottom-3 right-4 fixed"
      >
        Chat With Us
      </button>
    </div>

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-end p-4  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-black bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                 Pranto Boss
                </Dialog.Title>
                <img onClick={closeModal} className='w-7 rounded-2xl cursor-pointer p-2 absolute top-4 right-4 bg-gray-300 dark:bg-gray-500' src="/Assets/cross.svg" alt="" />
              
              <p className='pl-4 bg-gray-100 w-56 py-2 my-2 rounded-lg text-black items-center'>Hi How are you !</p>
              
              <p className='text-black font-semibold flex justify-end items-center'>Rownok Mahbub</p>
              
              <div className='flex justify-end'>
              <p className='pr-4 bg-gray-100 w-56 py-2 my-2 rounded-lg text-black flex justify-end items-center'>Hi How are you !</p>
              </div>
             
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4" placeholder="Type Your Text here..." required/>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Send
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}

export default Chat