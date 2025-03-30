// page.tsx
'use client';
import { useEffect } from "react";
import Image from "next/image";


export default function Home() {

  useEffect(() => {
    const cv_hp_bar = document.getElementById("hp-bar") as HTMLCanvasElement;
    if (cv_hp_bar) {
      const ctx = cv_hp_bar.getContext("2d");
      if (ctx) {
        cv_hp_bar.width = 100;
        cv_hp_bar.height = 5;

        ctx.beginPath();
        ctx.moveTo(0, 3);
        ctx.lineTo(100, 3);
        ctx.strokeStyle = "rgba(122, 213, 255, 0.8)";
        ctx.lineWidth = 5;
        ctx.stroke();
      }
    } else {
      console.log('canvasを取得できません');
    }
  }, []);

    return (
      <div
        className="
          text-white text-center
          text-shadow-blue-lg
        "
      >
{/* STATUS */}
        <div className="flex-none size-4">{/* empty */}</div>
        <div className="
          grid grid-flow-col grid-cols-8 gap-4
        "
        >
          <div
            className="
              col-start-3 col-span-4
              row-span-1
              border border-white
              text-4xl
              p-4
              text-shadow-blue-lg
              shadow-[-4px_4px_66px_5px_rgba(59,_130,_246,_0.15)]
              bg-[#00102040]
            "
          >
            <span className="glow-strong-sm">STATUS</span>
          </div>
        </div>

{/* Level */}
        <div className="flex-none size-4">{/* empty */}</div>
        <div className="
          grid grid-cols-16 grid-rows-2
        "
        >
          <div
            className="
              col-start-7 col-span-2
              row-span-1 self-end
            "
          >
            <span
              className="
                text-6xl font-bold
                inline-block align-bottom
                glow-strong-xs
              "
              >
                100
              </span>
          </div>
          <div
            className="
              col-start-7 col-span-2
              row-start-2 row-span-1
              inline-block align-top
            "
          >
            <p className="text-lg glow-strong-sm">LEVEL</p>
          </div>
          <div
            className="
              col-start-9 col-span-1
              row-start-1 row-span-1
              text-lg text-right
              pt-10
            "
          >
            <span className="text-sm glow-strong-xs">JOB:</span>
          </div>
          <div
            className="
              col-start-10 col-span-6
              row-start-1 row-span-1
              text-lg text-right
              pt-10
            "
          >
            <p className="
              text-lg text-left align-top
              font-bold
              glow-strong-sm
              pl-1
              "
            >
                None
            </p>
          </div>
          <div
            className="
              col-start-9 col-span-1
              row-start-2 row-span-1
              text-lg text-right
              glow-strong-xs
            "
          >
            <span className="text-sm">TITLE:</span>
          </div>
          <div
            className="
              col-start-10 col-span-6
              row-start-2 row-span-1
              text-lg text-right pl-1
            "
          >
          <p className="
            text-lg text-left align-top
            font-bold
            glow-strong-xs
            "
          >
              None
          </p>
          </div>
        </div>

{/* HP MP FATIGUE */}
        <div className="flex-none size-4">{/* empty */}</div>
        <div className="
          grid grid-flow-col grid-cols-16
        "
        >
          <div
            className="
              col-start-2 col-span-14
              border
              bg-[#00102030]
            "
          >
            <div className="
              grid grid-flow-col grid-cols-16 grid-rows-3
            "
            >
              {/* HP */}
              <div
                className="
                  col-start-2 col-span-1
                  row-start-2 pl-2
                "
              >
                <div className="
                  flex justify-center
                  bbb
                  ">
                  <Image
                    className="
                      min-w-[25px] min-h-[25px]
                      glow-strong
                      "
                    src="/HP.svg"
                    width={20}
                    height={20}
                    alt="HP"
                    priority />
                </div>
                <div className="
                  glow-strong-sm
                  bbb">
                  <p className="">HP</p>
                </div>
              </div>
              <div
                className="
                  col-start-3 col-span-4
                  row-start-2 row-span-1
                  bbb
                "
              >
                <div className="
                  grid grid-flow-col grid-cols-1 grid-rows-2 gap-1
                "
                >
                  <div
                    className="
                      row-start-1 row-span-1
                      border rounded-xl mt-2
                      w-full
                    "
                  >
                    <canvas id="hp-bar" width={100} height={5}></canvas>
                  </div>
                  <div
                    className="
                      row-start-2 row-span-1
                      text-[10px] text-end
                      glow-strong-xs
                    "
                  >
                    220/220
                  </div>
                </div>
              </div>

              {/* MP */}
              <div
                className="
                  col-start-7 col-span-1
                  row-start-2 pl-2
                "
              >
                <div className="
                  flex justify-center">
                  <Image
                    className="
                      min-w-[25px] min-h-[25px]
                      glow-strong
                    "
                    src="/MP.svg"
                    width={25}
                    height={25}
                    alt="MP"
                    priority />
                </div>
                <div>
                  <p className="
                    glow-strong-sm
                  ">MP</p>
                </div>
              </div>
              <div
                className="
                  col-start-8 col-span-4
                  row-start-2 row-span-1
                "
              >
                <div className="
                  grid grid-flow-col grid-cols-1 grid-rows-2 gap-1
                "
                >
                  <div
                    className="
                      row-start-1 row-span-1
                      border rounded-xl mt-2
                      w-full
                    "
                  >
                    <canvas id="hp-bar" width={100} height={5}></canvas>
                  </div>
                  <div
                    className="
                      row-start-2 row-span-1
                      text-[10px] text-end
                      glow-strong-xs
                    "
                  >
                    22/22
                  </div>
                </div>
              </div>

              {/* Fatigue */}
              <div
                className="
                  col-start-13 col-span-2
                  row-start-2 pl-2
                  bbb
                "
              >
                <div
                  className="
                    grid grid-flow-col grid-cols-2 grid-rows-1
                  "
                >
                  <div className="
                    col-start-1 col-span-1
                    row-start-1 row-span-1
                    pl-2
                    bbb
                    "
                  >
                    <div>
                      <Image
                        className="
                          min-w-[40px] min-h-[40px]
                          glow-strong
                        "
                        src="/Fatigue/Fatigue_1.svg"
                        width={25}
                        height={25}
                        alt="MP"
                        priority />
                      </div>
                      <div
                        className="
                        "
                      >
                        <span className="
                            text-sm mr-2
                            glow-strong-xs
                          "
                        >FATIGUE: </span>
                      </div>
                  </div>
                  <div
                    className="
                      col-start-2 col-span-1
                      row-start-1 row-span-1
                      place-self-end place-left
                      bbb
                    "
                  ><span className="
                    text-3xl pl-1
                    glow-strong
                    ">3</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
{/* STR...*/}
        <div className="flex-none size-9">{/* empty */}</div>
        <div className="
          grid grid-flow-col grid-rows-3 bbb
        "
        >
          <div
            className="
              text-shadow-lg
            "
          >
            STATUS
          </div>
        </div>

        <footer
        className="
          row-start-3
          flex
          gap-[24px]
          flex-wrap
          items-center
          justify-center
        "
      >
      </footer>
      </div>
    );
  }