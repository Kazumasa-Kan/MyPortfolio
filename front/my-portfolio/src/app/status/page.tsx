// page.tsx
'use client';
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    const cv_hp_bar = document.getElementById("hp-bar") as HTMLCanvasElement;
    // const cv_mp_bar = document.getElementById("mp-bar") as HTMLCanvasElement;
    // const img_fatigue = document.getElementById("fatigue") as HTMLCanvasElement;
    // const hp_v = document.getElementById("hp-value") as HTMLCanvasElement;
    // const mp_v = document.getElementById("mp-value") as HTMLCanvasElement;
    // const fatigue_v = document.getElementById("fatigue-value") as HTMLCanvasElement;

    if (cv_hp_bar) {
      const ctx = cv_hp_bar.getContext("2d");
      if (ctx) {
        cv_hp_bar.width = 100;
        cv_hp_bar.height = 10;

        ctx.beginPath();
        ctx.moveTo(3, cv_hp_bar.height/2);
        ctx.lineTo(cv_hp_bar.width, cv_hp_bar.height/2);
        ctx.strokeStyle = "rgba(207, 235, 248, 0.8)";
        ctx.lineWidth = cv_hp_bar.height/5;
        ctx.stroke();
      }
    } else {
      console.log('canvasを取得できません');
    }
  }, []);

    return (
      <div
        className="
          text-white
          text-shadow-blue place-content-center
        "
      >
{/* STATUS */}
        <div className="flex-none size-7">{/* empty */}</div>
          <div
            className="
              border border-white
              text-4xl
              p-4
              w-80 lg:w-150
              text-center
              place-self-center
              shadow-[-4px_4px_66px_5px_rgba(59,_130,_246,_0.15)]
              bg-[#00102040]
            "
          >
            <span className="glow-strong-sm">STATUS</span>
        </div>

{/* Level-Job-Title */}
        <div className="flex-none size-9">{/* empty */}</div>
        <div className="
          grid
          grid-cols-1 md:grid-cols-2
          place-content-center gap-2
        "
        >
   {/* 100-LEVEL */}
          <div
            className="
              col-start-1 col-span-1
              place-items-center
              md:place-items-end
            "
          >
            <div className="text-center">
              <p className="text-6xl font-bold">100</p>
              <p className="text-lg glow-strong-sm">LEVEL</p>
            </div>
          </div>
  {/* job-title */}
          <div
            className="
              col-start-1 row-start-2
              md:col-start-2 md:row-start-1
              text-lg text-right
              place-items-center
              md:place-items-start md:self-end
            "
          >
            <div className="
              grid grid-cols-10
            "
            >
            <div
              className="
                col-start-1 col-span-1
                row-start-1 row-span-1
                text-sm self-end
                glow-strong-xs
              "
            >
              JOB:
            </div>
            <div
              className="
                col-start-2 col-span-9
                row-start-1 row-span-1
                text-lg text-left pl-4
                glow-strong-xs
              "
            >
              Shadow Monarch
            </div>
            <div
              className="
                col-start-1 col-span-1
                row-start-2 row-span-1
                text-sm glow-strong-xs
                self-end
              "
            >
              TITLE:
            </div>
            <div
              className="
                col-start-2 col-span-9
                row-start-2 row-span-1
                text-lg text-left pl-4
                glow-strong-xs
              "
            >
              The One Who Overcame Adversity
            </div>
          </div>
        </div>
      </div>

{/* HP MP FATIGUE */}
        <div className="flex-none size-9">{/* empty */}</div>
          <div
            className="
              mr-4 ml-4
              sm:mr-10 sm:ml-10
              md:mr-20 md:ml-20
              lg:mr-30 lg:ml-30
              xl:mr-50 xl:ml-50
              border bg-[#00102030]
            "
          >
            <div className="
              grid grid-flow-col
              grid-cols-1 grid-rows-3
              md:grid-cols-5 md:grid-rows-1
              lg:grid-cols-5 lg:grid-rows-1
              gap-4 p-4
            "
            >
              {/* HP */}
              <div
                className="
                  col-start-1 col-span-1 row-start-1
                  md:col-start-1 md:col-span-2 md:row-start-1
                  p-2 mt-2
                "
              >
                <div className="
                  grid grid-cols-5
                "
                >
                  <div className="
                    col-start-1 col-span-1
                    place-items-center
                    ">
                    <div><Image
                      className="
                        min-w-[25px] min-h-[25px]
                        glow-strong
                        "
                      src="/status/HP.svg"
                      width={20}
                      height={20}
                      alt="HP"
                      priority
                    /></div>
                    <div className="text-center">
                      HP
                    </div>
                  </div>
                  <div className="
                    col-start-2 col-span-4
                    ">
                    <div className="
                      grid grid-rows-2 gap-1
                    "
                    >
                      <div
                        className="
                          row-start-1 row-span-1
                          border rounded-xl mt-2
                          w-full
                        "
                      >
                        <canvas id="hp-bar" width={100} height={10}></canvas>
                      </div>
                      <div
                        id="hp-value"
                        className="
                          row-start-2 row-span-1
                          text-[10px] text-end
                          glow-strong-xs
                        "
                      >
                        43290/43290
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MP */}
              <div
                className="
                  col-start-1 col-span-1 row-start-2
                  md:col-start-3 md:col-span-2 md:row-start-1
                  p-2 mt-2
                "
              >
                <div className="
                  grid grid-cols-5
                "
                >
                  <div className="
                    col-start-1 col-span-1
                    place-items-center
                    ">
                    <div><Image
                      className="
                        min-w-[25px] min-h-[25px]
                        glow-strong
                        "
                      src="/status/MP.svg"
                      width={20}
                      height={20}
                      alt="MP"
                      priority
                    /></div>
                    <div className="text-center">
                      MP
                    </div>
                  </div>
                  <div className="
                    col-start-2 col-span-4
                    ">
                    <div className="
                      grid grid-rows-2 gap-1
                    "
                    >
                      <div
                        className="
                          row-start-1 row-span-1
                          border rounded-xl mt-2
                          w-full
                        "
                      >
                        <canvas id="mp-bar" width={100} height={10}></canvas>
                      </div>
                      <div
                        id="mp-value"
                        className="
                          row-start-2 row-span-1
                          text-[10px] text-end
                          glow-strong-xs
                        "
                      >
                        8403/8403
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fatigue */}
              <div
                className="
                  col-start-1 col-span-1 row-start-3
                  md:col-start-5 md:col-span-1 md:row-start-1
                  p-2
                "
              >
                <div
                  className="
                    grid grid-flow-col grid-cols-2 grid-rows-1
                    items-end
                  "
                >
                  <div className="
                    col-start-1 col-span-1
                    row-start-1 row-span-1
                    pl-2
                    "
                  >
                    <div className="justify-self-end">
                      <Image
                        id="fatigue_image"
                        className="
                          min-w-[40px] min-h-[40px]
                        "
                        src="/status/fatigue/Fatigue_0.svg"
                        width={25}
                        height={25}
                        alt="Fatigue"
                        priority />
                      </div>
                      <div
                        className="justify-self-end
                          text-sm
                          glow-strong-xs
                        "
                      >
                        FATIGUE:
                      </div>
                      </div>
                      <div
                        id="fatigue-value"
                        className="
                          col-start-2 row-span-2
                          text-left ml-1
                          text-3xl
                          glow-strong-xs
                        "
                      >
                        0
                      </div>

                    </div>
                  </div>
                </div>
              </div>
{/* STR...*/}
        <div className="flex-none size-9">{/* empty */}</div>
          <div
            className="
              mr-4 ml-4
              sm:mr-10 sm:ml-10
              md:mr-20 md:ml-20
              lg:mr-30 lg:ml-30
              xl:mr-50 xl:ml-50
              border bg-[#00102030]
            "
          >
        <div className="flex-none size-7">{/* empty */}</div>
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              place-content-evenly gap-y-7
            "
            >
              {/* STR */}
              <div className="
                grid
                grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
                gap-x-2
              ">
                <Image
                  className="
                    col-start-1 lg:col-start-2 xl:col-start-3
                    min-w-[35px] min-h-[35px]
                    glow-strong-sm
                    place-self-end
                  "
                  src="/status/str3.svg"
                  width={20}
                  height={20}
                  alt="str"
                  priority />
                <div className="
                  col-start-2 lg:col-start-3 xl:col-start-4
                  self-end
                  text-3xl
                ">
                  STR:
                </div>
                <div className="
                  col-start-3 lg:col-start-4 xl:col-start-5
                  self-end
                  text-4xl
                ">
                  239
                </div>
                <div className="
                  col-start-4 lg:col-start-5 xl:col-start-6
                  self-end
                  text-2xl
                  text-[#38fb38] text-shadow-green
                  pl-0 lg:pl-2 xl:pl-0
                ">
                  (+55)
                </div>
              </div>
              {/* VIT */}
              <div className="
                grid
                grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
                gap-x-2
              ">
                <Image
                  className="
                    col-start-1 lg:col-start-1 xl:col-start-2
                    min-w-[35px] min-h-[35px]
                    glow-strong-sm
                    place-self-end
                  "
                  src="/status/vit2.svg"
                  width={20}
                  height={20}
                  alt="vit"
                  priority />
                <div className="
                  col-start-2 lg:col-start-2 xl:col-start-3
                  self-end
                  text-3xl
                ">
                  VIT:
                </div>
                <div className="
                  col-start-3 lg:col-start-3 xl:col-start-4
                  self-end
                  text-4xl
                ">
                  211
                </div>
                <div className="
                  col-start-4 lg:col-start-4 xl:col-start-5
                  self-end
                  text-2xl
                  text-[#38fb38] text-shadow-green
                  pl-0 lg:pl-2 xl:pl-0
                ">
                  (+55)
                </div>
              </div>
              {/* AGI */}
              <div className="
                grid
                grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
                gap-x-2
              ">
                <Image
                  className="
                    col-start-1 lg:col-start-2 xl:col-start-3
                    min-w-[35px] min-h-[35px]
                    glow-strong-sm
                    place-self-end
                  "
                  src="/status/agi2.svg"
                  width={20}
                  height={20}
                  alt="agi"
                  priority />
                <div className="
                  col-start-2 lg:col-start-3 xl:col-start-4
                  self-end
                  text-3xl
                ">
                  AGI:
                </div>
                <div className="
                  col-start-3 lg:col-start-4 xl:col-start-5
                  self-end
                  text-4xl
                ">
                  235
                </div>
                <div className="
                  col-start-4 lg:col-start-5 xl:col-start-6
                  self-end
                  text-2xl
                  text-[#38fb38] text-shadow-green
                  pl-0 lg:pl-2 xl:pl-0
                ">
                  (+70)
                </div>
              </div>
              {/* INT */}
              <div className="
                grid
                grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
                gap-x-2
              ">
                <Image
                  className="
                    col-start-1 lg:col-start-1 xl:col-start-2
                    min-w-[35px] min-h-[35px]
                    glow-strong-sm
                    place-self-end
                  "
                  src="/status/int2.svg"
                  width={20}
                  height={20}
                  alt="int"
                  priority />
                <div className="
                  col-start-2 lg:col-start-2 xl:col-start-3
                  self-end
                  text-3xl
                ">
                  INT:
                </div>
                <div className="
                  col-start-3 lg:col-start-3 xl:col-start-4
                  self-end
                  text-4xl
                ">
                  240
                </div>
                <div className="
                  col-start-4 lg:col-start-4 xl:col-start-5
                  self-end
                  text-2xl
                  text-[#38fb38] text-shadow-green
                  pl-0 lg:pl-2 xl:pl-0
                ">
                  (+55)
                </div>
              </div>
              {/* PER */}
              <div className="
                grid
                grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
                gap-x-2
              ">
                <Image
                  className="
                    col-start-1 lg:col-start-2 xl:col-start-3
                    min-w-[35px] min-h-[35px]
                    glow-strong-sm
                    place-self-end
                  "
                  src="/status/per2.svg"
                  width={20}
                  height={20}
                  alt="per"
                  priority />
                <div className="
                  col-start-2 lg:col-start-3 xl:col-start-4
                  self-end
                  text-3xl
                ">
                  PER:
                </div>
                <div className="
                  col-start-3 lg:col-start-4 xl:col-start-5
                  self-end
                  text-4xl
                ">
                  207
                </div>
                <div className="
                  col-start-4 lg:col-start-5 xl:col-start-6
                  self-end
                  text-2xl
                  text-[#38fb38] text-shadow-green
                  pl-0 lg:pl-2 xl:pl-0
                ">
                  (+55)
                </div>
              </div>
              {/* Available Ability Points */}
              <div className="
                grid grid-cols-5
              "
              >
                <div className="
                  col-start-3 lg:col-start-2
                  justify-items-end
                  text-xs
                ">
                  <p>Available</p>
                  <p>Ability</p>
                  <p>Points:</p>
                </div>
                <div className="
                  col-start-4 lg:col-start-3
                  justify-self-start
                  text-5xl pl-2
                ">
                  0
                </div>
              </div>
            </div>
            <div className="flex-none size-7">{/* empty */}</div>
          </div>

        <div className="flex-none size-7">{/* empty */}</div>
      </div>
    );
  }