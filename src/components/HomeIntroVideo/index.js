import React from "react";
import img1 from "../../img/common/project_inner_banner.png";
import s from "./style.module.css";
function HomeIntroVideo() {
  return (
    <div className={s.VIdeoIntroSec}>
      <div className="container">
        {" "}
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 col-sm-12">
            <div className={s.VIdeo_wraper} data-aos="fade-down">
              <h2>Welcome To RPH!</h2>
              <video
                autoPlay
                muted
                loop
                controls
                className={s.Intro_Video_32}
                poster={img1}
                id="video_background"
              >
                <source src="null" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroVideo;
