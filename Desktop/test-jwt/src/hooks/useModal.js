import { useState, useRef, useCallback, useEffect } from "react";

function useModal(init) {
  const [modal, setModal] = useState(init);

  function setModalHook() {
    if (modal === "none") {
      setModal("block");
    } else {
      setModal("none");
    }
  }

  return [modal, setModalHook];
}

export default useModal;

// import { useState, useRef, useCallback, useEffect } from "react";

// function useModal(init) {
//   console.log(init, "init");
//   const [modal, setModal] = useState(init);
//   useEffect(() => {
//     setModal((prev) => !prev);
//   }, [init]);

//   return [modal];
// }

// export default useModal;
