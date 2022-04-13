import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-white lg:h-24 ">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        <div>
          <img
            className="mx-2"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjQ3IiB2aWV3Qm94PSIwIDAgMTc1IDQ3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDx0aXRsZT5Mb2dvOiBIYWNrIFJlYWN0b3I8L3RpdGxlPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aCBkPSJNMTkuODMgNS45NEExOC4wNyAxOC4wNyAwIDAwNS40IDIzLjU0YTE4LjEgMTguMSAwIDAwMTYuOSAxNy45NFYzMy41YTEwLjEgMTAuMSAwIDAxLTguODYtOS45NmMwLTUuMSAzLjg3LTkuMzMgOC44NS05Ljk3di0yLjQ2YTEyLjU3IDEyLjU3IDAgMDAtMTEuMzIgMTIuNDNjMCA1LjU4IDMuNzIgMTAuMzIgOC44NSAxMS45MnYzLjE3YTE1LjYxIDE1LjYxIDAgMDEtMTEuOTQtMTUuMWMwLTguMTMgNi4zNS0xNC44MiAxNC40MS0xNS40OVYuMjJDOS45LjkgMCAxMS4xIDAgMjMuNTRjMCAxMi40MyA5Ljg5IDIyLjYzIDIyLjMgMjMuMzFWNDQuNGMtMTEuMDUtLjY4LTE5LjgzLTkuNzctMTkuODMtMjAuODZBMjEgMjEgMCAwMTE5LjgzIDIuOTgiIGZpbGw9IiMzNjM0MkUiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZD0iTTI0LjkyIDB2Mi40N0EyMS4xOSAyMS4xOSAwIDAxNDQuODggMjMuNWEyMS4xNiAyMS4xNiAwIDAxLTE3LjQ3IDIwLjcydi0yLjk4QTE4LjIxIDE4LjIxIDAgMDA0MS45MyAyMy41YzAtOS41Ni03LjUyLTE3LjQxLTE3LTE4LjF2OC4wNWM1LjAxLjY1IDguOSA0LjkgOC45IDEwLjA1IDAgNS4xNC0zLjg5IDkuNC04LjkgMTAuMDV2Mi40OGM2LjM5LS42NiAxMS40LTYuMDMgMTEuNC0xMi41MyAwLTUuNjMtMy43Ni0xMC40LTguOTItMTIuMDJWOC4zQTE1LjczIDE1LjczIDAgMDEzOS40MyAyMy41YzAgOC4yLTYuNCAxNC45NS0xNC41IDE1LjYyVjQ3YzEyLjQ5LS42OCAyMi40NC0xMC45NiAyMi40NC0yMy41UzM3LjQyLjY5IDI0LjkyIDAiIGZpbGw9IiMyRDgyQjgiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZmlsbD0iIzNEMzkzNSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNjguMzUgMTkuMzh2LTcuOTZoLTkuNDd2Ny45NmgtMy4yVjEuMmgzLjJWOC42aDkuNDdWMS4yaDMuMnYxOC4xOGgtMy4yTTgyLjYyIDQuMzlsLTMuMjcgOC42N2g2LjU0bC0zLjI3LTguNjd6bTUuNTEgMTVsLTEuMzQtMy41MmgtOC4zNGwtMS4zMyAzLjUxaC0zLjYzTDgwLjYzIDEuMmgzLjk4bDcuMTQgMTguMThoLTMuNjJ6TTkyLjA1IDEwLjNjMC01LjYyIDQuMTctOS40IDkuNTQtOS40YTguMTUgOC4xNSAwIDAxNy4yOCA0LjA1bC0yLjcgMS40MmE1LjM3IDUuMzcgMCAwMC00LjU4LTIuNjRjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc5IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45NCAwIDMuNy0xLjE0IDQuNTgtMi42NGwyLjcyIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgtOS41NC05LjM5TTEyMi4zIDE5LjM4bC02LjA3LTcuNjktMS42IDEuODl2NS44aC0zLjJWMS4yaDMuMnY4LjY0bDcuMS04LjY0aDMuOTVsLTcuMzggOC41NiA3Ljk2IDkuNjJoLTMuOTVNNjYuMzUgMzMuMzZjMC0xLjc0LTEuMy0yLjg2LTMuMS0yLjg2aC00LjM4djUuNzhoNC4zOGMxLjggMCAzLjEtMS4xNSAzLjEtMi45MnptLS4zIDEyLjUybC00LTYuOGgtMy4xOHY2LjhoLTMuMTlWMjcuNjloNy45OGMzLjU5IDAgNS45NiAyLjMyIDUuOTYgNS43YTUuMTIgNS4xMiAwIDAxLTQuMzMgNS4zNGw0LjQ2IDcuMTVoLTMuN3pNNzIuNzUgNDUuODhWMjcuNjloMTIuNXYyLjgxaC05LjN2NC42OWg5LjF2Mi44aC05LjF2NS4wOGg5LjN2Mi44aC0xMi41TTk2LjAyIDMwLjg4bC0zLjI3IDguNjdoNi41NGwtMy4yNy04LjY3em01LjUgMTVsLTEuMzMtMy41MmgtOC4zNGwtMS4zMyAzLjUyaC0zLjYzbDcuMTQtMTguMTloMy45OGw3LjE0IDE4LjE5aC0zLjYyek0xMDUuNDUgMzYuODZjMC01LjYgNC4xNy05LjQgOS41NC05LjRhOC4xNSA4LjE1IDAgMDE3LjI3IDQuMDZsLTIuNyAxLjQyQTUuMzcgNS4zNyAwIDAwMTE1IDMwLjNjLTMuNiAwLTYuMjcgMi43Mi02LjI3IDYuNTYgMCAzLjc4IDIuNjcgNi41NiA2LjI3IDYuNTYgMS45MyAwIDMuNy0xLjE0IDQuNTctMi42NGwyLjczIDEuMzZhOC4zIDguMyAwIDAxLTcuMyA0LjExYy01LjM3IDAtOS41NC0zLjgxLTkuNTQtOS40TTEyOS4zIDQ1Ljg4VjMwLjVoLTUuNTF2LTIuOEgxMzh2Mi44aC01LjUydjE1LjM4aC0zLjE5TTE1NC4yNyAzNi44NmMwLTMuNzYtMi4zNi02LjU2LTYuMDEtNi41Ni0zLjY3IDAtNi4wMiAyLjgtNi4wMiA2LjU2IDAgMy43MyAyLjM1IDYuNTYgNi4wMiA2LjU2IDMuNjUgMCA2LjAxLTIuODMgNi4wMS02LjU2em0tMTUuMyAwYzAtNS40MiAzLjg1LTkuNCA5LjI5LTkuNCA1LjQyIDAgOS4yOCAzLjk4IDkuMjggOS40cy0zLjg2IDkuNC05LjI4IDkuNGMtNS40NCAwLTkuMjgtMy45OC05LjI4LTkuNHpNMTcxLjI4IDMzLjM2YzAtMS43NC0xLjMxLTIuODYtMy4xLTIuODZoLTQuMzl2NS43OGg0LjM4YzEuOCAwIDMuMS0xLjE1IDMuMS0yLjkyem0tLjMgMTIuNTJsLTQtNi44aC0zLjE5djYuOGgtMy4xOFYyNy42OWg3Ljk3YzMuNiAwIDUuOTYgMi4zMiA1Ljk2IDUuN2E1LjEyIDUuMTIgMCAwMS00LjMyIDUuMzRsNC40NiA3LjE1aC0zLjd6Ii8+CiAgPC9nPgo8L3N2Zz4K"
            alt="none"
          />
        </div>
        <div className="hidden lg:flex">
          <button className="mx-5">Bootcamps</button>
          <button className="mx-5">Professional Development</button>
          <button className="mx-5">Prepare</button>
          <button className="mx-5">Outcomes</button>
          <button className="mx-5">Events</button>
          {/* Apply Now */}
          <button className="flex items-center justify-center w-24 text-white bg-blue-500 hover:bg-blue-400 h-9">
            Apply Now
          </button>
        </div>
        <div className="sm:block lg:hidden">
          <svg
            className="w-10 m-5 text-blue-400 fill-current"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
          >
            <metadata>
              {" "}
              Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
            </metadata>
            <g>
              <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path d="M731.2,4154.1C399.2,4047.7,171.6,3786,112,3441.3c-78.7-457.5,238.3-910.7,704.3-1010.7c80.9-17,1251.1-23.4,4191.6-23.4c4461.8,0,4198-6.4,4434.2,121.3c136.2,74.5,304.3,255.3,370.2,400c225.6,493.6-31.9,1063.9-551.1,1227.7c-119.2,36.2-317,38.3-4266.1,36.2C1037.6,4192.4,846.1,4190.2,731.2,4154.1z" />
                <path d="M756.7,968.9c-434-117-721.3-566-640.4-1002.1c66-357.5,351.1-653.2,700-727.7c80.9-17,1253.2-23.4,4191.6-23.4c3598,0,4095.9,4.3,4206.5,31.9c353.2,93.6,606.4,368.1,674.5,731.9c40.4,221.3-34.1,493.6-191.5,700c-83,108.5-274.5,234-425.5,280.9c-134,42.6-206.4,42.6-4268.2,40.4C1437.6,1000.8,858.8,996.6,756.7,968.9z" />
                <path d="M778-2218.4C429-2312,171.6-2595,112-2948.2c-74.5-448.9,246.8-910.7,702.1-1006.4c68.1-14.9,1474.5-21.3,4251.2-17l4149,6.4l159.6,76.6c274.5,134.1,459.6,370.2,512.8,663.8c83,444.7-231.9,908.5-685.1,1012.8C9054.8-2178,903.5-2184.4,778-2218.4z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="p-5 lg:hidden">
        <button className="flex items-center justify-center w-full text-white bg-blue-500 hover:bg-blue-400 h-9">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
