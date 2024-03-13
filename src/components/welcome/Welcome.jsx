import RevealScroll from "../RevealScroll/RevealScroll";
import styles from "./Welcome.module.css";
const Welcome = ({ info, icons, setIcons }) => {
  return (
    <div className="d-flex py-4 flex-column flex-md-row flex-wrap justify-content-center align-items-center justify-content-md-evenly px-2 p-lg-5 my-3">
      <div className="col-10 col-lg-6 text-center text-lg-start mt-3 mt-md-0">
        <RevealScroll axix={"x"} value={"-100"}>
          <h1 className={`herr pink ${styles.welcomeHead}`}>{info.styleTxt}</h1>
          <h1 className={` purple ${styles.welcomeHeadPlain} `}>
            {info.plainHead}
          </h1>
          <h1 className={` purple ${styles.welcomeHeadPlain} mt-5`}>
            {info.plainHeadTwo}
          </h1>
          <p className="gray mt-5 mt-lg-4 mb-3">{info.desc}</p>
          {/* icons of abput page */}
      
          {icons == "icons" && (
            <div>
              <div className="d-flex justify-content-center justify-content-lg-start gap-5 my-3 ">
                <div className="d-flex align-items-center gap-1">
                  <img src={info.icons.waxing.icon} alt="" width={40} />
                  <h4 className="mt-1 text-uppercase">
                    {info.icons.waxing.txt}
                  </h4>
                </div>
                <div className="d-flex align-items-center   gap-1">
                  <img src={info.icons.makeup.icon} alt="" width={40} />
                  <h4 className="mt-1 text-uppercase">
                    {info.icons.makeup.txt}
                  </h4>
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start gap-5 my-3">
                <div className="d-flex align-items-center gap-1">
                  <img src={info.icons.mehndi.icon} alt="" width={40} />
                  <h4 className="mt-1 text-uppercase">
                    {info.icons.mehndi.txt}
                  </h4>
                </div>
                <div className="d-flex align-items-center  gap-1">
                  <img src={info.icons.facial.icon} alt="" width={40} />
                  <h4 className="mt-1 text-uppercase">
                    {info.icons.facial.txt}
                  </h4>
                </div>
              </div>
            </div>
          )}
        </RevealScroll>
      </div>

      <div className="col-10 col-lg-5">
        <RevealScroll axix={"x"} value={"100"}>
          <img
            src={info.img}
            alt=""
            className={`boxShadow ${styles.welImg}`}
            height={400}
          />
        </RevealScroll>
      </div>
    </div>
  );
};

export default Welcome;
