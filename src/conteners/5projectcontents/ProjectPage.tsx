
import { projects } from "../../assets/Project";
import { ThemeDataType, themes } from "../../assets/theme";
interface Iprops {
  theme:ThemeDataType;
}
const ProjectPage = (props:Iprops) => {
  const GH = "<GitHub Link/>"
  return (
    <>
      <div className=" grid grid-flow-col grid-cols-6 h-screen w-full  ">
        <div className=" grid grid-flow-row p-3 gap-3 col-span-5  grid-rows-3  ">
          {projects.map((pro) => {
            return (
              <>
                {/* this is starting point */}

                <div
                style={{borderColor:props.theme.text}}
                className="  w-full h-full  grid grid-flow-row grid-rows-7 border-2 border-gray-700 p-2 px-6 ">
                  <div className="justify-center flex w-full h-full text-2xl">
                    {pro.title}
                  </div>
                  <div className=" justify-end flex w-full h-full  text-xl">
                    {pro.language_used}
                  </div>
                  <div>
                    {" "}
                    <a
                      href={pro.project_link}
                      style={{ borderColor: props.theme.text }}
                      className=" border border-spacing-2 px-[2%] "
                      target="_blank"
                    >
                      {GH}
                    </a>{" "}
                  </div>
                  <div className=" grid row-span-4 text-lg">
                    <div>{pro.dev1}</div>
                    <div>{pro.dev2}</div>
                  </div>
                </div>

                {/* this is an end */}
              </>
            );
          })}
        </div>

        <div className=" grid place-items-center bg-red-400 bg-opacity-50  ">
          <div className=" text-xl" >projects</div>
        </div>
      </div>
      <div className=" h-screen "> </div>
    </>
  );
};

export default ProjectPage;
