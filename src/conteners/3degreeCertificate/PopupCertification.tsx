import { Children, ReactNode } from "react";

interface Iprops {
  trigger: boolean;
  children: ReactNode;
  setTrigg: (value: boolean) => void;
  trigg: boolean;
}

const PopupCertification = (props: Iprops) => {
  return (
    <>
      {props.trigger ? (
        <>
          <div className=" fixed z-10  h-screen w-screen bg-opacity-20 bg-black top-0 left-0 flex justify-center items-center ">
            <div className="  bg-slate-200 w-[70%] h-[60%] grid place-items-center place-content-center ">
              <button 
              className=" border border-2 border-red-400"
              onClick={() => props.setTrigg(!props.trigg)}>
                {" "}
                close{" "}
              </button>
              <div>{props.children}</div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PopupCertification;
