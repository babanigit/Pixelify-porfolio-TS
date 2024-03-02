import { projects } from "../../assets/Project";
import { ThemeDataType, themes } from "../../assets/theme";
interface Iprops {
  theme: ThemeDataType;
}
const ProjectPage = (props: Iprops) => {
  const GH = "<GitHub Link/>";
  return (
    <>
      {/* project 1 */}
      <div className=" grid grid-flow-col grid-cols-6 h-auto w-auto  ">
        <div className=" grid grid-flow-row p-3 gap-3 col-span-5  grid-rows-3  ">
          {projects.page1.map((pro) => {
            return (
              <>
                {/* this is starting point */}

                <div
                  style={{ borderColor: props.theme.text }}
                  className="  w-auto h-auto  grid grid-flow-row  border-2 rounded-md  border-gray-700 p-2 px-6 "
                >
                  <div className="justify-center flex w-full h-auto text-2xl">
                    {pro.title}
                  </div>
                  <div className=" justify-end flex w-full h-auto  text-xl">
                    <i>{pro.language_used}</i>
                  </div>
                  <div>
                    {" "}
                    <a
                      href={pro.project_link}
                      style={{ borderColor: props.theme.text }}
                      className=" border border-spacing-2 rounded-md  px-[2%] "
                      target="_blank"
                      rel="noreferrer"
                    >
                      {GH}
                    </a>{" "}
                  </div>
                  <div className=" h-auto grid row-span-4 text-lg">
                    <div>{pro.dev1}</div>
                    <div>{pro.dev2}</div>
                  </div>
                </div>

                {/* this is an end */}
              </>
            );
          })}
        </div>

        <div className=" grid place-items-center place-content-center bg-red-400 bg-opacity-50  ">
          <div>
            <img
              className=" w-28 grid justify-center items-center "
              src={require(`../../assets/png/heart.png`)}
              alt="profile"
            />{" "}
          </div>
          <div className=" text-2xl">Top three Projects</div>
        </div>
      </div>

      {/* project 2 */}
      <div className=" grid grid-flow-col grid-cols-6 h-auto w-auto  ">
        <div className=" grid place-items-center bg-red-400 bg-opacity-50  ">
          <div className=" ">
            <img
              className=" w-28 grid justify-center items-center "
              src={require(`../../assets/png/mario.png`)}
              alt="profile"
            />{" "}
          </div>
        </div>

        <div className=" grid grid-flow-row p-3 gap-3 col-span-5  grid-rows-3  ">
          {projects.page2.map((pro2) => {
            return (
              <>
                {/* this is starting point */}

                <div
                  style={{ borderColor: props.theme.text }}
                  className="  w-auto h-auto  grid grid-flow-row grid-rows-7 border-2 rounded-md  border-gray-700 p-2 px-6 "
                >
                  <div className="justify-center flex w-full h-auto text-2xl">
                    {pro2.title}
                  </div>
                  <div className=" justify-end flex w-full h-auto text-xl">
                    <i>{pro2.language_used}</i>{" "}
                  </div>
                  <div>
                    {" "}
                    <a
                      href={pro2.project_link}
                      style={{ borderColor: props.theme.text }}
                      className=" border border-spacing-2 rounded-md  px-[2%] "
                      target="_blank"
                      rel="noreferrer"
                    >
                      {GH}
                    </a>{" "}
                  </div>
                  <div className=" grid row-span-4 text-lg">
                    <div>{pro2.dev1}</div>
                    <div>{pro2.dev2}</div>
                  </div>
                </div>

                {/* this is an end */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
