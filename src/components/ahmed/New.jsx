import React from 'react'
function New({src}) {
  return (
    <>
    <div className="relative w-[330px] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient w-[330px] h-[300px]">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] h-[700px] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={src}
                  className="w-[300px] translate-x-3"
                  width={1024}
                  height={490}
                  alt="AI"
                />

              </div>
            </div>
          </div>

        </div>
      </>
  )
}

export default New