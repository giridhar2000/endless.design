import React from 'react'
import Logo from "../../Assets/img/logo.png"
import ChatBubble from '../../Components/ChatBubble/ChatBubble'
import "../Home/Home.css"
import propic from "../../Assets/img/propic1.png"
import avatar from "../../Assets/img/avatar.png"
import Thomas from "../../Assets/img/Thomas.png"
import { ReloadOutlined } from '@ant-design/icons';
import Mary from "../../Assets/img/mary.png"
import jacob from "../../Assets/img/jacob.png"
import martin from "../../Assets/img/martin.png"
import mia from "../../Assets/img/mia.png"
import { Divider } from 'antd';
import { Avatar } from 'antd';

export default function Home() {
    const ChatMessages1 = [
        "Hey, Daryl here, founder of Endless.",
        "So what's Endless? Good question.",
        "Endless is a design agency with a little twist.",
        "See, unlike relying on freelancers or spending months trying to hire the perfect designer, Endless keeps it simple and offers unlimited design requests for a flat monthly fee.",
        "You can create unlimited design requests and we'll close them off one by one within a few business days on average."
    ]

    const ChatMessages2 = [
        "It gets better.",
        "There's no calls to take up your time.",
        "No boring lengthy contracts to sign.",
        "You can chat directly to us anytime.",
        "You can even pause or cancel your subscription at any time should your need for design work dry up.",
        "We like to do things differently."
    ]

    const ChatMessages3 = [
        "Daryl again.",
        "Our goal is to make you a leader in your industry.",
        "So if you're not serious, close your tab.",
        "We only want to work with those who want to level up through the use of great design.",
        "We want to make your competition irrelevant.",
        "Honestly, I'll be disappointed if we don't.",
    ]

    return (
        <div className='homePage'>
            <div className='intro'>
                <img src={Logo} alt="logo" style={{ width: "12%" }} />

                <div className='introText'>
                    <p>One subscription.<br /><span style={{ color: "black" }}>Endless</span> design requests.</p>
                </div>

                <div className='chat'>
                    <ChatBubble message={ChatMessages1} />
                </div>

                <div className='propicdiv'>
                    <img src={propic} alt="logo" className='propic' />
                    <span>3m ago</span>
                </div>

                <div className='chat'>
                    <ChatBubble message={ChatMessages2} />
                </div>

                <div className='propicdiv'>
                    <img src={propic} alt="logo" className='propic' />
                    <span>1m ago</span>
                </div>

                <div className='chat'>
                    <ChatBubble message={["See subscription plans."]} />
                </div>

                <div className='propicdiv'>
                    <img src={propic} alt="logo" className='propic' />
                    <span>now</span>
                </div>
            </div>

            <div className='worksmain'>
                <span>Some of our work.</span>
                <div className='works'>
                    <div className='works left'>
                        <div>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div className='caldiv'>
                            <span style={{ fontSize: "x-large" }}>5 Day streak</span>
                            <span><p>10,482</p>&nbsp; kcal</span>
                            {/* <span></span> */}
                            <span style={{ color: "rgba(255, 255, 255, 0.72)" }}>keep it up, you're 2 days away from a 7 day streak!</span>
                        </div>
                        <div className='friendreq'>
                            <img src={avatar} alt='avatar' className='avatar' />
                            <span style={{ fontSize: "x-large", marginTop: "3vh" }}>Sarah Tonken</span>
                            <p>New York, NY</p>
                            <br />
                            <button className='addfriend'>Add friend</button>
                            <div className='avatargroup'>
                                <Avatar.Group maxCount={2}>
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                </Avatar.Group>
                                <div style={{ color: "darkgray" }}>24 friends in common</div>
                            </div>

                        </div>
                    </div>
                    <div className='works center'>
                        <div className='card'>
                            <div className='cardHeader'>
                                <span>Search or invite</span>
                            </div>
                            <Divider />
                            <div className='cardBody'>
                                <div className='invite'>
                                    <span>Invited</span>
                                </div>
                                <div className='profile'>
                                    <div className='profileHead'>
                                        <img src={Thomas} alt='thomas pic' />
                                        <div className='profileName'>
                                            <span>Thomas Merrick</span>
                                            <p style={{ color: "rgba(0,0,0,0.5)" }}>Invited 2 hours ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ReloadOutlined />
                                    </div>
                                </div>

                                <div className='profile'>
                                    <div className='profileHead'>
                                        <img src={Mary} alt='Mary pic' />
                                        <div className='profileName'>
                                            <span>Mary Smith</span>
                                            <p style={{ color: "rgba(0,0,0,0.5)" }}>Invited 2 hours ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ReloadOutlined />
                                    </div>
                                </div>

                                <div className='invite'>
                                    <span>Favourites</span>
                                </div>
                                <div className='profile'>
                                    <div className='profileHead'>
                                        <img src={jacob} alt='jacob pic' />
                                        <div className='profileName'>
                                            <span>Jacob Tyrell</span>
                                            <p style={{ color: "rgba(0,0,0,0.5)" }}>jct@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile'>
                                    <div className='profileHead'>
                                        <img src={martin} alt='martin pic' />
                                        <div className='profileName'>
                                            <span>Martin Jenkins</span>
                                            <p style={{ color: "rgba(0,0,0,0.5)" }}>m@mart.in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='works right'>
                        <div className='card'>
                            <div className='cardHeader'>
                                <div className='profileHead'>
                                    <img src={Mary} alt='martin pic' style={{ width: "15%" }} />
                                    <div className='profileName'>
                                        <span style={{ fontWeight: "600", color: "black" }}>Mia Simpson</span>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className='invite'>
                                <span>Teams</span>
                            </div>
                            <div className='teams'>
                                <div className='profileHead'>
                                    <img src={martin} alt='martin pic' />
                                    <div className='profileName'>
                                        <span>Acme</span>
                                    </div>
                                </div>
                            </div>

                            <span className='create'>Create a new team</span>
                            <Divider />
                            <ul className='list'>
                                <li><p>Analytics</p></li>
                                <li><p>Settings</p></li>
                                <li><p>Sign out</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeContent'>
                <div className='chat'>
                    <ChatBubble message={ChatMessages3} />
                </div>

                <div className='propicdiv'>
                    <img src={propic} alt="logo" className='propic' />
                    <span>2m ago</span>
                </div>

                <div className='chat'>
                    <ChatBubble message={["Want to make a good first impression?",
                        "See subscription plans."]} />
                </div>
                <div className='propicdiv'>
                    <img src={propic} alt="logo" className='propic' />
                    <span>now</span>
                </div>

                <div className='branding'>
                    <h2>We only design you what we're exceptionally good at.</h2><br />
                    <p>
                        We want to leave no room for disappointment, so we don't waste time designing things we aren't good at, we only design what we excel at.
                    </p>
                </div>
            </div>
        </div>
    )
}
