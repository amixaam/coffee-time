import "./App.css";

import logo from "./assets/logo.png";
import heroImage from "./assets/images/775.png";
import coffeeImage from "./assets/images/776.png";
import coffeeImage2 from "./assets/images/777.png";
import coffeImage3 from "./assets/images/778.png";

import wave1 from "./assets/waves/wave1.png";
import wave2 from "./assets/waves/wave2.png";
import wave3 from "./assets/waves/wave3.png";
import wave4 from "./assets/waves/wave4.png";
import wave5 from "./assets/waves/wave5.png";

import ella from "./assets/images/ella.png";
import john from "./assets/images/john.png";

import voucher from "./assets/images/voucher.png";

import newYork from "./assets/images/newYork.png";
import paris from "./assets/images/paris.png";
import jakarta from "./assets/images/jakarta.png";

import fbIcon from "./assets/icons/fb.png";
import igIcon from "./assets/icons/ig.png";
import twtIcon from "./assets/icons/twt.png";
import ytIcon from "./assets/icons/yt.png";
import whyIcon from "./assets/icons/why.png";

import waveBottom from "./assets/voucher/waveBottom.png";
import waveTop from "./assets/voucher/waveTop.png";
import imageWDiscount from "./assets/voucher/imageWDiscount.png";

import coffeeBeanIcon from "./assets/icons/coffeeBean.png";
import coffeeIcon from "./assets/icons/coffee.png";
import coffeePotIcon from "./assets/icons/coffeePot.png";
import FriesBarPopup from "./Components/FriesBarPopup";
import { useEffect, useState } from "react";

const Navbar = ({ badMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleState = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (badMode) {
        return (
            <>
                <FriesBarPopup isOpen={isMenuOpen} toggleState={toggleState} />
                <nav
                    className={`c-margins sm-between ${
                        isScrolled ? "scrolled" : ""
                    }`}
                >
                    <div className="left-side s">
                        <a href="#" className="selected hide-s-screen">
                            Home
                        </a>
                        <a href="#" className="hide-s-screen">
                            About
                        </a>
                        <a href="#" className="hide-s-screen">
                            Menu
                        </a>
                        <a href="#" className="hide-s-screen">
                            Blog
                        </a>
                        <a href="#" className="hide-s-screen">
                            Shop
                        </a>
                        <a href="#" className="hide-s-screen">
                            Contact
                        </a>
                        <button className="s-m-s" onClick={toggleState}>
                            <img src={whyIcon} alt="" />
                        </button>
                    </div>
                    <img src={logo} alt="Coffee Time logo" className="logo" />
                </nav>
            </>
        );
    }

    return (
        <nav className={`c-margins ${isScrolled ? "scrolled" : ""}`}>
            <div className="left-side">
                <a href="#" className="selected hide-s-screen">
                    Home
                </a>
                <a href="#" className="hide-s-screen">
                    About
                </a>
                <a href="#">Menu</a>
                <a href="#">Blog</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </div>
            <img src={logo} alt="Coffee Time logo" className="logo" />
        </nav>
    );
};
const Footer = () => {
    return (
        <footer className="flex-col">
            <div className="contacts-wrapper content-margins">
                <img src={logo} alt="Coffee Time logo" className="logo" />
                <div className="information flex-col">
                    <h2>Information.</h2>
                    <div className="links flex-col">
                        <a href="#">About us</a>
                        <a href="#">Branches</a>
                        <a href="#">Menu</a>
                        <a href="#">Contact</a>
                        <a href="#">Map</a>
                    </div>
                </div>
                <div className="contact-us flex-col">
                    <h2>Contact Us.</h2>
                    <div className="links flex-col">
                        <a href="#">Support</a>
                        <a href="#">your_id@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-nav content-margins flex-row">
                <div className="left-side flex-row">
                    <a href="#" className="hide-s-screen">
                        Home
                    </a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Blog</a>
                    <a href="#">Shop</a>
                    <a href="#" className="hide-s-screen">
                        Contact
                    </a>
                </div>
                <div className="socials flex-row">
                    <a href="#">
                        <img src={fbIcon} alt="Facebook icon" />
                    </a>
                    <a href="#">
                        <img src={igIcon} alt="Instagram icon" />
                    </a>
                    <a href="#">
                        <img src={twtIcon} alt="Twitter icon" />
                    </a>
                    <a href="#">
                        <img src={ytIcon} alt="Youtube icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
const Button = ({ content = "button", color = "light", ...props }) => {
    return (
        <button
            className={`flex-button ${color === "dark" ? "dark-v" : ""}`}
            {...props}
        >
            {content}
        </button>
    );
};
export const Icon = ({ type, size, top, left, rotate, hideMobile = true }) => {
    const imgRotation = rotate ? rotate : 0;
    const imgSize = size ? size : "auto";
    const imgTop = top ? top : "0";
    const imgLeft = left ? left : "0";

    return (
        <img
            src={type}
            className={hideMobile ? "hide-s-screen" : "show-s"}
            style={{
                position: "absolute",
                rotate: imgRotation,
                height: imgSize,
                top: imgTop,
                left: imgLeft,
                filter: "brightness(0.4)",
            }}
        />
    );
};

function App() {
    const badMode = false;

    return (
        <main className="app-view">
            <Navbar badMode={badMode} />
            <div className={badMode ? "spacer-bad" : "spacer"}></div>
            <header className="hero-wrapper">
                <img src={heroImage} alt="" className="hero-image p-abs" />
                <img src={wave1} alt="" className="transition p-abs" />

                <Icon
                    type={coffeeIcon}
                    size="70px"
                    top="0"
                    left="55rem"
                    rotate="35deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="15rem"
                    left="45rem"
                    rotate="50deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="80px"
                    top="24rem"
                    left="27rem"
                    rotate="0deg"
                />

                <div className="content-wrapper flex-col content-margins">
                    <h1 className="header-title">Coffee Time</h1>
                    <div className="headline flex-col">
                        <h2>your headline</h2>
                        <p>
                            Lorem ipsum dolor sit amet. consectetur adipisicing
                            elit, Voluptate impedit, nesciunt adipisci delectus
                            voluptas neque dignissimos ex ad!
                        </p>
                        <Button content="order now" />
                    </div>
                </div>
            </header>
            <section className="black-coffee-wrapper flex-col">
                <Icon
                    type={coffeeBeanIcon}
                    size="70px"
                    top="-5rem"
                    left="16rem"
                    rotate="-25deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="3rem"
                    left="42rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="100px"
                    top="0rem"
                    left="85rem"
                    rotate="35deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="120px"
                    top="20rem"
                    left="40rem"
                    rotate="-10deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="70px"
                    top="25rem"
                    left="85rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="37rem"
                    left="12rem"
                    rotate="-15deg"
                />

                <Icon
                    type={coffeeBeanIcon}
                    size="60px"
                    top="0rem"
                    left="2rem"
                    rotate="-25deg"
                    hideMobile={false}
                />
                <Icon
                    type={coffeePotIcon}
                    size="80px"
                    top="15rem"
                    left="20rem"
                    rotate="45deg"
                    hideMobile={false}
                />

                <div className="content-wrapper flex-col content-margins-big">
                    <div className="call-to-action flex-col">
                        <h1>Black Coffees</h1>
                        <Button
                            content="order now"
                            color="dark"
                            className="hide-s-screen-btn hide-s-screen-btn-d"
                        />
                    </div>
                    <div className="showcase flex-col">
                        <img src={coffeeImage} alt="image of a coffee mug" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis accusamus aperiam deleniti, dicta
                            eligendi, quos veritatis debitis sunt neque sed aut
                            natus, iste voluptatum. Velit at accusamus dolorum.
                        </p>
                        <Button
                            content="order now"
                            color="dark"
                            className="show-s-screen show-s-screen-d"
                        />
                    </div>
                </div>
            </section>
            <main className="main-wrapper flex-col">
                <Icon
                    type={coffeeIcon}
                    size="90px"
                    top="15rem"
                    left="6rem"
                    rotate="0deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="16rem"
                    left="50rem"
                    rotate="50deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="70px"
                    top="30rem"
                    left="88rem"
                    rotate="50deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="100px"
                    top="45rem"
                    left="53rem"
                    rotate="50deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="70px"
                    top="65rem"
                    left="88rem"
                    rotate="25deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="70px"
                    top="115rem"
                    left="82rem"
                    rotate="0deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="120px"
                    top="138rem"
                    left="80rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="100px"
                    top="175rem"
                    left="81rem"
                    rotate="20deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="77rem"
                    left="45rem"
                    rotate="-25deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="75px"
                    top="165rem"
                    left="44rem"
                    rotate="35deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="57rem"
                    left="20rem"
                    rotate="-15deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="110px"
                    top="100rem"
                    left="20rem"
                    rotate="0deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="100px"
                    top="130rem"
                    left="10rem"
                    rotate="0deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="110px"
                    top="175rem"
                    left="7rem"
                    rotate="0deg"
                />

                <Icon
                    type={coffeeBeanIcon}
                    size="60px"
                    top="14rem"
                    left="2rem"
                    rotate="-25deg"
                    hideMobile={false}
                />
                <Icon
                    type={coffeeIcon}
                    size="80px"
                    top="27rem"
                    left="20rem"
                    rotate="45deg"
                    hideMobile={false}
                />

                <Icon
                    type={coffeePotIcon}
                    size="90px"
                    top="96rem"
                    left="2rem"
                    rotate="-25deg"
                    hideMobile={false}
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="70px"
                    top="84rem"
                    left="20rem"
                    rotate="0deg"
                    hideMobile={false}
                />

                <Icon
                    type={coffeePotIcon}
                    size="60px"
                    top="192rem"
                    left="1rem"
                    rotate="-25deg"
                    hideMobile={false}
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="40px"
                    top="182rem"
                    left="22rem"
                    rotate="0deg"
                    hideMobile={false}
                />

                <img src={wave2} alt="" className="transition-top p-abs" />
                <img src={wave3} alt="" className="transition-bottom p-abs" />

                <div className="content-wrapper-r flex-col content-margins-big">
                    <div className="showcase flex-col">
                        <img src={coffeImage3} alt="image of a coffee mug" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis accusamus aperiam deleniti, dicta
                            eligendi, quos veritatis debitis sunt neque sed aut
                            natus, iste voluptatum. Velit at accusamus dolorum.
                        </p>
                        <Button content="order now" className="show-s-screen" />
                    </div>
                    <div className="call-to-action flex-col">
                        <h1>Hot Coffees</h1>
                        <Button
                            content="order now"
                            className="hide-s-screen-btn"
                        />
                    </div>
                </div>

                <div className="content-wrapper-l flex-col content-margins-big">
                    <div className="call-to-action flex-col">
                        <h1>White Coffees</h1>
                        <Button
                            content="order now"
                            className="hide-s-screen-btn"
                        />
                    </div>
                    <div className="showcase flex-col">
                        <img src={coffeeImage2} alt="image of a coffee mug" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis accusamus aperiam deleniti, dicta
                            eligendi, quos veritatis debitis sunt neque sed aut
                            natus, iste voluptatum. Velit at accusamus dolorum.
                            Nobis accusamus aperiam deleniti, dicta eligendi.
                        </p>
                        <Button content="order now" className="show-s-screen" />
                    </div>
                </div>
                <div className="voucher-wrapper flex-col content-margins-big">
                    <div className="voucher flex-col">
                        <h1>Voucher</h1>
                        <img
                            src={voucher}
                            alt="A voucher discount for 45% off coffee"
                            className="show-s fake-card"
                        />
                        <div className="card hide-s-screen">
                            <Icon
                                type={coffeeBeanIcon}
                                size="25px"
                                top="5.5rem"
                                left="24rem"
                                rotate="-15deg"
                            />
                            <Icon
                                type={coffeePotIcon}
                                size="40px"
                                top="14.5rem"
                                left="21rem"
                                rotate="-15deg"
                            />
                            <Icon
                                type={coffeeBeanIcon}
                                size="35px"
                                top="14rem"
                                left="38rem"
                                rotate="45deg"
                            />
                            <Icon
                                type={coffeeIcon}
                                size="35px"
                                top="6rem"
                                left="34.5rem"
                                rotate="35deg"
                            />
                            <img
                                src={logo}
                                alt="Coffee Time logo"
                                className="logo"
                            />
                            <img src={waveTop} alt="" className="wave-top" />
                            <img
                                src={waveBottom}
                                alt=""
                                className="wave-bottom"
                            />
                            <img
                                src={imageWDiscount}
                                alt="Image with coffee with a 45% discount"
                                className="image-w-discount"
                            />
                            <div className="content">
                                <p className="fancy-text">Voucher Discount</p>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugit quas qui porro
                                    accusantium, sequi deserunt voluptatem
                                    tenetur perspiciatis.
                                </p>
                                <button className="small-button">
                                    validate untill: 01.05.2020
                                </button>
                            </div>
                            <div className="socials">
                                <div className="social">
                                    <div className="border">
                                        <img src={twtIcon} />
                                    </div>
                                    <p>your account</p>
                                </div>
                                <div className="social">
                                    <div className="border">
                                        <img src={igIcon} />
                                    </div>
                                    <p>your account</p>
                                </div>
                                <div className="social">
                                    <div className="border fb">
                                        <img src={fbIcon} />
                                    </div>
                                    <p>your account</p>
                                </div>
                            </div>
                        </div>
                        <Button content="get voucher now" />
                    </div>
                    <div className="reviews flex-col">
                        <h1>Customer Reviews</h1>
                        <div className="review-container">
                            <div className="review flex-col">
                                <img src={john} alt="Image of John Peter" />
                                <p className="fancy-text">John Peter</p>
                                <p className="content">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Minima unde laborum
                                    reprehenderit ipsum doloremque corrupti
                                    accusamus cupiditate eos debitis
                                </p>
                            </div>
                            <div className="review flex-col">
                                <img src={ella} alt="Image of Ella Thomson" />
                                <p className="fancy-text">Ella Thomson</p>
                                <p className="content">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Minima unde laborum
                                    reprehenderit ipsum doloremque corrupti
                                    accusamus cupiditate eos debitis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="open-times-wrapper flex-col">
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="5rem"
                    left="15rem"
                    rotate="-17deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="160px"
                    top="15rem"
                    left="20rem"
                    rotate="0deg"
                />

                <Icon
                    type={coffeePotIcon}
                    size="130px"
                    top="5rem"
                    left="75rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="120px"
                    top="25rem"
                    left="70rem"
                    rotate="45deg"
                />

                <h1>We are Open</h1>
                <div className="open-times flex-col">
                    <h3>Monday - Friday</h3>
                    <p>10:00 am - 10:00 pm</p>
                </div>
                <div className="open-times flex-col">
                    <h3>Saturday and Sunday</h3>
                    <p>10:00 am - 10:10 pm</p>
                </div>
            </section>
            <section className="branches-wrapper">
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="15rem"
                    left="20rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="18rem"
                    left="85rem"
                    rotate="-20deg"
                />
                <Icon
                    type={coffeePotIcon}
                    size="80px"
                    top="55rem"
                    left="30rem"
                    rotate="45deg"
                />
                <Icon
                    type={coffeeIcon}
                    size="70px"
                    top="58rem"
                    left="60rem"
                    rotate="0deg"
                />

                <Icon
                    type={coffeePotIcon}
                    size="60px"
                    top="14rem"
                    left="2rem"
                    rotate="-25deg"
                    hideMobile={false}
                />
                <Icon
                    type={coffeeBeanIcon}
                    size="50px"
                    top="22rem"
                    left="22rem"
                    rotate="45deg"
                    hideMobile={false}
                />
                <img src={wave4} alt="" className="transition-top p-abs" />
                <img src={wave5} alt="" className="transition-bottom p-abs" />

                <div className="content-wrapper flex-col content-margins">
                    <h1>Our branches</h1>
                    <div className="branch-wrapper">
                        <div className="branch flex-col">
                            <img src={newYork} alt="Image of New York Branch" />
                            <h2>New York</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Doloremque tempora alias
                                numquam nostrum quisquam aliquid fugiat suscipit
                                adipisci atque rem beatae eligendi placeat
                                deserunt, totam neque quidem repudiandae
                                laudantium doloribus!
                            </p>
                        </div>

                        <div className="branch flex-col">
                            <img src={jakarta} alt="Image of Jakarta Branch" />
                            <h2>Jakarta</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Doloremque tempora alias
                                numquam nostrum quisquam aliquid fugiat suscipit
                                adipisci atque rem beatae eligendi placeat
                                deserunt, totam neque quidem repudiandae
                                laudantium doloribus!
                            </p>
                        </div>

                        <div className="branch flex-col">
                            <img src={paris} alt="Image of Paris Branch" />
                            <h2>Paris</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Doloremque tempora alias
                                numquam nostrum quisquam aliquid fugiat suscipit
                                adipisci atque rem beatae eligendi placeat
                                deserunt, totam neque quidem repudiandae
                                laudantium doloribus!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default App;
