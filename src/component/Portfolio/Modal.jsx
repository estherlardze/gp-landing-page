
const Modal = ({ children, show, onClose, title }) => {
  return (
    show && (
      <>
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/20" onClick={onClose} />
        <div className={`bg-black/60 z-50 p-2 my-2 mx-auto shadow-lg fixed left-[50%] top-[50%]  transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100vh] ${show ? "active" : ""}`}>
          <div className="modal-content">
            <div className="flex items-center justify-between mb-3">
              <div className="modal-title">{title}</div>
              <div onClick={onClose} className="text-center text-xl cursor-pointer w-[30px] h-[30px] rounded-full bg-gray-400">
                X
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;


  

  
  