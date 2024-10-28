import Link from "next/link";
import { PiXLogoDuotone } from "react-icons/pi";

const LandingPageView = () => {
    return ( 
        <>
        <main className="w-screen h-screen overflow-x-hidden flex flex-col gap-4 items-center justify-center">
            <div className="">
            <svg width="919" height="220" viewBox="0 0 919 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M83.05 219.856C62.1113 219.856 44.4947 215.225 30.2 205.964C15.9053 196.501 5.83867 183.717 0 167.61L35.636 146.772C43.8907 168.315 60.098 179.086 84.258 179.086C95.9353 179.086 104.492 176.972 109.928 172.744C115.364 168.516 118.082 163.181 118.082 156.738C118.082 149.289 114.76 143.551 108.116 139.524C101.472 135.296 89.5933 130.766 72.48 125.934C63.0173 123.115 54.964 120.297 48.32 117.478C41.8773 114.659 35.334 110.935 28.69 106.304C22.2473 101.472 17.3147 95.432 13.892 88.184C10.4693 80.936 8.758 72.48 8.758 62.816C8.758 43.6893 15.5027 28.4887 28.992 17.214C42.6827 5.738 59.0913 0 78.218 0C95.3313 0 110.331 4.228 123.216 12.684C136.303 20.9387 146.47 32.5153 153.718 47.414L118.686 67.648C110.23 49.528 96.7407 40.468 78.218 40.468C69.5607 40.468 62.7153 42.4813 57.682 46.508C52.85 50.3333 50.434 55.3667 50.434 61.608C50.434 68.252 53.152 73.688 58.588 77.916C64.2253 81.9427 74.896 86.372 90.6 91.204C97.0427 93.2173 101.875 94.828 105.096 96.036C108.519 97.0427 113.049 98.754 118.686 101.17C124.525 103.385 128.954 105.499 131.974 107.512C135.195 109.525 138.819 112.243 142.846 115.666C146.873 119.089 149.893 122.612 151.906 126.236C154.121 129.86 155.933 134.289 157.342 139.524C158.953 144.557 159.758 150.094 159.758 156.134C159.758 175.663 152.611 191.166 138.316 202.642C124.223 214.118 105.801 219.856 83.05 219.856Z" fill="#212121"/>
<path d="M305.829 196.904C290.327 212.205 271.401 219.856 249.053 219.856C226.705 219.856 207.78 212.205 192.277 196.904C176.976 181.401 169.325 162.476 169.325 140.128C169.325 117.78 176.976 98.9553 192.277 83.654C207.78 68.1514 226.705 60.4 249.053 60.4C271.401 60.4 290.327 68.1514 305.829 83.654C321.332 98.9553 329.083 117.78 329.083 140.128C329.083 162.476 321.332 181.401 305.829 196.904ZM219.759 170.026C227.611 177.878 237.376 181.804 249.053 181.804C260.731 181.804 270.495 177.878 278.347 170.026C286.199 162.174 290.125 152.208 290.125 140.128C290.125 128.048 286.199 118.082 278.347 110.23C270.495 102.378 260.731 98.452 249.053 98.452C237.376 98.452 227.611 102.378 219.759 110.23C212.109 118.082 208.283 128.048 208.283 140.128C208.283 152.208 212.109 162.174 219.759 170.026Z" fill="#212121"/>
<path d="M444.07 64.628H483.028V215.628H444.07V198.716C434.607 212.809 419.608 219.856 399.072 219.856C382.562 219.856 368.872 214.319 358 203.246C347.329 192.173 341.994 176.871 341.994 157.342V64.628H380.952V152.51C380.952 162.577 383.67 170.328 389.106 175.764C394.542 180.999 401.79 183.616 410.85 183.616C420.916 183.616 428.97 180.495 435.01 174.254C441.05 168.013 444.07 158.651 444.07 146.168V64.628Z" fill="#212121"/>
<path d="M593.001 102.076H558.875V164.892C558.875 170.127 560.183 173.952 562.801 176.368C565.418 178.784 569.243 180.193 574.277 180.596C579.31 180.797 585.551 180.697 593.001 180.294V215.628C566.223 218.648 547.298 216.131 536.225 208.078C525.353 200.025 519.917 185.629 519.917 164.892V102.076H479.242V64.628H519.917V4.228H558.875V64.628H593.001V102.076Z" fill="#212121"/>
<path d="M692.344 60.4C708.854 60.4 722.444 65.9367 733.114 77.01C743.986 88.0833 749.422 103.385 749.422 122.914V215.628H710.464V127.746C710.464 117.679 707.746 110.029 702.31 104.794C696.874 99.358 689.626 96.64 680.566 96.64C670.5 96.64 662.446 99.7607 656.406 106.002C650.366 112.243 647.346 121.605 647.346 134.088V215.628H608.388V4.228H647.346V81.54C656.809 67.4467 671.808 60.4 692.344 60.4Z" fill="#212121"/>
<path d="M878.119 156.134C872.885 175.059 858.691 184.522 835.537 184.522C820.639 184.522 809.364 179.489 801.713 169.422L770.305 187.542C785.204 209.085 807.149 219.856 836.141 219.856C861.107 219.856 881.139 212.306 896.239 197.206C911.339 182.106 918.889 163.08 918.889 140.128C918.889 117.377 911.44 98.452 896.541 83.352C881.643 68.0506 862.516 60.4 839.161 60.4C817.015 60.4 798.794 68.0506 784.499 83.352C770.003 98.6533 762.755 117.579 762.755 140.128C762.755 145.161 763.259 150.497 764.265 156.134H878.119ZM878.723 125.934H801.713C803.928 115.666 808.559 108.015 815.605 102.982C822.451 97.9486 830.303 95.432 839.161 95.432C849.631 95.432 858.288 98.15 865.133 103.586C871.979 108.821 876.509 116.27 878.723 125.934Z" fill="#212121"/>
</svg>


            </div>
            <div className="hero text-center flex flex-col lg:w-[60%] items-center">
                <h1 className="text-[24px] px-8">Southe is currently under development. Follow the thought process of building the startup from idea to launch.</h1>
                <Link href={"https://x.com/syiolabs"} className="bg-[#212121] text-white rounded-full px-8 py-2 flex gap-2 items-center justify-center w-fit">Follow the story <PiXLogoDuotone size={32}/></Link>
            </div>
        </main>
        </>
     );
}
 
export default LandingPageView;