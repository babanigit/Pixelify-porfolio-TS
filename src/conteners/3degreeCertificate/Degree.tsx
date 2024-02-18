import React from "react";
import { ThemeDataType } from "../../assets/theme";
import { NavLink } from "react-router-dom";
interface Iprops {
  theme: ThemeDataType;
}
const Degree = ({ theme }: Iprops) => {
  const web = "<University Website/>";
  return (
    <>
      {/* add place-items-center to place all child div in center */}
      <div className=" h-screen w-screen grid grid-flow-col grid-cols-4 place-items-center">
        <div className=" grid place-items-center ">
          <div>
            <img
              className=" w-36 "
              src={require(`../../assets/png/mario2.png`)}
              alt="profile image"
            />
          </div>
          <div className="text-4xl "> Degree </div>
        </div>

        <div
          style={{ borderColor: theme.text }}
          className=" grid bg-yellow-30 col-span-3 place-content-center h-[50%] w-[70%] border-4 rounded-md p-[5%] "
        >
          <div className="  bg-red-40 grid justify-between items-center text-3xl grid-flow-col px-[3%] font-bold">
            <div>Tilak Maharashtra Vidyapeeth </div>
            <div>2021 - 2024 </div>
          </div>
          <div className="  bg-red-40 grid justify-center items-center text-2xl">
            Bachelor in Computer Application
          </div>
          <div className="  bg-red-40 grid justify-center items-center text-xl ">
            <div>
              ~ I have studied core subjects like Data Structures, DBMS,
              Networking, Security, Object Oriented Programming, Web Development
              etc.
            </div>
            <div>
              ~ I have implemented several projects based on what I've learnt.
            </div>
          </div>
          <div className="  bg-red-40 grid justify-end items-center p-[2%]">
            <NavLink to={"https://www.tmv.edu.in/"}> {web} </NavLink>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Degree;
