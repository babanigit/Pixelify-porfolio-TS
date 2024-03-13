import { ThemeDataType } from "../../assets/theme";
import { socialMediaLinks } from "../../assets/Links";
import SocialLinks from "../../components/3SocialLinks/SocialLinks";

interface Iprops {
  theme: ThemeDataType;
}
const ContactMe = ({ theme }: Iprops) => {
  const resu = "<Resume/>";
  const send = "<Send/>";
  return (
    <div className="  h-screen w-screen grid grid-flow-col grid-cols-3 place-items-center  ">
      {/* div 1  */}

      <div className="  h-full w-full grid justify-center items-center bg-purple-400 bg-opacity-50 ">
        <img
          className=" w-64"
          src={require(`../../assets/jpg/me306kb.jpg`)}
          alt="profile img"
        />
      </div>

      {/* div 2 */}

      <div
        style={{ borderColor: theme.text }}
        className=" h-[60%] w-auto col-span-2 grid-rows-4 border-4 rounded-md  grid items-center p-[3%] "
      >
        <div className=" h-full  text-3xl grid grid-flow-col justify-center gap-3  items-center  row-span-1 ">
          <div>Contact</div>
          <div> <img
          className=" w-20"
          src={require(`../../assets/png/pngegg.png`)}
          alt="profile im"
        /> </div>
        </div>

        <div className=" h-full grid row-span-2  ">
          <form
            action=""
            className=" grid gap-2 grid-flow-row place-items-end "
          >
            <input
              type="text"
              style={{ background: theme.body, borderColor: theme.text }}
              placeholder="your email"
              className="border px-[2%] border-5 rounded-md  border-white w-full "
            />
            <input
              type="text"
              style={{ background: theme.body, borderColor: theme.text }}
              placeholder="message"
              className=" h-[100px] px-[2%] border border-5 rounded-md  border-white w-full "
            />
            <button
              style={{ borderColor: theme.text }}
              className=" w-[20%]  grid border border-5 rounded-md "
            >
              {send}
            </button>{" "}
          </form>
        </div>
        <div>
          <SocialLinks theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
