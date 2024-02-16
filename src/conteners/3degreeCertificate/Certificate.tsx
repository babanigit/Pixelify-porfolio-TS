import React from "react";
import { ThemeDataType } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}

const Certificate = ({ theme }: Iprops) => {
  return (
    <div className=" h-screen w-screen  grid grid-flow-col grid-cols-4 place-items-center">
      <div className=" grid col-span-3  w-[85%] h-[75%]  items-center gap-[2%] p-[2%]  ">
        <div
          style={{ borderColor: theme.text }}
          className=" w-full h-full grid grid-flow-row border border-3 "
        >
          <div className=" grid justify-center items-center text-3xl">
            Google Data Analysis{" "}
          </div>
          <div className="  grid place-items-center">
            <div>
              ~ the fundamental concepts associated with programming in R
            </div>
            <div>
              ~ the R programming language, data visualization and its
              programming environment.
            </div>
          </div>
          <div className=" w-full flex justify-end  ">
            <div
              style={{ borderColor: theme.text }}
              className=" border-3 border w-[10%] h-[50%] items-center justify-center flex"
            >
              <a
                href="https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing"
                target="_blank"
              >
                {" "}
                pdf Link
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ borderColor: theme.text }}
          className="  w-full h-full grid grid-flow-row border border-3 "
        >
          <div className=" grid justify-center items-center text-3xl ">
            Google Data Analysis{" "}
          </div>
          <div className="  grid place-items-center">
            <div>
              ~ the fundamental concepts associated with programming in R
            </div>
            <div>
              ~ the R programming language, data visualization and its
              programming environment.
            </div>
          </div>
          <div className=" w-full flex justify-end  ">
            <div
              style={{ borderColor: theme.text }}
              className=" border-3 border w-[10%] h-[50%] items-center justify-center flex"
            >
              <a
                href="https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing"
                target="_blank"
              >
                {" "}
                pdf Link
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ borderColor: theme.text }}
          className="  w-full h-full grid grid-flow-row border border-3"
        >
          <div className=" grid justify-center items-center text-3xl">
            Google Data Analysis{" "}
          </div>
          <div className="  grid place-items-center">
            <div>
              ~ the fundamental concepts associated with programming in R
            </div>
            <div>
              ~ the R programming language, data visualization and its
              programming environment.
            </div>
          </div>
          <div className=" w-full flex justify-end  ">
            <div
              style={{ borderColor: theme.text }}
              className=" border-3 border w-[10%] h-[50%] items-center justify-center flex"
            >
              <a
                href="https://drive.google.com/file/d/1t2RocJF6KCyjz9Q0qDERneTZuUdB8SuP/view?usp=sharing"
                target="_blank"
              >
                {" "}
                pdf Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
      className=" text-4xl justify-center items-center"
      >Certifications</div>
    </div>
  );
};

export default Certificate;
