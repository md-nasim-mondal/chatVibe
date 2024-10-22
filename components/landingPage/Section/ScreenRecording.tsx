import React from "react";
import SectionContainer from "../ShareComponents/SectionContainer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ScreenRecording = () => {
  const buttonHover = {
    scale: 1.15,
    transition: { type: "spring", stiffness: 250 },
  };

  return (
    <SectionContainer>
      {/* Flex Container */}
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* Left: SVG Mockup */}

        <h4
          className="absolute z-50 mt-20 md:mt-0 text-center leading-9 flex items-center justify-center md:top-[107px] left-[32%] md:left-[17%]"
          style={{
            color: "#5F1D4E",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          Real-time team <br /> chat for your <br /> product universe
        </h4>
        <h6
          className="absolute z-50 mt-20 md:mt-0 text-center flex items-center justify-center top-[38%] md:top-[70%] left-[33.2%] md:left-[17%]"
          style={{
            color: "#C5BBC8",
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          All of your conversations, <br /> work items and tools <br /> into one place
        </h6>

        {/* button */}

        <Link href={`/dashboard`} 
        className="absolute z-40 top-[50%] md:top-[80%] left-[35.2%] md:left-[17.67%]"
        >
            <motion.div whileHover={buttonHover} className="inline-block mt-6">
              <Button className="border text-white bg-main-2 px-7 hover:bg-dark-1 transition-all duration-200 ease-in-out">
                Get Started
              </Button>
            </motion.div>
          </Link>

        {/* 1st */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="238"
          height="238"
          viewBox="0 0 238 238"
          fill="none"
          className="absolute z-20 top-[23%] md:top-[35.5%] left-[21.6%] md:left-[14.5%]"
        >
          <circle
            cx="119"
            cy="119"
            r="118"
            className="stroke-[#2E4BB1] stroke-opacity-30 stroke-[2px] stroke-dashed"
            style={{ strokeDasharray: "5 2" }}
          />
        </svg>

        {/* 2nd */}
        <svg
          className="absolute z-20 top-[25.4%] md:top-[39.5%] left-[29.5%] md:left-[16.3%]"
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="176"
          viewBox="0 0 176 176"
          fill="none"
        >
          <circle
            cx="88"
            cy="88"
            r="87"
            className="stroke-[#2E4BB1] stroke-opacity-30 stroke-[2px]"
            style={{ strokeDasharray: "5 2" }}
          />
        </svg>


        {/* 3rd */}
        <svg className="z-40 absolute left-[29%] md:left-[15%] top-[22.9%] md:top-[37.8%]" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
<circle cx="23" cy="23" r="23" fill="#001F52" fill-opacity="0.88"/>
</svg>


{/* 4 */}
<svg className="z-40 absolute left-[31%] md:left-[15.5%] top-[23.8%] md:top-[39%]" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
<path d="M20.3354 0C22.4549 0.0227344 24.4723 0.877248 25.9176 2.36459C27.3629 3.85193 28.1101 5.84228 27.9869 7.81196L27.985 16.1279C28.1101 18.1577 27.3629 20.1481 25.9176 21.6354C24.4723 23.1228 22.4549 23.9773 20.3236 24H7.63866C3.20131 24 0 20.5847 0 16.188V7.81196C0 3.41535 3.20131 0 7.63866 0H20.3354ZM20.3117 2.03784H7.63866C4.42791 2.03784 2.12442 4.4954 2.12442 7.81196V16.188C2.12442 19.5046 4.42791 21.9622 7.63866 21.9622H20.3117C21.8502 21.9457 23.3145 21.3254 24.3636 20.2458C25.4127 19.1662 25.9551 17.7215 25.8624 16.188L25.8643 7.75185C25.9551 6.27849 25.4127 4.83377 24.3636 3.75417C23.3145 2.67456 21.8502 2.0543 20.3117 2.03784ZM22.4336 7.51782C22.7669 7.91723 22.736 8.48348 22.3835 8.84735L22.2682 8.95007L16.5184 13.3648C15.1219 14.409 13.1923 14.4612 11.7363 13.5167L11.5104 13.3593L5.72217 8.95271C5.26265 8.60288 5.18577 7.96195 5.55045 7.52114C5.88198 7.12041 6.4643 7.02303 6.91268 7.27147L7.04279 7.35642L12.8237 11.7575C13.4719 12.2421 14.3605 12.2794 15.0371 11.8758L15.2016 11.7657L20.9406 7.35907C21.3986 7.0074 22.0671 7.07848 22.4336 7.51782Z" fill="white"/>
</svg>
     



{/* 5 */}

<svg 
className="z-40 absolute left-[65%] md:left-[24.5%] top-[37%] md:top-[58%]"
xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 54 54" fill="none">
  <circle cx="27" cy="27" r="27" fill="#001F52" fill-opacity="0.88"/>
  <path d="M38.2318 13.7663L38.2418 14.0094L38.4268 41.2639C38.4445 43.967 35.3633 45.4461 33.2813 43.8455L33.0766 43.6751L23.7106 35.2557L11.4225 32.036C8.81037 31.3514 8.17499 27.9707 10.2546 26.3718L10.4716 26.218L33.2771 11.3202C35.3397 9.97708 38.0459 11.3683 38.2318 13.7663ZM34.7555 13.3606L34.646 13.4191L11.8414 28.3164C11.3666 28.6261 11.4423 29.3342 11.9278 29.5648L12.0576 29.612L23.679 32.6564L29.4934 21.6671C29.7876 21.111 30.4409 20.8675 31.0168 21.0709L31.1868 21.1454C31.7429 21.4396 31.9864 22.0929 31.783 22.6688L31.7085 22.8388L25.8859 33.8426L34.752 41.8117C35.1741 42.1912 35.8164 41.9449 35.9096 41.418L35.921 41.2806L35.736 14.0252C35.733 13.4995 35.202 13.1706 34.7555 13.3606Z" fill="white"/>
</svg>

{/* 6 */}







     
        <div className="w-full max-w-sm relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="344"
            height="742"
            viewBox="0 0 344 742"
            fill="none"
            className="shadow-lg rounded-2xl"
          >
            <path
              d="M0.000244141 41C0.000244141 18.3563 18.3566 0 41.0002 0H302.085C324.728 0 343.085 18.3563 343.085 41V700.831C343.085 723.475 324.728 741.831 302.085 741.831H41.0003C18.3566 741.831 0.000244141 723.475 0.000244141 700.831V41Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Right: Text & CTA Section */}
        <div className=" md:right-[7.17%] bg-main-2 p-8 text-white mt-4 md:mt-0  md:absolute">
          <h5 className="uppercase text-sm tracking-wide mb-2">
            Communicate • Share Ideas • Save Time
          </h5>
          <h2 className="text-4xl font-bold mb-4">
            Screen Recording And Remote Controlling,
          </h2>
          <p className="text-lg mb-6">
            Host a video or audio conference with up to 50 people. Record your
            calls, enable live captions & subtitles, or simply chat smart.
          </p>

          {/* Button with Hover Animation */}
          <Link href={`/dashboard`}>
            <motion.div whileHover={buttonHover} className="inline-block mt-6">
              <Button className="border text-white  px-7 hover:bg-dark-1 transition-all duration-200 ease-in-out">
                Get Started
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ScreenRecording;
