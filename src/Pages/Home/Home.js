import React from 'react'
import Logo from "../../Assets/img/logo.png"
import ChatBubble from '../../Components/ChatBubble/ChatBubble'
import "../Home/Home.css"
import propic from "../../Assets/img/propic1.png"
import avatar from "../../Assets/img/avatar.png"
import Thomas from "../../Assets/img/Thomas.png"
import S from "../../Assets/img/s.png"
import Slack from "../../Assets/img/Slack.png"
import screenshot from "../../Assets/img/screenshot.png"
import A from "../../Assets/img/a.png"
import Joe from "../../Assets/img/joe.png"

import {
    ReloadOutlined,
    DesktopOutlined,
    MobileOutlined,
    CreditCardOutlined,
    BorderOutlined,
    StarOutlined,
    DeploymentUnitOutlined,
    MessageOutlined,
    SmileOutlined,
    SlackOutlined,
    OneToOneOutlined,
    HistoryOutlined,
    WechatOutlined
} from '@ant-design/icons';
import Mary from "../../Assets/img/mary.png"
import jacob from "../../Assets/img/jacob.png"
import martin from "../../Assets/img/martin.png"
import mia from "../../Assets/img/mia.png"
import { Divider } from 'antd';
import { Avatar } from 'antd';
import Collapse from '../../Components/Collapse/Collapse'

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

    const ChatMessages4 = [
        "Basically.",
        "Apps and web are our bread and butter.",
        "We can also give you an identity.",
        "We can even fix up your design system, or build you one entirely from scratch—they're super powerful.",
        "Or if you want some fun little icons.",
        "We can do that too.",
        "But we won't be making you any custom graphics for your gaming clan. We could, but you wouldn't like it.",
        "We'll just stick to what we're good at."
    ]

    const ChatMessages5 = [
        "Sure, one second.",
        "I was initially skeptical of 'Design-as-a-subscription', but working with Endless was an absolute dream.",
        "They nailed pretty much everything from social assets to an entire UX redesign first time—no revisions needed.",
        "I was extremely impressed with both the quantity and quality of work that was completed."
    ]

    const ChatMessages6 = [
        "Oh, hey there again.",
        "I'm honestly surprised you made it this far.",
        "Well, this is awkward.",
        "So, what now?"
    ]

    const ChatMessages7 = [
        "I guess you could see the subscription plans.",
        "As we'd love to work with you.",
        "See you in Slack?"
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
        
            {/* <div className='worksmain'>
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
            </div> */}
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
                    <div className='brands'>
                        <div className='brandworks'>
                            <span className='worklist'><BorderOutlined /> &nbsp;Branding</span>
                            <span className='worklist'><StarOutlined /> &nbsp;Design Systems</span>
                            <span className='worklist'><CreditCardOutlined /> &nbsp;Landing Pages</span>
                        </div>
                        <div className='brandworks'>
                            <span className='worklist'><MobileOutlined /> &nbsp;Mobile Apps</span>
                            <span className='worklist'><DesktopOutlined /> &nbsp;Web Apps</span>
                            <span className='worklist'><DeploymentUnitOutlined /> &nbsp;Icons</span>
                        </div>
                    </div>
                    <div className='chat' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={ChatMessages4} />
                    </div>

                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>now</span>
                    </div>

                    <div className='work'>
                        <h2 style={{ paddingBlock: "4vh" }}>Cool, how's it work?</h2>
                        <p>After subscribing, you and your team will be invited to an exclusive Slack channel to collaborate with us directly. From here, you can chat to us 1:1 and submit as many design requests as you like.</p>
                        <p>We'll close each of them off one by one and make as many revisions as you like.</p>
                        <p>It's that simple.</p>
                    </div>

                    <div className='notification'>
                        <div className='notifyHead'>
                            <img src={S} alt='s pic' style={{ borderRadius: "50%", width: "5%" }} /> &nbsp;You subscribed to Endless
                        </div>
                        <Divider style={{ margin: "5px auto" }} />
                        <div className='notifyBody'>
                            Acme, welcome to Endless.
                        </div>

                    </div>

                    <div className='propicdiv'>
                        <img src={Logo} alt="logo" className='propic' />
                        <span>2d ago</span>
                    </div>

                    <div className='notification'>
                        <div className='notifyHead'>
                            <img src={Slack} alt='slack pic' style={{ borderRadius: "50%", width: "35px" }} /> &nbsp;Endless invited you to Slack
                        </div>
                        <Divider style={{ margin: "5px auto" }} />
                        <div className='notifyBody'>
                            Join #acme and start making requests.
                        </div>

                    </div>

                    <div className='propicdiv'>
                        <img src={Logo} alt="logo" className='propic' />
                        <span>2d ago</span>
                    </div>

                    <div className='chat' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={["How can I help?"]} />
                    </div>

                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>2d ago</span>
                    </div>

                    <div className='chat sender' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={["Can you design us a feed for our app?"]} />
                    </div>

                    <div className='propicdiv' style={{ justifyContent: "flex-end" }}>
                        <img src={A} alt="logo" className='propic' />
                        <span>2d ago</span>
                    </div>

                    <div className='chat' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={["Sure, give me 2-3 business days."]} />
                    </div>

                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>2d ago</span>
                    </div>

                    <img src={screenshot} alt="logo" style={{ marginTop: "5vh", borderRadius: "2vh", width: "100%" }} />
                    <div className='chat' style={{ margin: 0 }}>
                        <ChatBubble message={["How's this?"]} />
                    </div>
                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>1m ago</span>
                    </div>

                    <div className='chat sender' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={["Perfect! Ready for the next request?"]} />
                    </div>

                    <div className='propicdiv' style={{ justifyContent: "flex-end" }}>
                        <img src={A} alt="logo" className='propic' />
                        <span>now</span>
                    </div>
                    <div className='chat' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={["Of course, what do you need?"]} />
                    </div>

                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>now</span>
                    </div>

                </div>

                <div className='pricing'>
                    <p>Tired of bad design?</p>
                    <p>Let's do something great.</p>
                    <p>Subscribe today.</p>

                    <div className='pricingcards'>
                        <div className='pcheader'>
                            <div> Monthly $4,999/mo</div>
                            <div><StarOutlined /> Popular</div>
                        </div>
                        <div style={{ textAlign: "left", marginTop: "5vh" }}>
                            Perfect for those with an on-going need for design work and a need to grow.
                        </div>

                        <div style={{ marginTop: "4vh", display: "flex", gap: "3vh" }}>
                            <button className='subscribe'>Subscribe</button>
                            <button className='chatbtn'><MessageOutlined /> Chat</button>

                        </div>
                        <p style={{ fontSize: "medium", marginTop: "2vh", color: "darkgray" }}>Limited availability</p>

                    </div>

                    <div className='pricingcards'>
                        <div className='pcheader'>
                            <div> Quarterly $4,499/mo</div>
                            <div><SmileOutlined /> Save $500/mo</div>
                        </div>
                        <div style={{ textAlign: "left", marginTop: "5vh" }}>
                            Perfect for startups and teams looking for design work on longer-term projects.
                        </div>

                        <div style={{ marginTop: "4vh", display: "flex", gap: "3vh" }}>
                            <button className='subscribe'>Subscribe</button>
                            <button className='chatbtn'><MessageOutlined /> Chat</button>

                        </div>
                        <p style={{ fontSize: "medium", marginTop: "2vh", color: "darkgray" }}>Paid quarterly</p>

                    </div>

                    <div className='workflow'>
                        <div>
                            <OneToOneOutlined style={{ marginBottom: "2vh" }} /><br />
                            <p>Unlimited design requests and revisions. Get the perfect design.</p>
                        </div>

                        <div>
                            <HistoryOutlined style={{ marginBottom: "2vh" }} /><br />
                            <p> Receive designs in 2-3 days on average. Make unlimited changes.</p>
                        </div>

                        <div>
                            <SlackOutlined style={{ marginBottom: "2vh" }} /><br />
                            <p>1:1 communication with a designer via a private Slack channel.</p>
                        </div>

                        <div>
                            <WechatOutlined style={{ marginBottom: "2vh" }} /><br />
                            <p>Everything is async. No calls or meetings to fill your calendar.</p>
                        </div>
                    </div>

                    <div className='chat' style={{ marginTop: "15vh" }}>
                        <ChatBubble message={["Can I get the testimonial?"]} />
                    </div>
                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>now</span>
                    </div>

                    <div className='chat sender' style={{ marginTop: "10vh" }}>
                        <ChatBubble message={ChatMessages5} />
                    </div>

                    <div className='propicdiv' style={{ justifyContent: "flex-end" }}>
                        <img src={Joe} alt="logo" className='propic' />
                        <span>2m ago</span>
                    </div>

                    <div className='chat' style={{ marginTop: "15vh" }}>
                        <ChatBubble message={["Thanks, Joe—you're too kind!"]} />
                    </div>
                    <div className='propicdiv'>
                        <img src={propic} alt="logo" className='propic' />
                        <span>now</span>
                    </div>

                    <div className='faq'>
                        <h2>Got some questions?</h2>
                        <h2>Here's some answers.</h2>
                        <br />
                        <Collapse
                            title={"How quickly will I receive designs?"}
                            body={"For simpler requests, you will receive a first draft in 2 buisness days, but some designs tasks can be incredibly complex and take longer."}
                        />

                        <Collapse
                            title={"Why no call or meetings?"}
                            body={"We prefer to keep communication async with Slack, Loom or even email. this is what helps us to be so efficient."}
                        />

                        <Collapse
                            title={"What if I don't like my design?"}
                            body={"Not a problem. We'll make endless revision to your design until you're 100% satisfied with the result."}
                        />

                        <Collapse
                            title={"Is there a request limit?"}
                            body={"No, there are no limits to the amount of design requests you can make. Make as many as you want, each will be completed one by one."}
                        />

                        <Collapse
                            title={"How do I manage my subscription?"}
                            body={"When signing up, you will receive a welcome email. This email will also contain a link to log into your customer portal where you wil be able to manager your subscription."}
                        />

                        <Collapse
                            title={"What design software do you use?"}
                            body={"We use Figma for all design projects."}
                        />


                        <div className='chat' style={{ marginTop: "10vh" }}>
                            <ChatBubble message={ChatMessages6} />
                        </div>

                        <div className='propicdiv'>
                            <img src={propic} alt="logo" className='propic' />
                            <span>1m ago</span>
                        </div>

                        <div className='chat' style={{ marginTop: "10vh" }}>
                            <ChatBubble message={ChatMessages7} />
                        </div>

                        <div className='propicdiv'>
                            <img src={propic} alt="logo" className='propic' />
                            <span>now</span>
                        </div>
                    </div>

                    <h3 style={{ textAlign: "left", marginTop: "10vh", color: "darkgray" }}>© 2023 Rejiggle</h3>
                </div>
            </div>
        </div>
    )
}
