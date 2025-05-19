import Link from "next/link";
// import { ThemeDataType } from "../../assets/theme";

// interface Iprops {
//   theme: ThemeDataType;
// }

const HeaderPart3 = () => {
  const contact = "<Contact/>";
  const eduCert = "<Certifications/>";
  const project = "<Projects/>";
  const home = "<Skills/>";

  return (
    <div className="w-screen h-14 fixed bottom-0 bg-opacity-0 grid grid-flow-col justify-between items-center px-3 text-xl">
      <div>
        <div>
          <Link href="/projects">{project}</Link>
        </div>
        <div>
          <Link href="/edu">{eduCert}</Link>
        </div>
      </div>
      <div className="grid text-right">
        <div>
          <Link href="/skills">{home}</Link>
        </div>
        <div>
          <Link href="/contact">{contact}</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderPart3;
