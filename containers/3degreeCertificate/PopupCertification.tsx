import { Children, ReactNode } from "react";
// import { ThemeDataType } from "../../../assets/theme";

interface Iprops {
  trigger: boolean;
  children: ReactNode;
  setTrigg: (value: boolean) => void;
  trigg: boolean;
  // theme: ThemeDataType;
}

const PopupCertification = (props: Iprops) => {
  return (
    <>
      {props.trigger ? (
        <>
          <div className=" fixed z-10  h-screen w-screen bg-opacity-20 bg-black top-0 left-0 flex justify-center items-center ">
            <div
              // style={{ backgroundColor: props.theme.body }}
              className="   w-[80%] h-[70%] grid place-items-center  grid-flow-row grid-rows-12 "
            >
              <div className="  w-full h-auto grid justify-end px-[2%] ">
                <button
                // style={{ borderColor:props.theme.text}}
                  className=" border-2   w-7 grid place-items-center border-2 border-gray-700 rounded-sm"
                  onClick={() => props.setTrigg(!props.trigg)}
                >
                  x{" "}
                </button>
              </div>

              <div className=" w-full h-full row-span-11 ">
                {props.children}
              </div>
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
