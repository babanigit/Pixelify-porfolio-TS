import React, { useState } from "react";
import Image from "../Elements/Image";
import Typography from "../Elements/Typography";
import RowContainer from "../Elements/RowContainer";
import DropdownHeader from "../Elements/DropdownHeader";
import Divider from "../Elements/Divider";
import ColumnContainer from "../Elements/ColumnContainer";
// import Switch from "../Elements/Switch";
import Link from "../Elements/Link";
import DropdownMenu from "../Elements/DropdownMenu";
import Dropdown from "../Elements/Dropdown";
import Header from "../Elements/Header";
// import { Avatar } from "../Elements/Avatar";

export default function Header2(props) {
  let [checked, setChecked] = useState(true);
  const [currTheme, setCurrTheme] = useState(props.theme);

  const Click = "click</>  .";
  const Aniket = "aniket</> .";

  function toggleTheme(params) {
    if (currTheme === "light") {
      props.setTheme("dark");
      // localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
      setChecked(!checked);
    } else {
      props.setTheme("light");
      // localStorage.setItem("theme", "light");
      setCurrTheme("light");
      setChecked(!checked);
    }

    console.log("on");
    setChecked(!checked);
  }

  return (
    <div
      className=" fixed w-screen"
      // style={{background:props.theme.body}}
    >
      <Header
        style={{ background: props.theme.body, color: props.theme.text }}
        className="rounded-[None] max-w-[1280px] w-[100%] flex justify-between items-center  md:rounded-[None] md:max-w-[100%] md:w-[100%] md:flex md:justify-between md:items-center md: lg:rounded-[None] lg:max-w-[100%] lg:w-[100%] lg:flex lg:justify-between lg:items-center lg:"
      >
        <RowContainer
          className="rounded-[None] items-center md:rounded-[None] md:items-center lg:rounded-[None] lg:items-center"
          gap="10px"
        >
          {/* <Image
                style={{color:props.theme.text}}

          src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjMuOTA4IDEyLjMzMS0zLjk2My04LjU4N2MtLjQ4OS0xLjA1OS0xLjU1OC0xLjc0NC0yLjcyNS0xLjc0NGgtMTAuNDRjLTEuMTY3IDAtMi4yMzYuNjg1LTIuNzI0IDEuNzQzbC0zLjk2NCA4LjU4OGMtLjA2MS4xMzEtLjA5Mi4yNzQtLjA5Mi40MTl2Ni4yNWMwIDEuNjU0IDEuMzQ2IDMgMyAzaDE4YzEuNjU0IDAgMy0xLjM0NiAzLTN2LTYuMjVjMC0uMTQ1LS4wMzEtLjI4OC0uMDkyLS40MTl6bS0xOC4wMzYtNy43NWMuMTYzLS4zNTMuNTE5LS41ODEuOTA4LS41ODFoMTAuNDRjLjM4OSAwIC43NDUuMjI4LjkwOC41ODFsMy40MjQgNy40MTloLTIuMDU5Yy0uNzc4IDAtMS40NTIuNTAxLTEuNjc2IDEuMjQ3bC0xLjA3MyAzLjU3NWMtLjAzMS4xMDYtLjEyNy4xNzgtLjIzOC4xNzhoLTkuMDEyYy0uMTExIDAtLjIwNy0uMDcyLS4yMzktLjE3OWwtMS4wNzMtMy41NzRjLS4yMjQtLjc0Ni0uODk3LTEuMjQ3LTEuNjc2LTEuMjQ3aC0yLjA1OHoiLz48L3N2Zz4="
          className="lg:rounded-[None] lg:"
          size="20px"
          radius="4px"
        ></Image> */}
          <Typography
            className="rounded-[None]  text-[14px] md:rounded-[None] md:text-[15px] lg:rounded-[None] "
            variantType="h4"
          >
            <Link className=" text-3xl" href="/">
              {" "}
              {Aniket}
            </Link>
          </Typography>
        </RowContainer>
        <Dropdown
          className="rounded-[None]  w-[fit-content] md:rounded-[None] md: md:w-[fit-content] lg:rounded-[None] lg: lg:w-[fit-content]"
          closeOnClickOutside={true}
        >
          <DropdownHeader
            className="rounded-[None]  w-[fit-content] flex items-baseline gap-x-[10px] md:rounded-[None] md: md:w-[fit-content] md:flex md:items-baseline md:gap-x-[10px] lg:rounded-[None] lg: lg:w-[fit-content] lg:flex lg:items-baseline lg:gap-x-[10px]"
            openIcon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQwLjgzNSAyNDAuODM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAuODM1IDI0MC44MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJFeHBhbmRfTGVzcyIgZD0iTTEyOS4wMDcsNTcuODE5Yy00LjY4LTQuNjgtMTIuNDk5LTQuNjgtMTcuMTkxLDBMMy41NTUsMTY1LjgwM2MtNC43NCw0Ljc0LTQuNzQsMTIuNDI3LDAsMTcuMTU1DQoJCWM0Ljc0LDQuNzQsMTIuNDM5LDQuNzQsMTcuMTc5LDBsOTkuNjgzLTk5LjQwNmw5OS42NzEsOTkuNDE4YzQuNzUyLDQuNzQsMTIuNDM5LDQuNzQsMTcuMTkxLDBjNC43NC00Ljc0LDQuNzQtMTIuNDI3LDAtMTcuMTU1DQoJCUwxMjkuMDA3LDU3LjgxOXoiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            closeIcon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1MS44NDdweCIgaGVpZ2h0PSI0NTEuODQ3cHgiIHZpZXdCb3g9IjAgMCA0NTEuODQ3IDQ1MS44NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MS44NDcgNDUxLjg0NzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxDQoJCWMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDANCgkJYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
            iconSize="10px"
            w="10"
            h="10"
          >
            <RowContainer
              className="rounded-[None]  items-center md:rounded-[None] md: md:items-center lg:rounded-[None] lg: lg:items-center"
              gap="10px"
            >
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  <div className=" text-2xl">{Click}</div>
                </Typography>
            </RowContainer>
          </DropdownHeader>

          <DropdownMenu
            style={{ background: props.theme.body, color: props.theme.text }}
            className="rounded-[None]  w-[280px] p-[10px] absolute bg-[#ffffffff] right-[0px] top-[50px] md:rounded-[None] md: md:w-[280px] md:p-[10px] md:absolute md:bg-[#ffffffff] md:right-[0px] md:top-[50px] lg:rounded-[None] lg: lg:w-[280px] lg:p-[10px] lg:absolute lg:bg-[#ffffffff] lg:right-[0px] lg:top-[50px]"
            gap="0px"
          >
            <RowContainer
              className="rounded-[None]  w-[100%] items-center md:rounded-[None] md: md:w-[100%] md:items-center lg:rounded-[None] lg: lg:w-[100%] lg:items-center"
              gap="10px"
            >
              <Typography
                className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                variantType="subtitle"
              >
                Bilson
              </Typography>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="rounded-[None]  ml-[auto] md:rounded-[None] md: md:ml-[auto] lg:rounded-[None] lg: lg:ml-[auto]"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer>
            <Divider
              className="lg:rounded-[None] lg:"
              orientation="horizontal"
              dividerWidth="1px"
              rootColor="rgb(232, 232, 235)"
            ></Divider>
            <ColumnContainer className="lg:rounded-[None] lg:" gap="10px">
              {/* <RowContainer
              className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
              gap="0px"
            >
              <RowContainer
                className="lg:rounded-[None] lg: lg:items-center"
                gap="15px"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQ4OS41MTQgMjk2LjY5NS0yMS4zLTE3LjUzNGMtMTQuNTktMTIuMDExLTE0LjU2NC0zNC4zMzUuMDAxLTQ2LjMyMmwyMS4yOTktMTcuNTM0YzE1LjE1Ny0xMi40NzkgMTkuMDM0LTMzLjg3NyA5LjIxOC01MC44ODJsLTQyLjA1OC03Mi44NDZjLTkuODE4LTE3LjAwNC0zMC4yOTItMjQuMzQ0LTQ4LjY3NC0xNy40NThsLTI1LjgzNSA5LjY3OWMtMTcuNjk2IDYuNjI4LTM3LjAxNi00LjU1MS00MC4xMTctMjMuMTYxbC00LjUzNS0yNy4yMTRjLTMuMjI4LTE5LjM2Ni0xOS44MjEtMzMuNDIzLTM5LjQ1NS0zMy40MjNoLTg0LjExNWMtMTkuNjM1IDAtMzYuMjI5IDE0LjA1Ny0zOS40NTYgMzMuNDI0bC00LjUzNiAyNy4yMTNjLTMuMTA3IDE4LjY0My0yMi40NTMgMjkuNzc4LTQwLjExNiAyMy4xNjJsLTI1LjgzNS05LjY4Yy0xOC4zODMtNi44ODYtMzguODU1LjQ1NS00OC42NzQgMTcuNDU4bC00Mi4wNTcgNzIuODQ1Yy05LjgxNyAxNy4wMDMtNS45NDEgMzguNDAyIDkuMjE4IDUwLjg4MmwyMS4yOTkgMTcuNTM0YzE0LjU5MiAxMi4wMTIgMTQuNTYzIDM0LjMzNCAwIDQ2LjMyMmwtMjEuMyAxNy41MzRjLTE1LjE1OCAxMi40OC0xOS4wMzUgMzMuODc5LTkuMjE4IDUwLjg4Mmw0Mi4wNTggNzIuODQ2YzkuODE4IDE3LjAwMyAzMC4yODYgMjQuMzQ0IDQ4LjY3NCAxNy40NThsMjUuODM0LTkuNjc5YzE3LjY5OS02LjYzMSAzNy4wMTUgNC41NTYgNDAuMTE2IDIzLjE2MWw0LjUzNiAyNy4yMTJjMy4yMjggMTkuMzY5IDE5LjgyMiAzMy40MjYgMzkuNDU2IDMzLjQyNmg4NC4xMTVjMTkuNjM0IDAgMzYuMjI4LTE0LjA1NyAzOS40NTUtMzMuNDI0bDQuNTM1LTI3LjIxMmMzLjEwNi0xOC42MzggMjIuNDUxLTI5Ljc4MSA0MC4xMTctMjMuMTYxbDI1LjgzNiA5LjY3OGMxOC4zODcgNi44ODcgMzguODU2LS40NTQgNDguNjc0LTE3LjQ1OGw0Mi4wNTktNzIuODQ3YzkuODE1LTE3LjAwMyA1LjkzOC0zOC40MDItOS4yMTktNTAuODgxem0tNjcuNDgxIDEwMy43MjgtMjUuODM1LTkuNjc5Yy00MS4yOTktMTUuNDcxLTg2LjM3IDEwLjYzLTkzLjYwNSA1NC4wNDNsLTQuNTM1IDI3LjIxM2gtODQuMTE1bC00LjUzNi0yNy4yMTNjLTcuMjQ5LTQzLjQ5Ny01Mi4zODYtNjkuNDg0LTkzLjYwNS01NC4wNDNsLTI1LjgzNSA5LjY3OS00Mi4wNTctNzIuODQ2IDIxLjI5OS0xNy41MzRjMzQuMDQ5LTI4LjAzIDMzLjk3OC04MC4xMTQgMC0xMDguMDg2bC0yMS4yOTktMTcuNTM0IDQyLjA1OC03Mi44NDYgMjUuODM0IDkuNjc5YzQxLjMgMTUuNDcgODYuMzctMTAuNjMgOTMuNjA1LTU0LjA0M2w0LjUzNS0yNy4yMTNoODQuMTE1bDQuNTM1IDI3LjIxM2M3LjI1IDQzLjUwMiA1Mi4zODkgNjkuNDgxIDkzLjYwNSA1NC4wNDNsMjUuODM1LTkuNjc5IDQyLjA2NyA3Mi44MzZzLS4wMDMuMDAzLS4wMTEuMDA5bC0yMS4yOTggMTcuNTM0Yy0zNC4wNDggMjguMDI4LTMzLjk4IDgwLjExMy0uMDAxIDEwOC4wODZsMjEuMyAxNy41MzR6bS0xNjYuMDMzLTI0My4wOWMtNTQuNDA1IDAtOTguNjY3IDQ0LjI2Mi05OC42NjcgOTguNjY3czQ0LjI2MiA5OC42NjcgOTguNjY3IDk4LjY2NyA5OC42NjctNDQuMjYyIDk4LjY2Ny05OC42NjctNDQuMjYyLTk4LjY2Ny05OC42NjctOTguNjY3em0wIDE1Ny4zMzRjLTMyLjM0OSAwLTU4LjY2Ny0yNi4zMTgtNTguNjY3LTU4LjY2N3MyNi4zMTgtNTguNjY3IDU4LjY2Ny01OC42NjcgNTguNjY3IDI2LjMxOCA1OC42NjcgNTguNjY3LTI2LjMxOCA1OC42NjctNTguNjY3IDU4LjY2N3oiLz48L3N2Zz4="
                  className="lg:rounded-[None] lg:"
                  size="20px"
                  radius="4px"
                ></Image>
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  Settings
                </Typography>
              </RowContainer>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="lg:rounded-[None] lg:"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer> */}

              {/* <RowContainer
              className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
              gap="0px"
            >
              <RowContainer
                className="lg:rounded-[None] lg: lg:items-center"
                gap="15px"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkxheWVyXzJfMDAwMDAwNzE1MjQ4MTg0MTY0NDk4ODk3OTAwMDAwMTI2ODYzODEyNDQ1MjI0MDkzODJfIj48ZyBpZD0iTGF5ZXJfMV9jb3B5XzkiPjxnIGlkPSJfMzEiPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjUxLjIiIHI9IjUxLjIiLz48cGF0aCBkPSJtMTQ3LjQgNzVjMjAgMjAgMjAgNTIuNCAwIDcyLjRzLTUyLjQgMjAtNzIuNCAwLTIwLTUyLjQgMC03Mi40YzIwLTIwIDUyLjQtMjAgNzIuNCAweiIvPjxwYXRoIGQ9Im01MS4yIDIwNC44YzI4LjMgMCA1MS4yIDIyLjkgNTEuMiA1MS4ycy0yMi45IDUxLjItNTEuMiA1MS4yLTUxLjItMjIuOS01MS4yLTUxLjIgMjIuOS01MS4yIDUxLjItNTEuMnoiLz48cGF0aCBkPSJtNzUgMzY0LjZjMjAtMjAgNTIuNC0yMCA3Mi40IDBzMjAgNTIuNCAwIDcyLjQtNTIuNCAyMC03Mi40IDBjLTIwLTIwLTIwLTUyLjQgMC03Mi40eiIvPjxwYXRoIGQ9Im0yMDQuOCA0NjAuOGMwLTI4LjMgMjIuOS01MS4yIDUxLjItNTEuMnM1MS4yIDIyLjkgNTEuMiA1MS4yLTIyLjkgNTEuMi01MS4yIDUxLjJjLTI4LjMgMC01MS4yLTIyLjktNTEuMi01MS4yeiIvPjxwYXRoIGQ9Im0zNjQuNiA0MzdjLTIwLTIwLTIwLTUyLjQgMC03Mi40czUyLjQtMjAgNzIuNCAwIDIwIDUyLjQgMCA3Mi40LTUyLjQgMjAtNzIuNCAweiIvPjxwYXRoIGQ9Im00NjAuOCAzMDcuMmMtMjguMyAwLTUxLjItMjIuOS01MS4yLTUxLjJzMjIuOS01MS4yIDUxLjItNTEuMiA1MS4yIDIyLjkgNTEuMiA1MS4yLTIyLjkgNTEuMi01MS4yIDUxLjJ6Ii8+PHBhdGggZD0ibTQzNyAxNDcuNGMtMjAgMjAtNTIuNCAyMC03Mi40IDBzLTIwLTUyLjQgMC03Mi40IDUyLjQtMjAgNzIuNCAwYzIwIDIwIDIwIDUyLjQgMCA3Mi40eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="
                  className="lg:rounded-[None] lg:"
                  size="20px"
                  radius="4px"
                ></Image>
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  Identity
                </Typography>
              </RowContainer>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="lg:rounded-[None] lg:"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer> */}

              {/* <RowContainer
              className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
              gap="0px"
            >
              <RowContainer
                className="lg:rounded-[None] lg: lg:items-center"
                gap="15px"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDAsNTkuOTk5NTU2NTQxNDQyODcpIj48cGF0aCBkPSJNMzUgMzYuMzUxdi03LjE0YzAtLjI2LS4xLS41LS4yNy0uNjlsLTMuMzktMy41NiAzLjQzLTQuMTNjLjMtLjM2LjMxLS44OC4wMi0xLjI1bC0zLjUyLTQuNTcgMy41MS00LjM5Yy4zMi0uMzkuMjktLjk3LS4wNy0xLjMzbC00LTRhLjk5Ni45OTYgMCAwIDAtMS40MSAwbC00IDRhMSAxIDAgMCAwLS4zLjcxdjI2LjM1Yy0zLjEgMS43OS01IDUuMDUtNSA4LjY1IDAgNS41MSA0LjQ5IDEwIDEwIDEwIDUuNTIgMCAxMC00LjQ5IDEwLTEwIDAtMy42LTEuOS02Ljg2LTUtOC42NXptLTUgMTMuNjVjLTEuNjUgMC0zLTEuMzUtMy0zczEuMzUtMyAzLTNjMS42NiAwIDMgMS4zNSAzIDNzLTEuMzQgMy0zIDN6IiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                  className="lg:rounded-[None] lg:"
                  size="20px"
                  radius="4px"
                ></Image>
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  Import passwords
                </Typography>
              </RowContainer>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="lg:rounded-[None] lg:"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer> */}

              {/* <RowContainer
              className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
              gap="0px"
            >
              <RowContainer
                className="lg:rounded-[None] lg: lg:items-center"
                gap="15px"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDI2IDQyNi42NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsNDI3LjMzNTk3OTQ2MTY2OTksMCkiPjxwYXRoIGQ9Ik0zNjMgMzczLjMzMmMwIDEuNjU2LjM4NyAzLjI5IDEuMTI1IDQuNzczbDIxLjMzNiA0Mi42NjVhMTAuNjU5IDEwLjY1OSAwIDAgMCA5LjUzOSA1Ljg5OCAxMC42NiAxMC42NiAwIDAgMCA5LjU0My01Ljg5OGwyMS4zMzItNDIuNjY1YTEwLjY2NiAxMC42NjYgMCAwIDAgMS4xMjUtNC43NzNWMTA2LjY2OGgtNjR6TTM5NSAyMS4zMzJjLTE3LjY2NC4wMi0zMS45OCAxNC4zMzYtMzIgMzJ2MzJoNjR2LTMyYy0uMDItMTcuNjY0LTE0LjMzMi0zMS45OC0zMi0zMnpNMzA5LjY2OCAyMS4zMzJIMjY3djMyQzI2NyA1OS4yMjIgMjYyLjIyNyA2NCAyNTYuMzM2IDY0Yy01Ljg5IDAtMTAuNjY4LTQuNzc3LTEwLjY2OC0xMC42NjhWMTAuNjY4QzI0NS42NjggNC43NzggMjQwLjg5MSAwIDIzNSAwcy0xMC42NjQgNC43NzctMTAuNjY0IDEwLjY2OHYxMC42NjRoLTQyLjY2OHYzMkMxODEuNjY4IDU5LjIyMiAxNzYuODkxIDY0IDE3MSA2NHMtMTAuNjY0LTQuNzc3LTEwLjY2NC0xMC42NjhWMTAuNjY4YzAtNS44OS00Ljc3Ny0xMC42NjgtMTAuNjY4LTEwLjY2OFMxMzkgNC43NzcgMTM5IDEwLjY2OHYxMC42NjRIOTYuMzM2djMyYzAgNS44OS00Ljc3NyAxMC42NjgtMTAuNjY4IDEwLjY2OFM3NSA1OS4yMjMgNzUgNTMuMzMyVjEwLjY2OEM3NSA0Ljc3OCA3MC4yMjcgMCA2NC4zMzYgMGMtNS44OSAwLTEwLjY2OCA0Ljc3Ny0xMC42NjggMTAuNjY4djEwLjY2NEgxMWExMC42NTUgMTAuNjU1IDAgMCAwLTcuNTQzIDMuMTI1Yy0yIDItMy4xMjUgNC43MTUtMy4xMjEgNy41NDN2Mzg0YTEwLjY1IDEwLjY1IDAgMCAwIDMuMTIxIDcuNTQzYzIgMi4wMDQgNC43MTUgMy4xMjUgNy41NDMgMy4xMjVoMjk4LjY2OGMyLjgyOCAwIDUuNTQzLTEuMTIxIDcuNTQzLTMuMTI1IDIuMDA0LTIgMy4xMjUtNC43MTUgMy4xMjUtNy41NDNWMzJjMC0yLjgyOC0xLjEyMS01LjU0My0zLjEyNS03LjU0M2ExMC42NTUgMTAuNjU1IDAgMCAwLTcuNTQzLTMuMTI1em0tNjQgMzIwSDc1Yy01Ljg5IDAtMTAuNjY0LTQuNzczLTEwLjY2NC0xMC42NjRTNjkuMTA5IDMyMCA3NSAzMjBoMTcwLjY2OGM1Ljg5IDAgMTAuNjY4IDQuNzc3IDEwLjY2OCAxMC42NjhzLTQuNzc3IDEwLjY2NC0xMC42NjggMTAuNjY0em0wLTY0SDc1Yy01Ljg5IDAtMTAuNjY0LTQuNzczLTEwLjY2NC0xMC42NjRTNjkuMTA5IDI1NiA3NSAyNTZoMTcwLjY2OGM1Ljg5IDAgMTAuNjY4IDQuNzc3IDEwLjY2OCAxMC42NjhzLTQuNzc3IDEwLjY2NC0xMC42NjggMTAuNjY0em0wLTY0SDc1Yy01Ljg5IDAtMTAuNjY0LTQuNzczLTEwLjY2NC0xMC42NjRTNjkuMTA5IDE5MiA3NSAxOTJoMTcwLjY2OGM1Ljg5IDAgMTAuNjY4IDQuNzc3IDEwLjY2OCAxMC42NjhzLTQuNzc3IDEwLjY2NC0xMC42NjggMTAuNjY0em0wLTY0SDc1Yy01Ljg5IDAtMTAuNjY0LTQuNzczLTEwLjY2NC0xMC42NjRTNjkuMTA5IDEyOCA3NSAxMjhoMTcwLjY2OGM1Ljg5IDAgMTAuNjY4IDQuNzc3IDEwLjY2OCAxMC42NjhzLTQuNzc3IDEwLjY2NC0xMC42NjggMTAuNjY0em0wIDAiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9zdmc+"
                  className="lg:rounded-[None] lg:"
                  size="20px"
                  radius="4px"
                ></Image>
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  Checkin Daily
                </Typography>
              </RowContainer>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="lg:rounded-[None] lg:"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer> */}

              {/* <RowContainer
              className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
              gap="0px"
            >
              <RowContainer
                className="lg:rounded-[None] lg: lg:items-center"
                gap="15px"
              >
                <Image
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI5My4zNzNweCIgaGVpZ2h0PSIyOTMuMzczcHgiIHZpZXdCb3g9IjAgMCAyOTMuMzczIDI5My4zNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5My4zNzMgMjkzLjM3MzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEzMC4yNjUsMTYyLjkwNGMtMjQuMTYyLDAtOTUuMjc0LDAtOTUuMjc0LDBjLTcuNTQ5LDAtMTMuNzI2LDYuMTc2LTEzLjcyNiwxMy43MjV2MTAzLjAyDQoJCQkJYzAsNy41NDksNi4xNzcsMTMuNzI1LDEzLjcyNiwxMy43MjVjMCwwLDcyLjYsMCw5Ni44NzYsMGMzLjIyOSwwLDMuMjI5LTMuNDY5LDMuMjI5LTMuNDY5VjE2Ny41NjgNCgkJCQlDMTM1LjA5NSwxNjcuNTY4LDEzNS4wOTUsMTYyLjkwNCwxMzAuMjY1LDE2Mi45MDR6Ii8+DQoJCQk8cGF0aCBkPSJNMjU4LjM4MywxNjIuOTA0YzAsMC03MS4zODQsMC05NS4xNzcsMGMtNS43OTcsMC00LjkyOSw2LjAzNy00LjkyOSw2LjAzN3YxMjEuMDc2YzAsMC0wLjA0NywzLjM1NCwzLjQ0LDMuMzU0DQoJCQkJYzI0LjE2NiwwLDk2LjY2NCwwLDk2LjY2NCwwYzcuNTQ5LDAsMTMuNzI2LTYuMTc2LDEzLjcyNi0xMy43MjVWMTc2LjYyOUMyNzIuMTA5LDE2OS4wOCwyNjUuOTMyLDE2Mi45MDQsMjU4LjM4MywxNjIuOTA0eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTEzNS4wOTUsODEuODQ2YzAsMCwwLTQuNjUxLTQuNTk2LTQuNjUxYy0yNy41MjEsMC0xMTEuMDA4LDAtMTExLjAwOCwwYy03LjU0OSwwLTEzLjcyNiw2LjE3Ny0xMy43MjYsMTMuNzI1djQyLjg0NQ0KCQkJCWMwLDcuNTQ5LDYuMTc3LDEzLjcyNSwxMy43MjYsMTMuNzI1YzAsMCw4My44NjEsMCwxMTEuMzg0LDBjNC4yMiwwLDQuMjItMy42Niw0LjIyLTMuNjZWODEuODQ2TDEzNS4wOTUsODEuODQ2eiIvPg0KCQkJPHBhdGggZD0iTTI3My44ODIsNzcuMTk1YzAsMC04My41MjEsMC0xMTEuMzYyLDBjLTQuMjQxLDAtNC4yNDEsNC4wNDEtNC4yNDEsNC4wNDF2NjIuNjc5YzAsMCwwLDMuNTc1LDUuMTU2LDMuNTc1DQoJCQkJYzI3LjYxMSwwLDExMC40NDcsMCwxMTAuNDQ3LDBjNy41NDksMCwxMy43MjYtNi4xNzYsMTMuNzI2LTEzLjcyNVY5MC45MkMyODcuNjA4LDgzLjM3MiwyODEuNDMxLDc3LjE5NSwyNzMuODgyLDc3LjE5NXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik04OC40MSw2Ny4wNGMtNi4yOCwwLTEyLjAxNi0wLjQ5OC0xNy4wNDYtMS40ODFjLTEyLjc3Ni0yLjQ5Ni0yMS41NTctNy4zNTQtMjYuODQ1LTE0Ljg1DQoJCQkJYy00LjczOC02LjcxOC02LjE4OC0xNS00LjMxMS0yNC42MTdDNDMuNDk2LDkuMjY2LDU0Ljc5NiwwLDcyLjAyNCwwYzMuNjQ2LDAsNy42NSwwLjQyMSwxMS45MDIsMS4yNTINCgkJCQljMTAuODE2LDIuMTEzLDI0LjY1LDguMzE1LDM3LjAwNywxNi41OWMyMC45NjUsMTQuMDQxLDIyLjAwMiwyMi43NywyMC45NTgsMjguMTE1Yy0xLjUzNSw3Ljg1NC04Ljg3NiwxMy40NjYtMjIuNDQzLDE3LjE1OA0KCQkJCUMxMTAuMjgyLDY1LjYwOSw5OC45NjksNjcuMDQsODguNDEsNjcuMDR6IE03Mi4wMjUsMjEuOTk5Yy02LjY3MiwwLTguOTY1LDEuODY0LTEwLjIyNCw4LjMxMQ0KCQkJCWMtMS4wMyw1LjI3MSwwLjI2OSw3LjExMiwwLjY5NSw3LjcxN2MxLjc4NCwyLjUzLDYuNDMxLDQuNjQsMTMuMDg2LDUuOTM5YzMuNTkxLDAuNzAyLDguMDI4LDEuMDczLDEyLjgyNywxLjA3Mw0KCQkJCWMxMC41NTMsMCwxOS44NS0xLjU5OSwyNi4wMTktMy4zNDhjMC40NDktMC4xMjcsMS4xNDYtMC42NTgsMC4zOTktMS4xMDNjLTguMDY1LTYuNTctMjIuODItMTUuMzQzLTM1LjExOS0xNy43NDYNCgkJCQlDNzYuODQzLDIyLjI4NCw3NC4yNTcsMjEuOTk5LDcyLjAyNSwyMS45OTl6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNMjA1LjI4MSw2Ny4wNGMwLDAsMCwwLTAuMDAyLDBjLTEwLjU1OSwwLTIxLjg3MS0xLjQzMS0zMS4wMzctMy45MjVjLTEzLjU2OC0zLjY5MS0yMC45MDgtOS4zMDQtMjIuNDQzLTE3LjE1Nw0KCQkJCWMtMS4wNDMtNS4zNDUtMC4wMDgtMTQuMDc0LDIwLjk1OS0yOC4xMTVjMTIuMzU1LTguMjc1LDI2LjE4OS0xNC40NzcsMzcuMDA3LTE2LjU5YzQuMjUyLTAuODMxLDguMjU2LTEuMjUyLDExLjg5OS0xLjI1Mg0KCQkJCWMxNy4yMzIsMCwyOC41MzEsOS4yNjcsMzEuODE2LDI2LjA5M2MxLjg3OSw5LjYxNiwwLjQzLDE3Ljg5OC00LjMwOSwyNC42MTZjLTUuMjg4LDcuNDk3LTE0LjA2OCwxMi4zNTQtMjYuODQ3LDE0Ljg1DQoJCQkJQzIxNy4yOTYsNjYuNTQxLDIxMS41Niw2Ny4wNCwyMDUuMjgxLDY3LjA0eiBNMTc5LjAzOSw0MC40NTJjLTAuNzE1LDAuNDE1LTAuMzY5LDEuMDcsMC4wMDIsMS4xNzcNCgkJCQljNi4xNjYsMS43NzMsMTUuNTYxLDMuNDExLDI2LjIzOCwzLjQxMWM0LjgwMSwwLDkuMjM2LTAuMzcxLDEyLjgyOC0xLjA3M2M2LjY1NC0xLjMsMTEuMzAzLTMuNDA5LDEzLjA4Ni01LjkzOQ0KCQkJCWMwLjQyOC0wLjYwNSwxLjcyOC0yLjQ0NiwwLjY5NS03LjcxN0MyMzAuNjMsMjMuODY0LDIyOC4zMzYsMjIsMjIxLjY2MywyMmMtMi4yMzEsMC00LjgxNSwwLjI4NC03LjY4MiwwLjg0NA0KCQkJCUMyMDEuNjgxLDI1LjI0NiwxODcuMTA0LDMzLjg4MSwxNzkuMDM5LDQwLjQ1MnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                  className="lg:rounded-[None] lg:"
                  size="20px"
                  radius="4px"
                ></Image>
                <Typography
                  className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                  variantType="subtitle"
                >
                  Invite a friend
                </Typography>
              </RowContainer>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                className="lg:rounded-[None] lg:"
                size="14px"
                radius="4px"
              ></Image>
            </RowContainer> */}
            </ColumnContainer>

            {/* <Divider
            className="lg:rounded-[None] lg:"
            orientation="horizontal"
            dividerWidth="1px"
            rootColor="rgb(232, 232, 235)"
          ></Divider> */}

            <ColumnContainer className="lg:rounded-[None] lg:" gap="10px">
              <RowContainer
                className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
                gap="0px"
              >
                <RowContainer
                  className="lg:rounded-[None] lg: lg:items-center"
                  gap="15px"
                >
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTIgOWMwLTEuNjU2ODUgMS4zNDMxNS0zIDMtM2gyMmMxLjY1NjkgMCAzIDEuMzQzMTUgMyAzdjFoLTI4em0wIDNoMjh2MTFjMCAxLjY1NjktMS4zNDMxIDMtMyAzaC0yMmMtMS42NTY4NSAwLTMtMS4zNDMxLTMtM3ptMTYgN2MtLjU1MjMgMC0xIC40NDc3LTEgMXMuNDQ3NyAxIDEgMWg2Yy41NTIzIDAgMS0uNDQ3NyAxLTFzLS40NDc3LTEtMS0xeiIgZmlsbD0icmdiKDAsMCwwKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                    className="lg:rounded-[None] lg:"
                    size="20px"
                    radius="4px"
                  ></Image>
                  <Typography
                    className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                    variantType="subtitle"
                  >
                    Download extension
                  </Typography>
                </RowContainer>
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxwYXRoIGQ9Im0yNi42OCAzLjg2N2gtMTguNTA1YTEgMSAwIDAgMCAwIDJoMTYuNTQ0bC0yMC41MTkgMjAuNTJhMSAxIDAgMSAwIDEuNDEzIDEuNDEzbDIwLjUyLTIwLjUydjE2LjU0NWExIDEgMCAwIDAgMiAwdi0xOC41MDRhMS40NTYgMS40NTYgMCAwIDAgLTEuNDUzLTEuNDU0eiIgZmlsbD0icmdiKDAsMCwwKSIvPjwvZz48L3N2Zz4="
                  className="lg:rounded-[None] lg:"
                  size="14px"
                  radius="4px"
                ></Image>
              </RowContainer>

              <RowContainer
                className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
                gap="0px"
              >
                <RowContainer
                  className="lg:rounded-[None] lg: lg:items-center"
                  gap="15px"
                >
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yMCA4Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNFptLTggNy40MmMuNzcgMCAxLjU0LS4yOSAyLjEyLS44OGw0LjY3LTQuNjdBNi4wMDggNi4wMDggMCAwIDEgMTQgMy45OWMwLS4zNC4wNC0uNjcuMDktMUg1Yy0xLjgxIDAtMy4zOC45Ny00LjI2IDIuNDFsOS4xNCA5LjE1YTMgMyAwIDAgMCAyLjEyLjg4Wm05Ljc2LTUuNjktNi4yMyA2LjIzYTUuMDIyIDUuMDIyIDAgMCAxLTcuMDggMEwuMDUgNy41NEMuMDQgNy42OSAwIDcuODQgMCA4djExYzAgMi43NiAyLjI0IDUgNSA1aDE0YzIuNzYgMCA1LTIuMjQgNS01bC0uMDItMTAuNTNjLS42NC41Ny0xLjM5IDEtMi4yMiAxLjI2WiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                    className="lg:rounded-[None] lg:"
                    size="20px"
                    radius="4px"
                  ></Image>
                  <Typography
                    className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                    variantType="subtitle"
                  >
                    Download mobile app
                  </Typography>
                </RowContainer>

                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxwYXRoIGQ9Im0yNi42OCAzLjg2N2gtMTguNTA1YTEgMSAwIDAgMCAwIDJoMTYuNTQ0bC0yMC41MTkgMjAuNTJhMSAxIDAgMSAwIDEuNDEzIDEuNDEzbDIwLjUyLTIwLjUydjE2LjU0NWExIDEgMCAwIDAgMiAwdi0xOC41MDRhMS40NTYgMS40NTYgMCAwIDAgLTEuNDUzLTEuNDU0eiIgZmlsbD0icmdiKDAsMCwwKSIvPjwvZz48L3N2Zz4="
                  className="lg:rounded-[None] lg:"
                  size="14px"
                  radius="4px"
                ></Image>
              </RowContainer>
            </ColumnContainer>

            <Divider
              className="lg:rounded-[None] lg:"
              orientation="horizontal"
              dividerWidth="1px"
              rootColor="rgb(232, 232, 235)"
            ></Divider>

            <ColumnContainer
              className="rounded-[None]  items-start md:rounded-[None] md: md:items-start lg:rounded-[None] lg: lg:items-start"
              gap="10px"
            >
              {/* dark mode container */}
              <RowContainer
                className="rounded-[None]  w-[100%] items-center justify-between md:rounded-[None] md: md:w-[100%] md:items-center md:justify-between lg:rounded-[None] lg: lg:w-[100%] lg:items-center lg:justify-between"
                gap="0px"
              >
                <RowContainer
                  className="lg:rounded-[None] lg: lg:items-center"
                  gap="15px"
                >
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQ1LjcxMiAyNDUuNzEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSwyNDUuNzExOTk3OTg1ODM5ODQsMCkiPjxwYXRoIGQ9Ik00Ljg1NCAxNzEuOTUyYzE5LjAzNyA0My40MjMgNjIuMzkyIDczLjc2IDExMi44NDMgNzMuNzYgNjguMDIxIDAgMTIzLjE2MS01NS4xNCAxMjMuMTYxLTEyMy4xNjFDMjQwLjg1OCA1OC42NzMgMTkyLjIzIDYuMTU4IDEyOS45NyAwYzI5LjA2MSAxOS4wMDkgNDguMjYxIDUxLjgzMyA0OC4yNjEgODkuMTUyIDAgNTguNzk5LTQ3LjY2MiAxMDYuNDYyLTEwNi40NjEgMTA2LjQ2Mi0yNS4zNTUgMC00OC42MzMtOC44NjctNjYuOTE2LTIzLjY2MnoiIHN0eWxlPSIiIGZpbGw9IiMwMzAxMDQiIGRhdGEtb3JpZ2luYWw9IiMwMzAxMDQiPjwvcGF0aD48L2c+PC9zdmc+"
                    className="lg:rounded-[None] lg:"
                    size="20px"
                    radius="4px"
                  ></Image>
                  <Typography
                    className="rounded-[None]  text-[14px] md:rounded-[None] md: md:text-[15px] lg:rounded-[None] lg:"
                    variantType="subtitle"
                  >
                    Dark mode
                  </Typography>
                </RowContainer>

                <button
                  style={{ borderColor: props.theme.text }}
                  className=" border-2 w-1/4 rounded-md "
                  onClick={toggleTheme}
                >
                  {checked ? "light" : "dark"}{" "}
                </button>

                {/* <Switch
                className="lg:rounded-[None] lg:"
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJMYXllcl8yMCIgZGF0YS1uYW1lPSJMYXllciAyMCI+PHBhdGggZD0ibTIzLjIxIDE2LjcxLTEzIDEzYTEgMSAwIDAgMSAtMS40MiAwIDEgMSAwIDAgMSAwLTEuNDJsMTIuMy0xMi4yOS0xMi4zLTEyLjI5YTEgMSAwIDAgMSAxLjQyLTEuNDJsMTMgMTNhMSAxIDAgMCAxIDAgMS40MnoiLz48L2c+PC9zdmc+"
                size="20px"
                radius="4px"
                trackWidth="35.0"
                trackHeight="20"
                trackColor="#ccc"
                thumbWidth="15"
                thumbHeight="15"
                thumbColor="#fff"
                checked={checked}
                onchange={fun}
                
              /> */}
              </RowContainer>

              {/* container 2 */}
              <Link
                className="rounded-[None]  no-underline text-[#121212ff] text-[14px] md:rounded-[None] md: md:no-underline md:text-[#121212ff] md:text-[15px] lg:rounded-[None] lg: lg:no-underline lg:text-[#121212ff]"
                variantType="subtitle"
                href="#"
                target="_self"
              >
                Get help or share feedback
              </Link>

              {/* container 3 */}

              <Link
                className="rounded-[None]  no-underline text-[#121212ff] text-[14px] md:rounded-[None] md: md:no-underline md:text-[#121212ff] md:text-[15px] lg:rounded-[None] lg: lg:no-underline lg:text-[#121212ff]"
                variantType="subtitle"
                href="#"
                target="_self"
              >
                Log out
              </Link>
            </ColumnContainer>
          </DropdownMenu>
        </Dropdown>
      </Header>
    </div>
  );
}
