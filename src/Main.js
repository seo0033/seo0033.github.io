import React, { useEffect, useRef, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Cover from './Cover';
import { profile, portfolio } from './Data';
import './Main.scss';

//portfolio배열에서 title을 빼서 배열을 만들어 씀.
const AC = portfolio.map(it => it = it.title);

const Main = () => {
  const [num, setNum] = useState(1);
  const [on, setOn] = useState(false)
  return (
    <div className='PF'>
      <Cover on={on} setOn={setOn} />
      <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
        <span>cover open</span>
      </button>
      <nav className='gnb container'>
        <ul>
          <li className={num == 0 ? "on" : ""}><a href={`#cover`}>HOME</a></li>
          {
            portfolio.map((it, idx) => {
              return (
                <li key={idx} className={it.id === num ? "on" : ""}>
                  <a href={`#${it.title}`}># 0{it.id}</a>
                </li>
              )
            })
          }
          <li className={num == 7 ? "on" : ""}><a href={`#footer`}>ABOUT</a></li>
        </ul>
      </nav>
      <div className="contact">
        <div className="call">
          <img src={process.env.PUBLIC_URL + '/img/callicon.png'} alt="" />
          {profile.tel}
        </div>
        <div className="mail">
          <img src={process.env.PUBLIC_URL + '/img/mailicon.png'} alt="" />
          {profile.email}
        </div>
      </div>

      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        anchors={['cover', ...AC, 'footer']}
        afterLoad={(o, d) => setNum(d.index)}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section home">
                <div className='tit'>
                  <h1>SEOYOUNG<br />2022<br />PORTFOLIO</h1>
                  <div className="move">
                    <span className='cs_01'></span>
                    <span className='cs_02'></span>
                    <span className='cs_03'></span>
                    <span className='cs_04'></span>
                  </div>
                  <div className="cursor"><img src={process.env.PUBLIC_URL + "/img/cursor.png"} alt="" /></div>
                </div>
              </div>
              {
                portfolio.map((it, idx) => {
                  return (
                    <div className="section project">
                      <div className="container">
                        <div className="photo">
                          <div className="window">
                            <ul className="dots">
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                            {it.title}
                          </div>
                          <figure>
                            <img src={it.src} alt={it.title} />
                          </figure>
                        </div>
                        <div className="desc">
                          <ul className="window">
                            <li className='bar'></li>
                            <li className='square'></li>
                            <li className='xicon'></li>
                          </ul>
                          <div className="txt">
                            <div className='box'>
                              <span>{it.span}</span>
                              <h2>{it.brand}</h2>
                              <dl>
                                <dt>TYPE</dt>
                                <dd>{it.type}</dd>
                              </dl>
                              <dl>
                                <dt>FONT</dt>
                                <ol>
                                  {
                                    it.font?.map((font, idx) => {
                                      return (
                                        <li>{font}</li>
                                      )
                                    })
                                  }
                                </ol>
                              </dl>
                              <dl>
                                <dt>TOOL</dt>
                                <dd>{it.skill}</dd>
                              </dl>
                              <dl>
                                {
                                  it.color && <dt>COLOR</dt>
                                }
                                <ul>
                                  {
                                    it.color?.map((color, idx) => {
                                      return (
                                        <li>
                                          <span style={{ background: color }}></span>
                                          <div className='color'>{color}</div>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </dl>
                              <a href={it.link}>VIEW WEB</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="section about">
                <div className="container">
                  <h2>ABOUT ME</h2>
                  <div className="box">
                    <div className="photo">
                      <img src={process.env.PUBLIC_URL + "/img/profile.jpg"} alt="" />
                    </div>
                    <div className="profile">
                      <dl>
                        <dt>Name</dt>
                        <dd>{profile.name}</dd>

                        <dt>E-mail</dt>
                        <dd>{profile.email}</dd>

                        <dt>University</dt>
                        <dd>{profile.university}</dd>

                        <dt>Academy</dt>
                        <dd>{profile.academy}</dd>

                        <dt>Skill</dt>
                        {
                          profile.skill?.map((skill, idx) => {
                            return (
                              <dd>{skill}</dd>
                            )
                          })
                        }
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper >
          );
        }}
      />
    </div>
  )
}

export default Main