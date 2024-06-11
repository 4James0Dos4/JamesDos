import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Element = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element"
      style={{
        display: screenWidth >= 2560 || (screenWidth >= 768 && screenWidth < 1024) ? "flex" : undefined,
        gap:
          (screenWidth >= 1024 && screenWidth < 1440) ||
          (screenWidth >= 1440 && screenWidth < 2560) ||
          screenWidth >= 2560 ||
          screenWidth < 768
            ? "10px"
            : undefined,
        height:
          screenWidth < 768
            ? "5886px"
            : screenWidth >= 768 && screenWidth < 1024
            ? "4970px"
            : screenWidth >= 1024 && screenWidth < 1440
            ? "6730px"
            : screenWidth >= 1440 && screenWidth < 2560
            ? "6983px"
            : screenWidth >= 2560
            ? "6975px"
            : undefined,
        minWidth:
          screenWidth < 768
            ? "320px"
            : screenWidth >= 768 && screenWidth < 1024
            ? "768px"
            : screenWidth >= 1024 && screenWidth < 1440
            ? "1024px"
            : screenWidth >= 1440 && screenWidth < 2560
            ? "1440px"
            : screenWidth >= 2560
            ? "2560px"
            : undefined,
        opacity:
          (screenWidth >= 1024 && screenWidth < 1440) ||
          (screenWidth >= 1440 && screenWidth < 2560) ||
          screenWidth < 768
            ? "0"
            : undefined,
        transform:
          (screenWidth >= 1024 && screenWidth < 1440) ||
          (screenWidth >= 1440 && screenWidth < 2560) ||
          screenWidth < 768
            ? "scale(1.1)"
            : undefined,
      }}
    >
      {(screenWidth >= 2560 || screenWidth < 768) && (
        <div
          className="container"
          style={{
            flex: screenWidth < 768 ? "0 0 auto" : undefined,
            height: screenWidth >= 2560 ? "6975px" : undefined,
            overflow: screenWidth >= 2560 ? "hidden" : undefined,
          }}
        >
          <div
            className="section"
            style={{
              display: screenWidth >= 2560 ? "flex" : undefined,
              height: screenWidth < 768 ? "206px" : screenWidth >= 2560 ? "748px" : undefined,
              marginTop: screenWidth >= 2560 ? "-1.50px" : undefined,
              opacity: screenWidth < 768 ? "0" : undefined,
              overflow: screenWidth >= 2560 ? "hidden" : undefined,
              transform: screenWidth < 768 ? "scale(1.1)" : undefined,
            }}
          >
            <div
              className="james-dos-wrapper"
              style={{
                gap: screenWidth < 768 ? "10px" : undefined,
                height: screenWidth < 768 ? "205px" : screenWidth >= 2560 ? "764px" : undefined,
                marginTop: screenWidth >= 2560 ? "-8.00px" : undefined,
                overflow: screenWidth < 768 ? "hidden" : undefined,
              }}
            >
              <div
                className="james-dos"
                style={{
                  backgroundImage: screenWidth < 768 ? "url(/img/james-dos-yrd13bv3vnf8yw3b-webp-1.png)" : undefined,
                  backgroundPosition: screenWidth < 768 ? "50% 50%" : undefined,
                  backgroundSize: screenWidth < 768 ? "cover" : undefined,
                  height: screenWidth < 768 ? "206px" : screenWidth >= 2560 ? "767px" : undefined,
                  marginBottom: screenWidth >= 2560 ? "-1.50px" : undefined,
                  marginTop: screenWidth < 768 ? "-0.50px" : screenWidth >= 2560 ? "-1.50px" : undefined,
                  overflow: screenWidth < 768 ? "hidden" : undefined,
                  padding: screenWidth < 768 ? "10px" : screenWidth >= 2560 ? "1px 0px" : undefined,
                }}
              >
                <div
                  className="div"
                  style={{
                    alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                    backgroundImage:
                      screenWidth >= 2560 ? "url(/img/james-dos-yrd13bv3vnf8yw3b-webp-3.png)" : undefined,
                    backgroundPosition: screenWidth >= 2560 ? "50% 50%" : undefined,
                    backgroundSize: screenWidth >= 2560 ? "cover" : undefined,
                    gap: screenWidth >= 2560 ? "10px" : undefined,
                    height: screenWidth < 768 ? "186px" : screenWidth >= 2560 ? "745px" : undefined,
                    marginLeft: screenWidth < 768 ? "-17.50px" : undefined,
                    marginRight: screenWidth < 768 ? "-17.50px" : undefined,
                    maxWidth: screenWidth < 768 ? "360px" : undefined,
                    padding: screenWidth < 768 ? "74px 12px 30.61px 16px" : screenWidth >= 2560 ? "10px" : undefined,
                    width: screenWidth < 768 ? "335px" : screenWidth >= 2560 ? "100%" : undefined,
                  }}
                >
                  {screenWidth < 768 && (
                    <>
                      <div className="heading-wrapper">
                        <div className="heading">
                          <div className="text-wrapper">Jamesdos</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="emphasis-hurricane-wrapper">
                          <div className="emphasis-hurricane">(Hurricane)</div>
                        </div>
                      </div>
                      <div className="container-2">
                        <div className="heading-2">
                          <div className="text-wrapper-2">Vermillion</div>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 2560 && (
                    <>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                          <div className="container-3">
                            <div className="heading-3">
                              <div className="text-wrapper-3">Jamesdos</div>
                            </div>
                          </div>
                          <div className="container-4">
                            <div className="heading-4">
                              <div className="emphasis-hurricane-2">(Hurricane)</div>
                            </div>
                          </div>
                          <div className="container-5">
                            <div className="heading-5">
                              <div className="text-wrapper-4">Vermillion</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="header-wrapper">
                        <header className="header">
                          <div className="container-6">
                            <div className="nav-list">
                              <div className="item">
                                <div className="label">
                                  <div className="div-wrapper-2">
                                    <a
                                      className="text-wrapper-5"
                                      href="https://codecomedy.jamesdos.com/"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      CODE COMEDY
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="label">
                                  <div className="div-wrapper-2">
                                    <a
                                      className="text-wrapper-5"
                                      href="https://window.jamesdos.com/"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      WINDOW JAMES EDITION BETA
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="margin">
                              <div className="container-7">
                                <div className="div-wrapper-2">
                                  <div className="en">EN</div>
                                </div>
                                <img className="SVG-margin" alt="Svg margin" src="/img/svg-margin.svg" />
                              </div>
                            </div>
                          </div>
                        </header>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-wrapper"
            style={{
              display: screenWidth >= 2560 ? "flex" : undefined,
              height: screenWidth < 768 ? "46px" : screenWidth >= 2560 ? "56px" : undefined,
              opacity: screenWidth < 768 ? "0" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
              transform: screenWidth < 768 ? "scale(1.1)" : undefined,
            }}
          >
            <div
              className="container-8"
              style={{
                gap: screenWidth >= 2560 ? "33.98px" : undefined,
                height: screenWidth < 768 ? "55px" : screenWidth >= 2560 ? "72px" : undefined,
                marginBottom: screenWidth < 768 ? "-4.50px" : screenWidth >= 2560 ? "-8.00px" : undefined,
                marginLeft: screenWidth < 768 ? "-35.00px" : undefined,
                marginRight: screenWidth < 768 ? "-35.00px" : undefined,
                marginTop: screenWidth < 768 ? "-4.50px" : screenWidth >= 2560 ? "-8.00px" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                padding:
                  screenWidth < 768
                    ? "11px 26px 13.81px 16px"
                    : screenWidth >= 2560
                    ? "22px 680.02px 19.81px 0px"
                    : undefined,
                width: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              <div
                className="container-9"
                style={{
                  alignItems: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "flex-start" : undefined,
                  justifyContent: screenWidth < 768 ? "center" : undefined,
                  marginLeft: screenWidth < 768 ? "-1.00px" : undefined,
                  width: screenWidth < 768 ? "220px" : screenWidth >= 2560 ? "400px" : undefined,
                }}
              >
                <div
                  className="strong-you-will-find-wrapper"
                  style={{
                    alignItems: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "flex-end" : undefined,
                    padding: screenWidth < 768 ? "0px 12.79px 0px 12.8px" : undefined,
                  }}
                >
                  <div
                    className="strong-you-will-find"
                    style={{
                      textAlign: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "right" : undefined,
                    }}
                  >
                    You will find me here:
                  </div>
                </div>
              </div>
              <div
                className="container-10"
                style={{
                  marginLeft: screenWidth < 768 ? "-4px" : undefined,
                  marginRight: screenWidth < 768 ? "-1.00px" : undefined,
                  width: screenWidth < 768 ? "104px" : screenWidth >= 2560 ? "110px" : undefined,
                }}
              >
                <div
                  className="container-11"
                  style={{
                    alignItems: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "flex-start" : undefined,
                    gap: screenWidth < 768 ? "12px" : screenWidth >= 2560 ? "15px" : undefined,
                    justifyContent: screenWidth < 768 ? "center" : undefined,
                    padding: screenWidth < 768 ? "0px 6px" : screenWidth >= 2560 ? "0px 7.5px" : undefined,
                  }}
                >
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img
                      className="link"
                      style={{
                        marginTop: screenWidth < 768 ? "-0.91px" : undefined,
                      }}
                      alt="Link"
                      src={screenWidth < 768 ? "/img/link-6.svg" : screenWidth >= 2560 ? "/img/link-2.svg" : undefined}
                    />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img"
                      style={{
                        marginTop: screenWidth < 768 ? "-1.00px" : undefined,
                      }}
                      alt="Link"
                      src={screenWidth < 768 ? "/img/link-7.svg" : screenWidth >= 2560 ? "/img/link-3.svg" : undefined}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-2"
            style={{
              height: screenWidth < 768 ? "2383px" : screenWidth >= 2560 ? "3880px" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
            }}
          >
            <div
              className="container-12"
              style={{
                alignItems: screenWidth < 768 ? "center" : undefined,
                display: screenWidth < 768 ? "flex" : undefined,
                flexWrap: screenWidth < 768 ? "wrap" : undefined,
                gap: screenWidth < 768 ? "-21px 21px" : undefined,
                height: screenWidth < 768 ? "2380px" : screenWidth >= 2560 ? "3880px" : undefined,
                justifyContent: screenWidth < 768 ? "center" : undefined,
                marginLeft: screenWidth < 768 ? "-14.50px" : undefined,
                marginRight: screenWidth < 768 ? "-14.50px" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                padding: screenWidth < 768 ? "29px 3px" : undefined,
                width: screenWidth < 768 ? "319px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              {screenWidth < 768 && (
                <>
                  <div className="container-13">
                    <div className="heading-6">
                      <div className="text-wrapper-6">My projects:</div>
                    </div>
                  </div>
                  <div className="jameshurricane" />
                  <div className="container-14">
                    <div className="container-15">
                      <div className="container-16">
                        <div className="text-wrapper-7">👇👇👇 Tap the pic 👇👇👇</div>
                      </div>
                      <div className="for-a-laugh-open-wrapper">
                        <div className="text-wrapper-7">for a laugh, open sesame with joy!</div>
                      </div>
                    </div>
                  </div>
                  <a className="link-2" href="https://www.konradpanfiluk.pl/" rel="noopener noreferrer" target="_blank">
                    <div className="konradpanfiluk-ezgif" />
                  </a>
                  <div className="container-17">
                    <div className="heading-7">
                      <div className="hurricane-studio-wrapper">
                        <a
                          className="hurricane-studio"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Hurricane Studio
                        </a>
                      </div>
                      <div className="link-3">
                        <a
                          className="hurricane-studio-2"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          &#34;Hurricane Studio: Konrad Panfiluk&#39;s
                        </a>
                        <a
                          className="text-wrapper-8"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          showcase of innovative projects.&#34;
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    className="link-2"
                    href="https://codecomedy.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="workx" />
                  </a>
                  <div className="container-18">
                    <div className="container-19">
                      <div className="link-codecomedy-wrapper">
                        <a
                          className="link-codecomedy"
                          href="https://codecomedy.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          CodeComedy
                        </a>
                      </div>
                      <div className="heading-8">
                        <a
                          className="link-all-works-by"
                          href="https://codecomedy.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          All works by James Dos 
                          <br />
                          (Konrad Panfiluk) and Mae Rivera&#39;s
                        </a>
                        <div className="si-chae-hee-wrapper">
                          <a
                            className="si-chae-hee"
                            href="https://codecomedy.jamesdos.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            (Si Chae-hee) sidekicks websites so 
                            <br />
                            twisted, they make the dark web 
                            <br />
                            look like a sunny stroll.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="link-4"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="jasmine-tunechuckles" />
                  </a>
                  <div className="container-20">
                    <div className="heading-9">
                      <a
                        className="link-tunechuckles"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TuneChuckles! (Music)
                      </a>
                      <a
                        className="text-wrapper-9"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        &#34;the beta version is ready.
                      </a>
                      <a
                        className="link-special-thanks"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Special thanks special thanks to
                      </a>
                      <a
                        className="text-wrapper-9"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        시채희 Si Chae-hee&#34;
                      </a>
                    </div>
                  </div>
                  <a className="link-4" href="https://window.jamesdos.com/" rel="noopener noreferrer" target="_blank">
                    <div className="windowjamesdos" />
                  </a>
                  <div className="container-21">
                    <div className="link-wrapper">
                      <div className="window-james-dos-wrapper">
                        <a
                          className="window-james-dos"
                          href="https://window.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Window James dos 
                          <br />
                          Beta Edition v0.4
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="container-22">
                    <div className="when-clock-winks-i-wrapper">
                      <div className="when-clock-winks-i">
                        When clock winks, I craft and close. 
                        <br />
                        Time&#39;s my buddy, project&#39;s my jolly show!
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 2560 && (
                <>
                  <div className="overlap">
                    <div className="overlap-group-2">
                      <div className="container-23">
                        <div className="heading-10">
                          <div className="text-wrapper-10">My projects:</div>
                        </div>
                      </div>
                      <div className="jameshurricane-wrapper">
                        <div className="jameshurricane-2" />
                      </div>
                    </div>
                    <div className="container-24">
                      <div className="container-25">
                        <div className="container-26">
                          <div className="text-wrapper-7">👇👇👇 Tap the pic 👇👇👇</div>
                        </div>
                        <div className="container-27">
                          <div className="text-wrapper-7">for a laugh, open sesame with joy!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="workx-wrapper"
                    href="https://codecomedy.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="workx-2" />
                  </a>
                  <div className="container-28">
                    <div className="container-29">
                      <div className="heading-11">
                        <a
                          className="link-codecomedy-2"
                          href="https://codecomedy.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          CodeComedy
                        </a>
                      </div>
                      <div className="heading-12">
                        <a
                          className="text-wrapper-11"
                          href="https://codecomedy.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          All works by James Dos 
                          <br />
                          (Konrad Panfiluk) and Mae Rivera&#39;s
                        </a>
                        <div className="link-5">
                          <a
                            className="text-wrapper-11"
                            href="https://codecomedy.jamesdos.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            (Si Chae-hee) sidekicks websites so twisted, they make the dark web 
                            <br />
                            look like a sunny stroll.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-30">
                    <div className="heading-13">
                      <a
                        className="link-tunechuckles-2"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TuneChuckles! (Music)
                      </a>
                      <a
                        className="text-wrapper-8"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        &#34;the beta version is ready.
                      </a>
                      <a
                        className="text-wrapper-8"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Special thanks special thanks to
                      </a>
                      <a
                        className="text-wrapper-8"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        시채희 Si Chae-hee&#34;
                      </a>
                    </div>
                  </div>
                  <a
                    className="jasmine-tunechuckles-wrapper"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="jasmine-tunechuckles-2" />
                  </a>
                  <div className="container-31">
                    <div className="container-32">
                      <div className="text-wrapper-7">
                        When clock winks, I craft and close. Time&#39;s 
                        <br />
                        my buddy, project&#39;s my jolly show!
                      </div>
                    </div>
                  </div>
                  <div className="container-33">
                    <div className="link-window-james-wrapper">
                      <a
                        className="link-window-james"
                        href="https://window.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Window James dos Beta Edition v0.4
                      </a>
                    </div>
                  </div>
                  <a
                    className="windowjamesdos-wrapper"
                    href="https://window.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="windowjamesdos-2" />
                  </a>
                  <a
                    className="konradpanfiluk-ezgif-wrapper"
                    href="https://www.konradpanfiluk.pl/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="konradpanfiluk-ezgif-2" />
                  </a>
                  <div className="container-34">
                    <div className="heading-14">
                      <div className="link-6">
                        <a
                          className="hurricane-studio-3"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Hurricane Studio
                        </a>
                      </div>
                      <div className="link-7">
                        <a
                          className="hurricane-studio-2"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          &#34;Hurricane Studio: Konrad Panfiluk&#39;s
                        </a>
                        <a
                          className="text-wrapper-8"
                          href="https://www.konradpanfiluk.pl/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          showcase of innovative projects.&#34;
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="section-3"
            style={{
              height: screenWidth < 768 ? "1106px" : screenWidth >= 2560 ? "591px" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
            }}
          >
            <div
              className="container-35"
              style={{
                alignItems: screenWidth < 768 ? "center" : undefined,
                display: screenWidth < 768 ? "flex" : undefined,
                flexWrap: screenWidth < 768 ? "wrap" : undefined,
                gap: screenWidth < 768 ? "20.3px 20.3px" : undefined,
                height: screenWidth < 768 ? "1106px" : screenWidth >= 2560 ? "591px" : undefined,
                justifyContent: screenWidth < 768 ? "center" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                padding: screenWidth < 768 ? "35px 16px 37.74px" : undefined,
                width: screenWidth < 768 ? "290px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              <div
                className="container-36"
                style={{
                  alignItems: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "flex-start" : undefined,
                  height: screenWidth < 768 ? "119px" : screenWidth >= 2560 ? "250px" : undefined,
                  justifyContent: screenWidth < 768 ? "center" : undefined,
                  left: screenWidth >= 2560 ? "0" : undefined,
                  marginLeft: screenWidth < 768 ? "-1.50px" : undefined,
                  marginRight: screenWidth < 768 ? "-1.50px" : undefined,
                  marginTop: screenWidth < 768 ? "-0.62px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "40px" : undefined,
                  width: screenWidth < 768 ? "261px" : screenWidth >= 2560 ? "555px" : undefined,
                }}
              >
                <div
                  className="perpetually-wrapper"
                  style={{
                    alignItems: screenWidth < 768 ? "center" : screenWidth >= 2560 ? "flex-start" : undefined,
                    alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                    justifyContent: screenWidth < 768 ? "center" : undefined,
                    width: screenWidth < 768 ? "252px" : screenWidth >= 2560 ? "100%" : undefined,
                  }}
                >
                  <div
                    className="perpetually"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-33-font-family)"
                          : screenWidth >= 2560
                          ? "'MuseoModerno', Helvetica"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-33-font-size)"
                          : screenWidth >= 2560
                          ? "64px"
                          : undefined,
                      fontStyle: screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-style)" : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-33-font-weight)"
                          : screenWidth >= 2560
                          ? "900"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-33-letter-spacing)"
                          : screenWidth >= 2560
                          ? "0"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-33-line-height)"
                          : screenWidth >= 2560
                          ? "83.2px"
                          : undefined,
                    }}
                  >
                    <span
                      className="span"
                      style={{
                        fontFamily:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-family)" : undefined,
                        fontSize: screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-size)" : undefined,
                        fontStyle:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-style)" : undefined,
                        fontWeight:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-weight)" : undefined,
                        letterSpacing:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-letter-spacing)" : undefined,
                        lineHeight:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-line-height)" : undefined,
                      }}
                    >
                      {screenWidth < 768 && (
                        <>
                          Perpetually 
                          <br />
                          contemplative
                          <br />{" "}
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          Perpetually 
                          <br />
                          contemplative 
                          <br />
                        </>
                      )}
                    </span>
                    <span
                      className="text-wrapper-12"
                      style={{
                        fontFamily:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-family)" : undefined,
                        fontSize: screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-size)" : undefined,
                        fontStyle:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-style)" : undefined,
                        fontWeight:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-font-weight)" : undefined,
                        letterSpacing:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-letter-spacing)" : undefined,
                        lineHeight:
                          screenWidth < 768 ? "var(--jamesdos-com-museomoderno-black-33-line-height)" : undefined,
                      }}
                    >
                      INDIVIDUAL
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="container-37"
                style={{
                  height: screenWidth < 768 ? "158px" : screenWidth >= 2560 ? "135px" : undefined,
                  left: screenWidth >= 2560 ? "0" : undefined,
                  marginLeft: screenWidth < 768 ? "-25.50px" : undefined,
                  marginRight: screenWidth < 768 ? "-25.50px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "324px" : undefined,
                  width: screenWidth < 768 ? "309px" : screenWidth >= 2560 ? "344px" : undefined,
                }}
              >
                <div
                  className="independent-wrapper"
                  style={{
                    alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                    marginBottom: screenWidth >= 2560 ? "-0.60px" : undefined,
                    padding:
                      screenWidth < 768 ? "0px 0px 0.66px 13px" : screenWidth >= 2560 ? "0px 0px 0.67px" : undefined,
                    width: screenWidth < 768 ? "299px" : screenWidth >= 2560 ? "100%" : undefined,
                  }}
                >
                  <div className="independent">
                    {screenWidth < 768 && (
                      <>
                        Independent individual with a dark 
                        <br />
                        sense of humor and a passion for 
                        <br />
                        all things IT-related. Accomplished 
                        <br />
                        gamer with numerous global titles 
                        <br />
                        in various MOBA games. Lover of 
                        <br />
                        cats, Korean and Japanisu culture, 
                        <br />
                        and motorcycles.
                      </>
                    )}

                    {screenWidth >= 2560 && (
                      <>
                        Independent individual with a dark sense 
                        <br />
                        of humor and a passion for all things IT-
                        <br />
                        related. Accomplished gamer with 
                        <br />
                        numerous global titles in various MOBA 
                        <br />
                        games. Lover of cats, Korean and Japanisu 
                        <br />
                        culture, and motorcycles.
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="container-38"
                style={{
                  height: screenWidth < 768 ? "48px" : screenWidth >= 2560 ? "42px" : undefined,
                  left: screenWidth >= 2560 ? "654px" : undefined,
                  marginLeft: screenWidth < 768 ? "-1.50px" : undefined,
                  marginRight: screenWidth < 768 ? "-1.50px" : undefined,
                  padding: screenWidth < 768 ? "12.9px 0px 0px 16px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "136px" : undefined,
                  width: screenWidth < 768 ? "261px" : screenWidth >= 2560 ? "251px" : undefined,
                }}
              >
                <div
                  className="heading-15"
                  style={{
                    alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                    marginRight: screenWidth < 768 ? "-29.00px" : undefined,
                    padding: screenWidth < 768 ? "0px 0px 0.79px" : undefined,
                    width: screenWidth < 768 ? "274px" : screenWidth >= 2560 ? "100%" : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-13"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-family)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-size)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-style)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-weight)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-letter-spacing)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-line-height)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-line-height)"
                          : undefined,
                    }}
                  >
                    EDUCATION
                  </div>
                </div>
              </div>
              <div
                className="container-39"
                style={{
                  height: screenWidth < 768 ? "301px" : screenWidth >= 2560 ? "319px" : undefined,
                  left: screenWidth >= 2560 ? "665px" : undefined,
                  marginLeft: screenWidth < 768 ? "-25.50px" : undefined,
                  marginRight: screenWidth < 768 ? "-25.50px" : undefined,
                  padding: screenWidth < 768 ? "20.9px 0px 0px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "183px" : undefined,
                  width: screenWidth < 768 ? "309px" : screenWidth >= 2560 ? "227px" : undefined,
                }}
              >
                <div
                  className="container-40"
                  style={{
                    marginBottom: screenWidth < 768 ? "-30.84px" : screenWidth >= 2560 ? "-1.78px" : undefined,
                  }}
                >
                  <div
                    className="paragraph"
                    style={{
                      gap: screenWidth < 768 ? "19.58px" : screenWidth >= 2560 ? "19.57px" : undefined,
                      padding:
                        screenWidth < 768 ? "0px 0px 0.79px 13px" : screenWidth >= 2560 ? "0px 0px 0.79px" : undefined,
                    }}
                  >
                    <div className="div-2">
                      2015-2018
                      <br />
                      The IT profession
                      <br />
                      TEB Edukacja College
                    </div>
                    <div className="div-3">
                      {screenWidth < 768 && (
                        <>
                          2017-2017
                          <br />
                          Microsoft HQ Warsaw Training: Cloud 
                          <br />
                          Technology with Certification.
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          2017-2017
                          <br />
                          Microsoft HQ Warsaw Training: 
                          <br />
                          Cloud Technology with 
                          <br />
                          Certification.
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="element-t-matic-wrapper"
                    style={{
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      marginRight: screenWidth < 768 ? "-27.00px" : undefined,
                      padding:
                        screenWidth < 768 ? "0px 0px 0.79px 13px" : screenWidth >= 2560 ? "0px 0px 0.79px" : undefined,
                      width: screenWidth < 768 ? "336px" : screenWidth >= 2560 ? "100%" : undefined,
                    }}
                  >
                    <div
                      className="element-t-matic"
                      style={{
                        alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                        height: screenWidth < 768 ? "89px" : undefined,
                        width: screenWidth < 768 ? "270px" : undefined,
                      }}
                    >
                      {screenWidth < 768 && (
                        <>
                          2019-2019
                          <br />
                          T-Matic Group Computer Plus 
                          <br />
                          Certified Adobe Photoshop CC
                          <br />
                          Graphic Design Course.
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          2019-2019
                          <br />
                          T-Matic Group Computer Plus 
                          <br />
                          Certified Adobe Photoshop CC 
                          <br />
                          Graphic Design Course.
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="container-41"
                    style={{
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      padding:
                        screenWidth < 768
                          ? "23.59px 0px 0.8px 13px"
                          : screenWidth >= 2560
                          ? "23.59px 0px 0.79px"
                          : undefined,
                      width: screenWidth < 768 ? "296px" : screenWidth >= 2560 ? "100%" : undefined,
                    }}
                  >
                    <div className="text-wrapper-14">School, but who cares, right.</div>
                  </div>
                </div>
              </div>
              <div
                className="container-42"
                style={{
                  height: screenWidth < 768 ? "50px" : screenWidth >= 2560 ? "42px" : undefined,
                  left: screenWidth >= 2560 ? "977px" : undefined,
                  marginLeft: screenWidth < 768 ? "-29.50px" : undefined,
                  marginRight: screenWidth < 768 ? "-29.50px" : undefined,
                  padding: screenWidth < 768 ? "14.9px 0px 0px 16px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "136px" : undefined,
                  width: screenWidth < 768 ? "317px" : screenWidth >= 2560 ? "228px" : undefined,
                }}
              >
                <div
                  className="heading-16"
                  style={{
                    padding: screenWidth < 768 ? "0px 0px 0.79px" : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-15"
                    style={{
                      fontFamily:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-family)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-size)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-style)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-font-weight)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-letter-spacing)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth < 768
                          ? "var(--jamesdos-com-museomoderno-black-28-line-height)"
                          : screenWidth >= 2560
                          ? "var(--jamesdos-com-museomoderno-black-32-line-height)"
                          : undefined,
                    }}
                  >
                    EXPERIENCE
                  </div>
                </div>
              </div>
              <div
                className="container-43"
                style={{
                  height: screenWidth < 768 ? "257px" : screenWidth >= 2560 ? "283px" : undefined,
                  left: screenWidth >= 2560 ? "997px" : undefined,
                  marginBottom: screenWidth < 768 ? "-0.62px" : undefined,
                  marginLeft: screenWidth < 768 ? "-19.00px" : undefined,
                  marginRight: screenWidth < 768 ? "-19.00px" : undefined,
                  padding: screenWidth < 768 ? "12.9px 0px 0px" : undefined,
                  position: screenWidth < 768 ? "relative" : screenWidth >= 2560 ? "absolute" : undefined,
                  top: screenWidth >= 2560 ? "183px" : undefined,
                  width: screenWidth < 768 ? "296px" : screenWidth >= 2560 ? "227px" : undefined,
                }}
              >
                <div
                  className="container-44"
                  style={{
                    marginBottom: screenWidth < 768 ? "-2.42px" : screenWidth >= 2560 ? "-1.37px" : undefined,
                  }}
                >
                  <div
                    className="paragraph-2"
                    style={{
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      gap: screenWidth < 768 ? "19.58px" : screenWidth >= 2560 ? "19.57px" : undefined,
                      marginRight: screenWidth < 768 ? "-21.00px" : undefined,
                      padding:
                        screenWidth < 768 ? "0px 0px 0.8px 13px" : screenWidth >= 2560 ? "0px 0px 0.8px" : undefined,
                      width: screenWidth < 768 ? "317px" : screenWidth >= 2560 ? "100%" : undefined,
                    }}
                  >
                    <div className="element-computer">
                      <span className="text-wrapper-16">2011</span>
                      <span className="span-2">
                        {screenWidth < 768 && (
                          <>
                            -2023
                            <br />
                            Computer Repair: Software &amp; Hardware.
                          </>
                        )}

                        {screenWidth >= 2560 && (
                          <>
                            -2023
                            <br />
                            Computer Repair: Software &amp; 
                            <br />
                            Hardware.
                          </>
                        )}
                      </span>
                    </div>
                    <div className="div-3">
                      {screenWidth < 768 && (
                        <>
                          2016-2018
                          <br />
                          Riot Games Player Support.(Helpdesk)
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          2016-2018
                          <br />
                          Riot Games Player Support.
                          <br />
                          (Helpdesk)
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="paragraph-3"
                    style={{
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      marginRight: screenWidth < 768 ? "-21.00px" : undefined,
                      padding:
                        screenWidth < 768
                          ? "18.8px 0px 0.79px 13px"
                          : screenWidth >= 2560
                          ? "18.8px 0px 0.79px"
                          : undefined,
                      width: screenWidth < 768 ? "317px" : screenWidth >= 2560 ? "100%" : undefined,
                    }}
                  >
                    <div className="div-2">
                      {screenWidth < 768 && (
                        <>
                          2020-2021
                          <br />
                          Daily Trader at Star Beta Poland Sp. z o. o. 
                          <br />
                          Krakow.
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          2020-2021
                          <br />
                          Daily Trader at Star Beta Poland 
                          <br />
                          Sp. z o. o. Krakow.
                        </>
                      )}
                    </div>
                    <div className="div-3">
                      2021-present
                      <br />
                      IT Helpdesk at Regional Hospital
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-4"
            style={{
              height: screenWidth < 768 ? "1053px" : screenWidth >= 2560 ? "763px" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
            }}
          >
            <div
              className="container-45"
              style={{
                alignItems: screenWidth < 768 ? "center" : undefined,
                display: screenWidth < 768 ? "flex" : undefined,
                flexDirection: screenWidth < 768 ? "column" : undefined,
                gap: screenWidth < 768 ? "17px" : undefined,
                height: screenWidth < 768 ? "1050px" : screenWidth >= 2560 ? "763px" : undefined,
                justifyContent: screenWidth < 768 ? "center" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                padding: screenWidth < 768 ? "20px 16px" : undefined,
                width: screenWidth < 768 ? "290px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              {screenWidth < 768 && (
                <>
                  <img className="star" alt="Star" src="/img/star-ynqoo45262c07xwo-svg.svg" />
                  <div className="container-46">
                    <div className="SKILLS-GOT-SOME-wrapper">
                      <p className="SKILLS-GOT-SOME">
                        <span className="text-wrapper-17">SKILLS? GOT </span>
                        <span className="text-wrapper-18">SOME</span>
                      </p>
                    </div>
                  </div>
                  <img className="star" alt="Star" src="/img/star-ynqoo45262c07xwo-svg-1.svg" />
                  <img className="ps-white" alt="Ps white" src="/img/ps-white-awv5xdqr46tnvr3w-svg-1.svg" />
                  <div className="container-47">
                    <div className="ADOBE-PHOTOSHOP-wrapper">
                      <p className="ADOBE-PHOTOSHOP">
                        <span className="text-wrapper-19">
                          ADOBE PHOTOSHOP
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <div className="ps-svg" />
                  <div className="container-47">
                    <div className="AI-wrapper">
                      <p className="AI">
                        <span className="text-wrapper-19">
                          AI
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <div className="helpdesk" />
                  <div className="container-47">
                    <div className="IT-HELPDESK-wrapper">
                      <p className="p">
                        <span className="text-wrapper-19">
                          IT HELPDESK
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <div className="wordpress" />
                  <div className="container-47">
                    <div className="heading-17">
                      <p className="p">
                        <span className="text-wrapper-19">
                          WORDPRESS
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥</span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="webflow-logo-icon"
                    alt="Webflow logo icon"
                    src="/img/webflow-logo-icon-169218-mv0jm2rgoesvgv5n-svg-1.svg"
                  />
                  <div className="div-wrapper-3">
                    <div className="div-wrapper-3">
                      <p className="div-4">
                        <span className="text-wrapper-19">
                          WEBFLOW
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥︎ </span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="bubble-icon-seeklogo"
                    alt="Bubble icon seeklogo"
                    src="/img/bubble-icon-seeklogo-d95pn7rp7vspwrvv-svg-1.svg"
                  />
                  <div className="div-wrapper-3">
                    <div className="div-wrapper-3">
                      <p className="div-4">
                        <span className="text-wrapper-19">
                          BUBBLE
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 2560 && (
                <>
                  <div className="heading-18">
                    <p className="SKILLS-GOT-SOME-2">
                      <span className="text-wrapper-21">SKILLS? GOT </span>
                      <span className="text-wrapper-22">SOME</span>
                    </p>
                  </div>
                  <img className="container-48" alt="Container" src="/img/container.svg" />
                  <img className="container-49" alt="Container" src="/img/container-1.svg" />
                  <img className="ps-white-2" alt="Ps white" src="/img/ps-white-awv5xdqr46tnvr3w-svg.svg" />
                  <div className="ps-svg-2" />
                  <div className="helpdesk-2" />
                  <div className="wordpress-2" />
                  <div className="container-50">
                    <div className="heading-19">
                      <p className="p">
                        <span className="text-wrapper-19">
                          AI
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <div className="overlap-group-3">
                    <div className="container-51">
                      <div className="WORDPRESS-wrapper">
                        <p className="p">
                          <span className="text-wrapper-19">
                            WORDPRESS
                            <br />
                          </span>
                          <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥</span>
                        </p>
                      </div>
                    </div>
                    <div className="container-52">
                      <div className="heading-20">
                        <p className="p">
                          <span className="text-wrapper-19">
                            IT HELPDESK
                            <br />
                          </span>
                          <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-53">
                    <div className="heading-21">
                      <p className="p">
                        <span className="text-wrapper-19">
                          ADOBE PHOTOSHOP
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="webflow-logo-icon-2"
                    alt="Webflow logo icon"
                    src="/img/webflow-logo-icon-169218-mv0jm2rgoesvgv5n-svg.svg"
                  />
                  <div className="container-54">
                    <div className="WEBFLOW-wrapper">
                      <p className="p">
                        <span className="text-wrapper-19">
                          WEBFLOW
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥︎ </span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="bubble-icon-seeklogo-2"
                    alt="Bubble icon seeklogo"
                    src="/img/bubble-icon-seeklogo-d95pn7rp7vspwrvv-svg.svg"
                  />
                  <div className="container-55">
                    <div className="BUBBLE-wrapper">
                      <p className="p">
                        <span className="text-wrapper-19">
                          BUBBLE
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="section-5"
            style={{
              height: screenWidth < 768 ? "823px" : screenWidth >= 2560 ? "682px" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
            }}
          >
            <div
              className="container-56"
              style={{
                height: screenWidth < 768 ? "823px" : screenWidth >= 2560 ? "682px" : undefined,
                marginLeft: screenWidth < 768 ? "-15.00px" : undefined,
                marginRight: screenWidth < 768 ? "-15.00px" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                width: screenWidth < 768 ? "320px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              <div
                className="overlap-group-4"
                style={{
                  height: screenWidth >= 2560 ? "259px" : screenWidth < 768 ? "294px" : undefined,
                  left: screenWidth >= 2560 ? "0" : screenWidth < 768 ? "16px" : undefined,
                  top: screenWidth >= 2560 ? "157px" : screenWidth < 768 ? "25px" : undefined,
                  width: screenWidth >= 2560 ? "470px" : screenWidth < 768 ? "288px" : undefined,
                }}
              >
                {screenWidth < 768 && (
                  <>
                    <div className="container-57">
                      <div className="container-58">
                        <div className="SO-DO-YOU-LIKE-MY-wrapper">
                          <div className="SO-DO-YOU-LIKE-MY">
                            SO DO YOU 
                            <br />
                            LIKE MY 
                            <br />
                            STUFF?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="uwu" />
                  </>
                )}

                <div
                  className="container-59"
                  style={{
                    height: screenWidth < 768 ? "186px" : screenWidth >= 2560 ? "259px" : undefined,
                    top: screenWidth < 768 ? "108px" : screenWidth >= 2560 ? "0" : undefined,
                    width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "410px" : undefined,
                  }}
                >
                  <div
                    className="if-you-re-looking-wrapper"
                    style={{
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      marginBottom: screenWidth >= 2560 ? "-0.83px" : undefined,
                      padding: screenWidth < 768 ? "0px 0px 0.67px" : undefined,
                      width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "100%" : undefined,
                    }}
                  >
                    <div
                      className="if-you-re-looking"
                      style={{
                        color:
                          screenWidth < 768
                            ? "var(--jamesdoscomshark)"
                            : screenWidth >= 2560
                            ? "var(--jamesdoscomwoodsmoke)"
                            : undefined,
                        fontFamily:
                          screenWidth < 768
                            ? "'Work Sans', Helvetica"
                            : screenWidth >= 2560
                            ? "var(--jamesdos-com-museomoderno-black-72-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth < 768
                            ? "16px"
                            : screenWidth >= 2560
                            ? "var(--jamesdos-com-museomoderno-black-72-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth >= 2560 ? "var(--jamesdos-com-museomoderno-black-72-font-style)" : undefined,
                        fontWeight:
                          screenWidth < 768
                            ? "400"
                            : screenWidth >= 2560
                            ? "var(--jamesdos-com-museomoderno-black-72-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth < 768
                            ? "0"
                            : screenWidth >= 2560
                            ? "var(--jamesdos-com-museomoderno-black-72-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth < 768
                            ? "22.4px"
                            : screenWidth >= 2560
                            ? "var(--jamesdos-com-museomoderno-black-72-line-height)"
                            : undefined,
                      }}
                    >
                      {screenWidth < 768 && (
                        <>
                          If you&#39;re looking for a 
                          <br />
                          website at a bargain price, 
                          <br />
                          SEO services, or custom AI 
                          <br />
                          images, feel free to reach 
                          <br />
                          out to me. I&#39;ll be more than 
                          <br />
                          happy to assist you 
                          <br />
                          professionally. Contact me 
                          <br />
                          now to discuss your project!
                        </>
                      )}

                      {screenWidth >= 2560 && (
                        <>
                          SO DO 
                          <br />
                          YOU LIKE 
                          <br />
                          MY STUFF?
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {screenWidth >= 2560 && <div className="uwu-mkjlxnfgkjwv" />}
              </div>
              <div
                className="form-wrapper"
                style={{
                  height: screenWidth < 768 ? "379px" : screenWidth >= 2560 ? "383px" : undefined,
                  left: screenWidth < 768 ? "16px" : screenWidth >= 2560 ? "567px" : undefined,
                  top: screenWidth < 768 ? "363px" : screenWidth >= 2560 ? "157px" : undefined,
                  width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "657px" : undefined,
                }}
              >
                <div
                  className="form"
                  style={{
                    height: screenWidth < 768 ? "378.56px" : screenWidth >= 2560 ? "382.56px" : undefined,
                    overflow: screenWidth < 768 ? "hidden" : undefined,
                  }}
                >
                  <div
                    className="container-60"
                    style={{
                      width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "657px" : undefined,
                    }}
                  >
                    <label className="text-wrapper-23" htmlFor="input-1">
                      Name
                    </label>
                    <div className="input">
                      <input
                        className="container-61"
                        id="input-1"
                        placeholder="Your name nickname or etc"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="container-62"
                    style={{
                      width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "657px" : undefined,
                    }}
                  >
                    <label className="text-wrapper-23" htmlFor="input-2">
                      Your email*
                    </label>
                    <div className="input">
                      <input className="container-61" id="input-2" placeholder="Your email address" type="email" />
                    </div>
                  </div>
                  <div
                    className="container-63"
                    style={{
                      width: screenWidth < 768 ? "288px" : screenWidth >= 2560 ? "657px" : undefined,
                    }}
                  >
                    <div className="text-wrapper-23">Message*</div>
                    <div className="textarea" />
                  </div>
                  <button
                    className="button"
                    style={{
                      maxWidth: screenWidth < 768 ? "328px" : screenWidth >= 2560 ? "657px" : undefined,
                      padding: screenWidth < 768 ? "14px 36px" : screenWidth >= 2560 ? "16px 40px" : undefined,
                    }}
                  >
                    <div className="text-wrapper-24">Submit</div>
                  </button>
                </div>
              </div>
              {screenWidth >= 2560 && (
                <div className="container-64">
                  <div className="container-65">
                    <div className="if-you-re-looking-2">
                      If you&#39;re looking for a website at a bargain 
                      <br />
                      price, SEO services, or custom AI images, 
                      <br />
                      feel free to reach out to me. I&#39;ll be more 
                      <br />
                      than happy to assist you professionally. 
                      <br />
                      Contact me now to discuss your project!
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="section-6"
            style={{
              flex: screenWidth < 768 ? "0 0 auto" : undefined,
              height: screenWidth >= 2560 ? "258px" : undefined,
              padding: screenWidth < 768 ? "0px 15px" : screenWidth >= 2560 ? "0px 348px" : undefined,
            }}
          >
            <div
              className="container-66"
              style={{
                height: screenWidth < 768 ? "269px" : screenWidth >= 2560 ? "258px" : undefined,
                marginLeft: screenWidth < 768 ? "-15.00px" : undefined,
                marginRight: screenWidth < 768 ? "-15.00px" : undefined,
                maxWidth: screenWidth < 768 ? "360px" : screenWidth >= 2560 ? "1224px" : undefined,
                width: screenWidth < 768 ? "320px" : screenWidth >= 2560 ? "1224px" : undefined,
              }}
            >
              <div
                className="container-67"
                style={{
                  height: screenWidth < 768 ? "55px" : screenWidth >= 2560 ? "25px" : undefined,
                  left: screenWidth < 768 ? "40px" : screenWidth >= 2560 ? "299px" : undefined,
                  top: screenWidth < 768 ? "27px" : screenWidth >= 2560 ? "33px" : undefined,
                  width: screenWidth < 768 ? "109px" : screenWidth >= 2560 ? "228px" : undefined,
                }}
              >
                <div
                  className="strong-wrapper"
                  style={{
                    marginBottom: screenWidth >= 2560 ? "-0.81px" : undefined,
                    padding: screenWidth < 768 ? "0px 0px 0.9px" : undefined,
                  }}
                >
                  <div
                    className="strong"
                    style={{
                      alignItems: screenWidth < 768 ? "flex-start" : undefined,
                      alignSelf: screenWidth >= 2560 ? "stretch" : undefined,
                      color: screenWidth >= 2560 ? "var(--jamesdoscomwoodsmoke)" : undefined,
                      display: screenWidth < 768 ? "inline-flex" : undefined,
                      flex: screenWidth < 768 ? "0 0 auto" : undefined,
                      fontFamily: screenWidth >= 2560 ? "'Work Sans', Helvetica" : undefined,
                      fontSize: screenWidth >= 2560 ? "18px" : undefined,
                      fontWeight: screenWidth >= 2560 ? "700" : undefined,
                      justifyContent: screenWidth < 768 ? "flex-end" : undefined,
                      letterSpacing: screenWidth >= 2560 ? "0" : undefined,
                      lineHeight: screenWidth >= 2560 ? "25.2px" : undefined,
                      marginLeft: screenWidth < 768 ? "-2.00px" : undefined,
                      marginTop: screenWidth >= 2560 ? "-1.00px" : undefined,
                      textAlign: screenWidth >= 2560 ? "right" : undefined,
                    }}
                  >
                    {screenWidth < 768 && (
                      <div className="you-will-find-me">
                        You will find
                        <br />
                        me here:
                      </div>
                    )}

                    {screenWidth >= 2560 && <>You will find me here:</>}
                  </div>
                </div>
              </div>
              <div
                className="container-68"
                style={{
                  left: screenWidth < 768 ? "162px" : screenWidth >= 2560 ? "546px" : undefined,
                  top: screenWidth < 768 ? "40px" : screenWidth >= 2560 ? "31px" : undefined,
                  width: screenWidth < 768 ? "74px" : screenWidth >= 2560 ? "110px" : undefined,
                }}
              >
                <div
                  className="container-69"
                  style={{
                    gap: screenWidth < 768 ? "16.99px" : screenWidth >= 2560 ? "15px" : undefined,
                    maxHeight: screenWidth < 768 ? "30px" : screenWidth >= 2560 ? "30.19px" : undefined,
                    padding:
                      screenWidth < 768 ? "0px 8.51px 0px 8.48px" : screenWidth >= 2560 ? "0px 7.5px" : undefined,
                  }}
                >
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img
                      className="link-8"
                      alt="Link"
                      src={screenWidth < 768 ? "/img/link-4.svg" : screenWidth >= 2560 ? "/img/link.svg" : undefined}
                    />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img
                      className="link-9"
                      style={{
                        marginRight: screenWidth < 768 ? "-40.00px" : undefined,
                      }}
                      alt="Link"
                      src={screenWidth < 768 ? "/img/link-5.svg" : screenWidth >= 2560 ? "/img/link-1.svg" : undefined}
                    />
                  </a>
                </div>
              </div>
              <div
                className="roz"
                style={{
                  alignItems: screenWidth >= 2560 ? "flex-start" : undefined,
                  backgroundImage: screenWidth < 768 ? "url(/img/roz-yan6beo7q6ckynpe-png-1.png)" : undefined,
                  backgroundPosition: screenWidth < 768 ? "50% 50%" : undefined,
                  backgroundSize: screenWidth < 768 ? "cover" : undefined,
                  display: screenWidth >= 2560 ? "flex" : undefined,
                  flexDirection: screenWidth >= 2560 ? "column" : undefined,
                  height: screenWidth < 768 ? "154px" : screenWidth >= 2560 ? "177px" : undefined,
                  justifyContent: screenWidth >= 2560 ? "center" : undefined,
                  left: screenWidth < 768 ? "124px" : screenWidth >= 2560 ? "665px" : undefined,
                  padding: screenWidth >= 2560 ? "0px 0px 0.19px" : undefined,
                  top: screenWidth < 768 ? "94px" : screenWidth >= 2560 ? "33px" : undefined,
                  width: screenWidth < 768 ? "149px" : screenWidth >= 2560 ? "178px" : undefined,
                }}
              >
                {screenWidth >= 2560 && <div className="roz-yanbeoqckynpe" />}
              </div>
            </div>
          </div>
        </div>
      )}

      {screenWidth >= 768 && screenWidth < 1024 && (
        <>
          <div className="section-7">
            <div className="container-70">
              <div className="james-dos-2">
                <div className="container-71">
                  <div className="container-72">
                    <div className="heading">
                      <div className="text-wrapper">Jamesdos</div>
                    </div>
                  </div>
                  <div className="container-73">
                    <div className="emphasis-hurricane-wrapper">
                      <div className="emphasis-hurricane">(Hurricane)</div>
                    </div>
                  </div>
                  <div className="container-74">
                    <div className="heading-2">
                      <div className="text-wrapper-2">Vermillion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-8">
            <div className="container-75">
              <div className="container-76">
                <div className="container-77">
                  <div className="strong-you-will-find-2">You will find me here:</div>
                </div>
              </div>
              <div className="container-78">
                <div className="container-79">
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img className="link-10" alt="Link" src="/img/link-10.svg" />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img className="link-11" alt="Link" src="/img/link-11.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-9">
            <div className="container-80">
              <div className="overlap-group-5">
                <div className="container-81">
                  <div className="heading-22">
                    <div className="text-wrapper-6">My projects:</div>
                  </div>
                </div>
                <div className="jameshurricane-3" />
              </div>
              <a className="link-12" href="https://codecomedy.jamesdos.com/" rel="noopener noreferrer" target="_blank">
                <div className="workx-3" />
                <a
                  className="link-13"
                  href="https://codecomedy.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="workx-4" />
                </a>
              </a>
              <div className="container-82">
                <div className="container-83">
                  <div className="link-codecomedy-wrapper">
                    <a
                      className="link-codecomedy-3"
                      href="https://codecomedy.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      CodeComedy
                    </a>
                  </div>
                  <div className="heading-8">
                    <a
                      className="link-all-works-by-2"
                      href="https://codecomedy.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      All works by James Dos 
                      <br />
                      (Konrad Panfiluk) and Mae Rivera&#39;s
                    </a>
                    <div className="link-14">
                      <a
                        className="text-wrapper-11"
                        href="https://codecomedy.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        (Si Chae-hee) sidekicks websites so 
                        <br />
                        twisted, they make the dark web 
                        <br />
                        look like a sunny stroll.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-84">
                <div className="heading-9">
                  <a
                    className="link-tunechuckles-3"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    TuneChuckles! (Music)
                  </a>
                  <a
                    className="text-wrapper-9"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    &#34;the beta version is ready.
                  </a>
                  <a
                    className="text-wrapper-9"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Special thanks special thanks to
                  </a>
                  <a
                    className="text-wrapper-9"
                    href="https://tunechuckles.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    시채희 Si Chae-hee&#34;
                  </a>
                </div>
              </div>
              <div className="container-85">
                <div className="container-86">
                  <div className="container-16">
                    <div className="text-wrapper-7">👇👇👇 Tap the pic 👇👇👇</div>
                  </div>
                  <div className="container-87">
                    <div className="text-wrapper-7">for a laugh, open sesame with joy!</div>
                  </div>
                </div>
              </div>
              <a
                className="link-15"
                href="https://tunechuckles.jamesdos.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="jasmine-tunechuckles-3" />
                <a
                  className="link-16"
                  href="https://tunechuckles.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="jasmine-tunechuckles-4" />
                </a>
              </a>
              <div className="container-88">
                <div className="container-89">
                  <div className="text-wrapper-7">
                    When clock winks, I craft and close. 
                    <br />
                    Time&#39;s my buddy, project&#39;s my jolly show!
                  </div>
                </div>
              </div>
              <div className="heading-23">
                <div className="link-17">
                  <a
                    className="window-james-dos"
                    href="https://window.jamesdos.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Window James dos 
                    <br />
                    Beta Edition v0.4
                  </a>
                </div>
              </div>
              <a className="link-18" href="https://window.jamesdos.com/" rel="noopener noreferrer" target="_blank">
                <div className="windowjamesdos-3" />
                <div className="windowjamesdos-4" />
              </a>
              <a className="link-19" href="https://www.konradpanfiluk.pl/" rel="noopener noreferrer" target="_blank">
                <div className="konradpanfiluk-ezgif-3" />
              </a>
              <div className="container-90">
                <div className="heading-24">
                  <div className="hurricane-studio-wrapper">
                    <a
                      className="hurricane-studio-4"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Hurricane Studio
                    </a>
                  </div>
                  <div className="link-20">
                    <a
                      className="hurricane-studio-5"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      &#34;Hurricane Studio: Konrad Panfiluk&#39;s
                    </a>
                    <a
                      className="text-wrapper-9"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      showcase of innovative projects.&#34;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-10">
            <div className="container-91">
              <div className="container-92">
                <p className="perpetually-2">
                  <span className="text-wrapper-25">
                    Perpetually 
                    <br />
                    contemplative
                    <br />{" "}
                  </span>
                  <span className="text-wrapper-26">INDIVIDUAL</span>
                </p>
                <div className="container-93">
                  <div className="container-94">
                    <div className="container-95">
                      <div className="independent">
                        Independent individual with a dark 
                        <br />
                        sense of humor and a passion for 
                        <br />
                        all things IT-related. Accomplished 
                        <br />
                        gamer with numerous global titles 
                        <br />
                        in various MOBA games. Lover of 
                        <br />
                        cats, Korean and Japanisu culture, 
                        <br />
                        and motorcycles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-25">
                <div className="text-wrapper-27">EDUCATION</div>
                <div className="container-96">
                  <div className="paragraph-4">
                    <div className="element-the-IT">
                      2015-2018
                      <br />
                      The IT profession
                      <br />
                      TEB Edukacja College
                    </div>
                    <div className="element-microsoft">
                      2017-2017
                      <br />
                      Microsoft HQ Warsaw 
                      <br />
                      Training: Cloud Technology 
                      <br />
                      with Certification.
                    </div>
                  </div>
                  <div className="container-97">
                    <div className="text-wrapper-14">
                      2019-2019
                      <br />
                      T-Matic Group Computer 
                      <br />
                      Plus Certified Adobe 
                      <br />
                      Photoshop CC Graphic 
                      <br />
                      Design Course.
                    </div>
                  </div>
                  <div className="school-but-who-cares-wrapper">
                    <div className="text-wrapper-14">
                      School, but who cares, 
                      <br />
                      right.
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-26">
                <div className="text-wrapper-27">EXPERIENCE</div>
                <div className="container-98">
                  <div className="paragraph-5">
                    <p className="element-computer-2">
                      <span className="text-wrapper-28">2011</span>
                      <span className="span-2">
                        -2023
                        <br />
                        Computer Repair: 
                        <br />
                        Software &amp; Hardware.
                      </span>
                    </p>
                    <div className="element-riot-games">
                      2016-2018
                      <br />
                      Riot Games Player Support.
                      <br />
                      (Helpdesk)
                    </div>
                  </div>
                  <div className="container-97">
                    <div className="text-wrapper-14">
                      2020-2021
                      <br />
                      Daily Trader at Star Beta 
                      <br />
                      Poland Sp. z o. o. Krakow.
                    </div>
                  </div>
                  <div className="element-present-IT-wrapper">
                    <div className="element-present-IT">
                      2021-present
                      <br />
                      IT Helpdesk at Regional 
                      <br />
                      Hospital
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-9">
            <div className="section-11">
              <div className="container-99">
                <div className="overlap-group-6">
                  <div className="container-100">
                    <div className="heading-27">
                      <p className="SKILLS-GOT-SOME-3">
                        <span className="text-wrapper-29">SKILLS? GOT </span>
                        <span className="text-wrapper-30">SOME</span>
                      </p>
                    </div>
                  </div>
                  <img className="container-101" alt="Container" src="/img/container-2.svg" />
                  <img className="container-102" alt="Container" src="/img/container-3.svg" />
                  <div className="container-103">
                    <div className="container-104" />
                  </div>
                </div>
                <img className="container-105" alt="Container" src="/img/container-4.svg" />
                <div className="container-106">
                  <div className="ps-svg-wrapper">
                    <div className="ps-svg-3" />
                  </div>
                </div>
                <div className="container-107">
                  <div className="helpdesk-wrapper">
                    <div className="helpdesk-3" />
                  </div>
                </div>
                <div className="wordpress-wrapper">
                  <div className="wordpress-3" />
                </div>
                <div className="overlap-2">
                  <div className="container-108">
                    <div className="heading-28">
                      <p className="div-5">
                        <span className="text-wrapper-19">
                          AI
                          <br />
                        </span>
                        <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                  <div className="container-109">
                    <div className="heading-29">
                      <p className="div-5">
                        <span className="text-wrapper-19">
                          WORDPRESS
                          <br />
                        </span>
                        <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♥</span>
                      </p>
                    </div>
                  </div>
                  <div className="heading-30">
                    <p className="div-5">
                      <span className="text-wrapper-19">
                        IT HELPDESK
                        <br />
                      </span>
                      <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                    </p>
                  </div>
                  <div className="container-110">
                    <div className="heading-31">
                      <p className="div-5">
                        <span className="text-wrapper-19">
                          ADOBE PHOTOSHOP
                          <br />
                        </span>
                        <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                </div>
                <img className="container-111" alt="Container" src="/img/container-5.svg" />
                <div className="overlap-3">
                  <div className="container-112">
                    <div className="heading-17">
                      <p className="div-5">
                        <span className="text-wrapper-19">
                          WEBFLOW
                          <br />
                        </span>
                        <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♥︎ </span>
                      </p>
                    </div>
                  </div>
                  <div className="container-113">
                    <div className="heading-28">
                      <p className="div-5">
                        <span className="text-wrapper-19">
                          BUBBLE
                          <br />
                        </span>
                        <span className="text-wrapper-31">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                </div>
                <img className="container-114" alt="Container" src="/img/container-6.svg" />
              </div>
            </div>
          </div>
          <div className="section-12">
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="overlap-5">
                  <div className="overlap-group-7">
                    <div className="container-115">
                      <div className="heading-32">
                        <div className="SO-DO-YOU-LIKE-MY-2">
                          SO DO 
                          <br />
                          YOU LIKE 
                          <br />
                          MY STUFF?
                        </div>
                      </div>
                    </div>
                    <div className="container-116">
                      <div className="uwu-wrapper">
                        <div className="uwu-2" />
                      </div>
                    </div>
                  </div>
                  <div className="container-117">
                    <div className="form-2">
                      <div className="container-118">
                        <label className="text-wrapper-23" htmlFor="input-3">
                          Name
                        </label>
                        <div className="input">
                          <input
                            className="container-61"
                            id="input-3"
                            placeholder="Your name nickname or etc"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="container-119">
                        <label className="text-wrapper-23" htmlFor="input-4">
                          Your email*
                        </label>
                        <div className="input">
                          <input className="container-61" id="input-4" placeholder="Your email address" type="email" />
                        </div>
                      </div>
                      <div className="container-120">
                        <div className="text-wrapper-23">Message*</div>
                        <div className="textarea" />
                      </div>
                      <button className="button-2">
                        <div className="text-wrapper-24">Submit</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container-121">
                  <div className="container-122">
                    <div className="if-you-re-looking-2">
                      If you&#39;re looking for a website at a bargain 
                      <br />
                      price, SEO services, or custom AI images, 
                      <br />
                      feel free to reach out to me. I&#39;ll be more 
                      <br />
                      than happy to assist you professionally. 
                      <br />
                      Contact me now to discuss your project!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-13">
            <div className="container-123">
              <div className="container-124">
                <div className="container-125">
                  <div className="you-will-find-me-wrapper">
                    <div className="you-will-find-me">
                      You will find me 
                      <br />
                      here:
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-126">
                <div className="container-127">
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img className="link-21" alt="Link" src="/img/link-8.svg" />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img className="link-22" alt="Link" src="/img/link-9.svg" />
                  </a>
                </div>
              </div>
              <div className="roz-2" />
            </div>
          </div>
        </>
      )}

      {screenWidth >= 1024 && screenWidth < 1440 && (
        <div className="container-128">
          <div className="section-wrapper">
            <div className="section-14">
              <div className="container-129">
                <div className="james-dos-3">
                  <div className="container-130">
                    <div className="container-131">
                      <div className="heading-33">
                        <div className="text-wrapper-32">Jamesdos</div>
                      </div>
                    </div>
                    <div className="container-132">
                      <div className="heading-34">
                        <div className="text-wrapper-33">Vermillion</div>
                      </div>
                    </div>
                    <div className="container-133">
                      <div className="heading-35">
                        <div className="emphasis-hurricane-3">(Hurricane)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-15">
            <div className="container-134">
              <div className="container-135">
                <div className="container-136">
                  <div className="strong-you-will-find-3">You will find me here:</div>
                </div>
              </div>
              <div className="container-137">
                <div className="container-138">
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img className="link-23" alt="Link" src="/img/link-16.svg" />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img className="link-24" alt="Link" src="/img/link-17.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-16">
            <div className="container-139">
              <div className="overlap-group-8">
                <div className="container-140">
                  <div className="my-projects-wrapper">
                    <div className="text-wrapper-10">
                      My 
                      <br />
                      projects:
                    </div>
                  </div>
                </div>
                <div className="container-141">
                  <div className="container-142">
                    <div className="container-143">
                      <div className="jameshurricane-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-144">
                <a
                  className="link-25"
                  href="https://codecomedy.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="workx-4" />
                </a>
              </div>
              <div className="container-145">
                <div className="container-146">
                  <div className="heading-36">
                    <a
                      className="link-codecomedy-2"
                      href="https://codecomedy.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      CodeComedy
                    </a>
                  </div>
                  <div className="heading-37">
                    <a
                      className="text-wrapper-11"
                      href="https://codecomedy.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      All works by James Dos 
                      <br />
                      (Konrad Panfiluk) and Mae Rivera&#39;s
                    </a>
                    <div className="link-26">
                      <a
                        className="text-wrapper-11"
                        href="https://codecomedy.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        (Si Chae-hee) sidekicks websites so twisted, they make the 
                        <br />
                        dark web look like a sunny stroll.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-6">
                <div className="container-147">
                  <div className="heading-38">
                    <div className="link-27">
                      <a
                        className="tune-chuckles"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TuneChuckles!
                      </a>
                      <a
                        className="music"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        (Music)
                      </a>
                      <a
                        className="the-beta-version-is"
                        href="https://tunechuckles.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        &#34;the beta version is ready.
                      </a>
                    </div>
                    <a
                      className="link-special-thanks-2"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Special thanks special thanks to
                    </a>
                    <a
                      className="link-si-chae-hee"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      시채희 Si Chae-hee&#34;
                    </a>
                  </div>
                </div>
                <div className="container-148">
                  <a className="link-28" href="https://window.jamesdos.com/" rel="noopener noreferrer" target="_blank">
                    <div className="windowjamesdos-5" />
                  </a>
                </div>
              </div>
              <div className="container-149">
                <div className="container-150">
                  <div className="container-151">
                    <div className="text-wrapper-7">👇👇👇 Tap the pic 👇👇👇</div>
                  </div>
                  <div className="container-152">
                    <div className="for-a-laugh-open">for a laugh, open sesame with joy!</div>
                  </div>
                </div>
              </div>
              <div className="container-153">
                <a
                  className="link-28"
                  href="https://tunechuckles.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="jasmine-tunechuckles-4" />
                </a>
              </div>
              <div className="container-154">
                <div className="container-155">
                  <div className="text-wrapper-7">
                    When clock winks, I craft and close. 
                    <br />
                    Time&#39;s my buddy, project&#39;s my jolly 
                    <br />
                    show!
                  </div>
                </div>
              </div>
              <div className="container-156">
                <div className="heading-39" />
              </div>
              <div className="link-29">
                <a
                  className="window-james-dos-2"
                  href="https://window.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Window James dos Beta Edition v0.4
                </a>
              </div>
              <div className="container-157">
                <a className="link-25" href="https://www.konradpanfiluk.pl/" rel="noopener noreferrer" target="_blank">
                  <div className="konradpanfiluk-ezgif-4" />
                </a>
              </div>
              <div className="container-158">
                <div className="heading-40">
                  <div className="link-6">
                    <a
                      className="hurricane-studio-3"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Hurricane Studio
                    </a>
                  </div>
                  <div className="link-30">
                    <a
                      className="hurricane-studio-2"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      &#34;Hurricane Studio: Konrad Panfiluk&#39;s
                    </a>
                    <a
                      className="text-wrapper-8"
                      href="https://www.konradpanfiluk.pl/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      showcase of innovative projects.&#34;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-17">
            <div className="container-159">
              <div className="overlap-group-9">
                <div className="container-160">
                  <div className="heading-41">
                    <p className="perpetually-3">
                      <span className="text-wrapper-34">
                        Perpetually 
                        <br />
                        contemplative
                        <br />{" "}
                      </span>
                      <span className="text-wrapper-35">INDIVIDUAL</span>
                    </p>
                  </div>
                </div>
                <div className="container-161">
                  <div className="container-162">
                    <div className="independent">
                      Independent individual with a dark 
                      <br />
                      sense of humor and a passion for 
                      <br />
                      all things IT-related. Accomplished 
                      <br />
                      gamer with numerous global titles 
                      <br />
                      in various MOBA games. Lover of 
                      <br />
                      cats, Korean and Japanisu culture, 
                      <br />
                      and motorcycles.
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-163">
                <div className="heading-42">
                  <div className="text-wrapper-27">EDUCATION</div>
                </div>
              </div>
              <div className="container-164">
                <div className="container-165">
                  <div className="paragraph-6">
                    <div className="div-2">
                      2015-2018
                      <br />
                      The IT profession
                      <br />
                      TEB Edukacja College
                    </div>
                    <div className="div-3">
                      2017-2017
                      <br />
                      Microsoft HQ Warsaw 
                      <br />
                      Training: Cloud Technology 
                      <br />
                      with Certification.
                    </div>
                  </div>
                  <div className="container-97">
                    <div className="text-wrapper-14">
                      2019-2019
                      <br />
                      T-Matic Group Computer 
                      <br />
                      Plus Certified Adobe 
                      <br />
                      Photoshop CC Graphic 
                      <br />
                      Design Course.
                    </div>
                  </div>
                  <div className="school-but-who-cares-wrapper">
                    <div className="text-wrapper-14">
                      School, but who cares, 
                      <br />
                      right.
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-166">
                <div className="heading-43">
                  <div className="text-wrapper-36">EXPERIENCE</div>
                </div>
              </div>
              <div className="container-167">
                <div className="container-168">
                  <div className="paragraph-7">
                    <p className="element-computer">
                      <span className="text-wrapper-37">2011</span>
                      <span className="span-2">
                        -2023
                        <br />
                        Computer Repair: 
                        <br />
                        Software &amp; Hardware.
                      </span>
                    </p>
                    <div className="div-3">
                      2016-2018
                      <br />
                      Riot Games Player Support.
                      <br />
                      (Helpdesk)
                    </div>
                  </div>
                  <div className="paragraph-8">
                    <div className="div-2">
                      2020-2021
                      <br />
                      Daily Trader at Star Beta 
                      <br />
                      Poland Sp. z o. o. Krakow.
                    </div>
                    <div className="div-3">
                      2021-present
                      <br />
                      IT Helpdesk at Regional 
                      <br />
                      Hospital
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-18">
            <div className="container-169">
              <div className="container-170">
                <div className="heading-27">
                  <p className="SKILLS-GOT-SOME-4">
                    <span className="text-wrapper-21">SKILLS? GOT </span>
                    <span className="text-wrapper-22">SOME</span>
                  </p>
                </div>
              </div>
              <img className="container-171" alt="Container" src="/img/container-9.svg" />
              <img className="container-172" alt="Container" src="/img/container-10.svg" />
              <img className="container-173" alt="Container" src="/img/container-11.svg" />
              <div className="container-174">
                <div className="container-175">
                  <div className="ps-svg-3" />
                </div>
              </div>
              <div className="container-176">
                <div className="container-177">
                  <div className="helpdesk-3" />
                </div>
              </div>
              <div className="container-178">
                <div className="container-179">
                  <div className="wordpress-3" />
                </div>
              </div>
              <div className="container-180">
                <div className="heading-28">
                  <p className="p">
                    <span className="text-wrapper-19">
                      AI
                      <br />
                    </span>
                    <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                  </p>
                </div>
              </div>
              <div className="container-181">
                <div className="heading-29">
                  <p className="p">
                    <span className="text-wrapper-19">
                      WORDPRESS
                      <br />
                    </span>
                    <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥</span>
                  </p>
                </div>
              </div>
              <div className="heading-44">
                <p className="p">
                  <span className="text-wrapper-19">
                    IT HELPDESK
                    <br />
                  </span>
                  <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                </p>
              </div>
              <div className="container-182">
                <div className="heading-45">
                  <p className="p">
                    <span className="text-wrapper-19">
                      ADOBE PHOTOSHOP
                      <br />
                    </span>
                    <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                  </p>
                </div>
              </div>
              <img className="container-183" alt="Container" src="/img/container-12.svg" />
              <div className="container-184">
                <div className="heading-46">
                  <p className="p">
                    <span className="text-wrapper-19">
                      WEBFLOW
                      <br />
                    </span>
                    <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥︎ </span>
                  </p>
                </div>
              </div>
              <img className="container-185" alt="Container" src="/img/container-13.svg" />
              <div className="container-186">
                <div className="heading-28">
                  <p className="p">
                    <span className="text-wrapper-19">
                      BUBBLE
                      <br />
                    </span>
                    <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-19">
            <div className="container-187">
              <div className="overlap-group-10">
                <div className="container-188">
                  <div className="heading-47">
                    <div className="SO-DO-YOU-LIKE-MY-3">
                      SO DO 
                      <br />
                      YOU LIKE 
                      <br />
                      MY STUFF?
                    </div>
                  </div>
                </div>
                <div className="container-189">
                  <div className="uwu-wrapper">
                    <div className="uwu-2" />
                  </div>
                </div>
              </div>
              <div className="container-190">
                <div className="form-2">
                  <div className="container-191">
                    <label className="text-wrapper-23" htmlFor="input-5">
                      Name
                    </label>
                    <div className="input">
                      <input
                        className="container-61"
                        id="input-5"
                        placeholder="Your name nickname or etc"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="container-192">
                    <label className="text-wrapper-23" htmlFor="input-6">
                      Your email*
                    </label>
                    <div className="input">
                      <input className="container-61" id="input-6" placeholder="Your email address" type="email" />
                    </div>
                  </div>
                  <div className="container-193">
                    <div className="text-wrapper-23">Message*</div>
                    <div className="textarea" />
                  </div>
                  <button className="button-3">
                    <div className="text-wrapper-24">Submit</div>
                  </button>
                </div>
              </div>
              <div className="container-194">
                <div className="container-195">
                  <div className="if-you-re-looking-2">
                    If you&#39;re looking for a website at a 
                    <br />
                    bargain price, SEO services, or 
                    <br />
                    custom AI images, feel free to 
                    <br />
                    reach out to me. I&#39;ll be more than 
                    <br />
                    happy to assist you professionally. 
                    <br />
                    Contact me now to discuss your 
                    <br />
                    project!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-20">
            <div className="container-196">
              <div className="container-197">
                <div className="container-198">
                  <div className="you-will-find-me-wrapper">
                    <div className="you-will-find-me-2">
                      You will find me 
                      <br />
                      here:
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-199">
                <div className="container-200">
                  <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                    <img className="link-31" alt="Link" src="/img/link-18.svg" />
                  </a>
                  <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                    <img className="link-32" alt="Link" src="/img/link-19.svg" />
                  </a>
                </div>
              </div>
              <div className="container-201">
                <div className="container-202">
                  <div className="roz-wrapper">
                    <div className="roz-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {screenWidth >= 1440 && screenWidth < 2560 && (
        <>
          <div className="section-21">
            <div className="section-22">
              <div className="container-129">
                <div className="james-dos-4">
                  <div className="container-203">
                    <div className="overlap-group">
                      <div className="container-3">
                        <div className="heading-3">
                          <div className="text-wrapper-3">Jamesdos</div>
                        </div>
                      </div>
                      <div className="container-4">
                        <div className="heading-4">
                          <div className="emphasis-hurricane-2">(Hurricane)</div>
                        </div>
                      </div>
                      <div className="container-5">
                        <div className="heading-5">
                          <div className="text-wrapper-4">Vermillion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-204">
            <div className="section-23">
              <div className="container-205">
                <div className="container-206">
                  <div className="container-207">
                    <div className="strong-you-will-find-3">You will find me here:</div>
                  </div>
                </div>
                <div className="container-208">
                  <div className="container-209">
                    <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                      <img className="link-33" alt="Link" src="/img/link-4.svg" />
                    </a>
                    <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                      <img className="link-34" alt="Link" src="/img/link-13.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-24">
              <div className="container-210">
                <div className="overlap-7">
                  <div className="overlap-group-11">
                    <div className="container-211">
                      <div className="heading-48">
                        <div className="text-wrapper-10">My projects:</div>
                      </div>
                    </div>
                    <div className="container-212">
                      <div className="jameshurricane-2" />
                    </div>
                  </div>
                  <div className="container-213">
                    <div className="container-86">
                      <div className="container-26">
                        <div className="text-wrapper-7">👇👇👇 Tap the pic 👇👇👇</div>
                      </div>
                      <div className="container-214">
                        <div className="text-wrapper-7">for a laugh, open sesame with joy!</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="workx-wrapper"
                  href="https://codecomedy.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="workx-2" />
                </a>
                <div className="container-28">
                  <div className="container-29">
                    <div className="heading-11">
                      <a
                        className="link-codecomedy-2"
                        href="https://codecomedy.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        CodeComedy
                      </a>
                    </div>
                    <div className="heading-12">
                      <a
                        className="text-wrapper-11"
                        href="https://codecomedy.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        All works by James Dos 
                        <br />
                        (Konrad Panfiluk) and Mae Rivera&#39;s
                      </a>
                      <div className="link-5">
                        <a
                          className="text-wrapper-11"
                          href="https://codecomedy.jamesdos.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          (Si Chae-hee) sidekicks websites so twisted, they make the dark web 
                          <br />
                          look like a sunny stroll.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-30">
                  <div className="heading-13">
                    <a
                      className="link-tunechuckles-2"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TuneChuckles! (Music)
                    </a>
                    <a
                      className="text-wrapper-8"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      &#34;the beta version is ready.
                    </a>
                    <a
                      className="text-wrapper-8"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Special thanks special thanks to
                    </a>
                    <a
                      className="text-wrapper-8"
                      href="https://tunechuckles.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      시채희 Si Chae-hee&#34;
                    </a>
                  </div>
                </div>
                <a
                  className="jasmine-tunechuckles-wrapper"
                  href="https://tunechuckles.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="jasmine-tunechuckles-2" />
                </a>
                <div className="container-31">
                  <div className="container-32">
                    <div className="text-wrapper-7">
                      When clock winks, I craft and close. Time&#39;s 
                      <br />
                      my buddy, project&#39;s my jolly show!
                    </div>
                  </div>
                </div>
                <div className="container-33">
                  <div className="heading-49">
                    <a
                      className="link-window-james"
                      href="https://window.jamesdos.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Window James dos Beta Edition v0.4
                    </a>
                  </div>
                </div>
                <a
                  className="windowjamesdos-wrapper"
                  href="https://window.jamesdos.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="windowjamesdos-2" />
                </a>
                <a className="link-35" href="https://www.konradpanfiluk.pl/" rel="noopener noreferrer" target="_blank">
                  <div className="konradpanfiluk-ezgif-2" />
                </a>
                <div className="container-34">
                  <div className="heading-14">
                    <div className="link-6">
                      <a
                        className="hurricane-studio-3"
                        href="https://www.konradpanfiluk.pl/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Hurricane Studio
                      </a>
                    </div>
                    <div className="link-7">
                      <a
                        className="hurricane-studio-2"
                        href="https://www.konradpanfiluk.pl/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        &#34;Hurricane Studio: Konrad Panfiluk&#39;s
                      </a>
                      <a
                        className="text-wrapper-8"
                        href="https://www.konradpanfiluk.pl/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        showcase of innovative projects.&#34;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-25">
              <div className="container-215">
                <div className="container-216">
                  <div className="heading-50">
                    <p className="perpetually-3">
                      <span className="text-wrapper-38">
                        Perpetually 
                        <br />
                        contemplative 
                        <br />
                      </span>
                      <span className="text-wrapper-39">INDIVIDUAL</span>
                    </p>
                  </div>
                </div>
                <div className="container-217">
                  <div className="container-218">
                    <div className="independent">
                      Independent individual with a dark sense 
                      <br />
                      of humor and a passion for all things IT-
                      <br />
                      related. Accomplished gamer with 
                      <br />
                      numerous global titles in various MOBA 
                      <br />
                      games. Lover of cats, Korean and Japanisu 
                      <br />
                      culture, and motorcycles.
                    </div>
                  </div>
                </div>
                <div className="container-219">
                  <div className="heading-51">
                    <div className="text-wrapper-27">EDUCATION</div>
                  </div>
                </div>
                <div className="container-220">
                  <div className="container-221">
                    <div className="paragraph-6">
                      <div className="div-2">
                        2015-2018
                        <br />
                        The IT profession
                        <br />
                        TEB Edukacja College
                      </div>
                      <div className="div-3">
                        2017-2017
                        <br />
                        Microsoft HQ Warsaw Training: 
                        <br />
                        Cloud Technology with 
                        <br />
                        Certification.
                      </div>
                    </div>
                    <div className="container-97">
                      <div className="text-wrapper-14">
                        2019-2019
                        <br />
                        T-Matic Group Computer Plus 
                        <br />
                        Certified Adobe Photoshop CC 
                        <br />
                        Graphic Design Course.
                      </div>
                    </div>
                    <div className="container-222">
                      <div className="text-wrapper-14">School, but who cares, right.</div>
                    </div>
                  </div>
                </div>
                <div className="container-223">
                  <div className="heading-52">
                    <div className="text-wrapper-27">EXPERIENCE</div>
                  </div>
                </div>
                <div className="container-224">
                  <div className="container-225">
                    <div className="paragraph-9">
                      <p className="element-computer">
                        <span className="text-wrapper-40">2011</span>
                        <span className="span-2">
                          -2023
                          <br />
                          Computer Repair: Software &amp; 
                          <br />
                          Hardware.
                        </span>
                      </p>
                      <div className="div-3">
                        2016-2018
                        <br />
                        Riot Games Player Support.
                        <br />
                        (Helpdesk)
                      </div>
                    </div>
                    <div className="paragraph-10">
                      <div className="div-2">
                        2020-2021
                        <br />
                        Daily Trader at Star Beta Poland 
                        <br />
                        Sp. z o. o. Krakow.
                      </div>
                      <div className="div-3">
                        2021-present
                        <br />
                        IT Helpdesk at Regional Hospital
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-26">
              <div className="container-226">
                <div className="container-227">
                  <div className="heading-53">
                    <p className="SKILLS-GOT-SOME-2">
                      <span className="text-wrapper-21">SKILLS? GOT </span>
                      <span className="text-wrapper-22">SOME</span>
                    </p>
                  </div>
                </div>
                <img className="container-48" alt="Container" src="/img/container-7.svg" />
                <img className="container-49" alt="Container" src="/img/container-8.svg" />
                <img className="ps-white-2" alt="Ps white" src="/img/ps-white-awv5xdqr46tnvr3w-svg-2.svg" />
                <div className="ps-svg-4" />
                <div className="helpdesk-4" />
                <div className="wordpress-2" />
                <div className="container-228">
                  <div className="heading-54">
                    <p className="p">
                      <span className="text-wrapper-19">
                        AI
                        <br />
                      </span>
                      <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                    </p>
                  </div>
                </div>
                <div className="overlap-group-12">
                  <div className="container-51">
                    <div className="WORDPRESS-wrapper">
                      <p className="p">
                        <span className="text-wrapper-19">
                          WORDPRESS
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥</span>
                      </p>
                    </div>
                  </div>
                  <div className="container-52">
                    <div className="heading-55">
                      <p className="p">
                        <span className="text-wrapper-19">
                          IT HELPDESK
                          <br />
                        </span>
                        <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container-229">
                  <div className="heading-21">
                    <p className="p">
                      <span className="text-wrapper-19">
                        ADOBE PHOTOSHOP
                        <br />
                      </span>
                      <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                    </p>
                  </div>
                </div>
                <img
                  className="webflow-logo-icon-2"
                  alt="Webflow logo icon"
                  src="/img/webflow-logo-icon-169218-mv0jm2rgoesvgv5n-svg-2.svg"
                />
                <div className="container-230">
                  <div className="heading-56">
                    <p className="p">
                      <span className="text-wrapper-19">
                        WEBFLOW
                        <br />
                      </span>
                      <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♥︎ </span>
                    </p>
                  </div>
                </div>
                <img
                  className="bubble-icon-seeklogo-3"
                  alt="Bubble icon seeklogo"
                  src="/img/bubble-icon-seeklogo-d95pn7rp7vspwrvv-svg-2.svg"
                />
                <div className="container-231">
                  <div className="heading-57">
                    <p className="p">
                      <span className="text-wrapper-19">
                        BUBBLE
                        <br />
                      </span>
                      <span className="text-wrapper-20">︎ ♥︎ ♥︎ ♥︎ ♡</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-27">
              <div className="container-232">
                <div className="overlap-group-13">
                  <div className="container-233">
                    <div className="heading-58">
                      <div className="SO-DO-YOU-LIKE-MY-3">
                        SO DO 
                        <br />
                        YOU LIKE 
                        <br />
                        MY STUFF?
                      </div>
                    </div>
                  </div>
                  <div className="uwu-3" />
                </div>
                <div className="container-234">
                  <div className="form-2">
                    <div className="container-235">
                      <label className="text-wrapper-23" htmlFor="input-7">
                        Name
                      </label>
                      <div className="input">
                        <input
                          className="container-61"
                          id="input-7"
                          placeholder="Your name nickname or etc"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="container-236">
                      <label className="text-wrapper-23" htmlFor="input-8">
                        Your email*
                      </label>
                      <div className="input">
                        <input className="container-61" id="input-8" placeholder="Your email address" type="email" />
                      </div>
                    </div>
                    <div className="container-237">
                      <div className="text-wrapper-23">Message*</div>
                      <div className="textarea" />
                    </div>
                    <button className="button-2">
                      <div className="text-wrapper-24">Submit</div>
                    </button>
                  </div>
                </div>
                <div className="container-64">
                  <div className="container-65">
                    <div className="if-you-re-looking-2">
                      If you&#39;re looking for a website at a bargain 
                      <br />
                      price, SEO services, or custom AI images, 
                      <br />
                      feel free to reach out to me. I&#39;ll be more 
                      <br />
                      than happy to assist you professionally. 
                      <br />
                      Contact me now to discuss your project!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-28">
              <div className="container-238">
                <div className="container-239">
                  <div className="container-240">
                    <div className="strong-you-will-find-3">You will find me here:</div>
                  </div>
                </div>
                <div className="container-241">
                  <div className="container-209">
                    <a href="https://www.facebook.com/ocsanha" rel="noopener noreferrer" target="_blank">
                      <img className="link-36" alt="Link" src="/img/link.svg" />
                    </a>
                    <a href="https://www.instagram.com/kotekfotek" rel="noopener noreferrer" target="_blank">
                      <img className="link-37" alt="Link" src="/img/link-1.svg" />
                    </a>
                  </div>
                </div>
                <div className="roz-yanbeoqckynpe-wrapper">
                  <div className="roz-yanbeoqckynpe" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {((screenWidth >= 1024 && screenWidth < 1440) || (screenWidth >= 1440 && screenWidth < 2560)) && (
        <div
          className="container-242"
          style={{
            width:
              screenWidth >= 1440 && screenWidth < 2560
                ? "1440px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "1024px"
                : undefined,
          }}
        >
          <header
            className="header-2"
            style={{
              flex: screenWidth >= 1024 && screenWidth < 1440 ? "0 0 auto" : undefined,
              height: screenWidth >= 1440 && screenWidth < 2560 ? "94.8px" : undefined,
              padding: screenWidth >= 1440 && screenWidth < 2560 ? "0px 108px" : undefined,
            }}
          >
            <div className="container-6">
              <div
                className="nav-list-2"
                style={{
                  height: screenWidth >= 1440 && screenWidth < 2560 ? "29.9px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 2560
                      ? "1106.05px"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "906.05px"
                      : undefined,
                }}
              >
                <div className="item">
                  <div className="label">
                    <div className="div-wrapper-2">
                      <a
                        className="text-wrapper-5"
                        href="https://codecomedy.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        CODE COMEDY
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="label">
                    <div className="div-wrapper-2">
                      <a
                        className="text-wrapper-5"
                        href="https://window.jamesdos.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WINDOW JAMES EDITION BETA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="margin-2"
                style={{
                  alignItems:
                    screenWidth >= 1440 && screenWidth < 2560
                      ? "center"
                      : screenWidth >= 1024 && screenWidth < 1440
                      ? "flex-start"
                      : undefined,
                  height: screenWidth >= 1440 && screenWidth < 2560 ? "29.9px" : undefined,
                  justifyContent: screenWidth >= 1440 && screenWidth < 2560 ? "center" : undefined,
                }}
              >
                <div className="container-7">
                  <div className="div-wrapper-2">
                    <div className="en">EN</div>
                  </div>
                  <img
                    className="SVG-margin"
                    alt="Svg margin"
                    src={
                      screenWidth >= 1440 && screenWidth < 2560
                        ? "/img/svg-margin-1.svg"
                        : screenWidth >= 1024 && screenWidth < 1440
                        ? "/img/svg-margin-2.svg"
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
    </div>
  );
};
