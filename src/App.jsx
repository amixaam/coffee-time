import "./App.css";

import logo from "./assets/logo.png";
import heroImage from "./assets/images/775.png";
import coffeeImage from "./assets/images/776.png";
import coffeeImage2 from "./assets/images/777.png";

import wave1 from "./assets/waves/wave1.png";
import wave2 from "./assets/waves/wave2.png";
import wave3 from "./assets/waves/wave3.png";
import wave4 from "./assets/waves/wave4.png";
import wave5 from "./assets/waves/wave5.png";

import voucher from "./assets/images/voucher.png";
import ella from "./assets/images/ella.png";
import john from "./assets/images/john.png";

import newYork from "./assets/images/newYork.png";
import paris from "./assets/images/paris.png";
import jakarta from "./assets/images/jakarta.png";

import fbIcon from "./assets/icons/fb.png";
import igIcon from "./assets/icons/ig.png";
import twtIcon from "./assets/icons/twt.png";
import ytIcon from "./assets/icons/yt.png";

const Navbar = () => {
    return (
        <nav className="content-margins">
            <div className="left-side">
                <a href="#" className="selected">
                    Home
                </a>
                <a href="#">About</a>
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
                <img src={logo} alt="Coffee Time logo" />
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
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Blog</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
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

function App() {
    return (
        <main className="app-view">
            <Navbar />
            <header className="hero-wrapper">
                <img src={heroImage} alt="" className="hero-image p-abs" />
                <img src={wave1} alt="" className="transition p-abs" />

                <div className="content-wrapper flex-col content-margins">
                    <h1>Coffee Time</h1>
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
                <div className="content-wrapper flex-col content-margins-big">
                    <div className="call-to-action flex-col">
                        <h1>Black Coffees</h1>
                        <Button content="order now" color="dark" />
                    </div>
                    <div className="showcase flex-col">
                        <img src={coffeeImage} alt="image of a coffee mug" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis accusamus aperiam deleniti, dicta
                            eligendi, quos veritatis debitis sunt neque sed aut
                            natus, iste voluptatum. Velit at accusamus dolorum.
                        </p>
                    </div>
                </div>
            </section>
            <main className="main-wrapper flex-col">
                <img src={wave2} alt="" className="transition-top p-abs" />
                <img src={wave3} alt="" className="transition-bottom p-abs" />

                <div className="content-wrapper-r flex-col content-margins-big">
                    <div className="showcase flex-col">
                        <img src={coffeeImage} alt="image of a coffee mug" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis accusamus aperiam deleniti, dicta
                            eligendi, quos veritatis debitis sunt neque sed aut
                            natus, iste voluptatum. Velit at accusamus dolorum.
                        </p>
                    </div>
                    <div className="call-to-action flex-col">
                        <h1>Hot Coffees</h1>
                        <Button content="order now" />
                    </div>
                </div>

                <div className="content-wrapper-l flex-col content-margins-big">
                    <div className="call-to-action flex-col">
                        <h1>White Coffees</h1>
                        <Button content="order now" />
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
                    </div>
                </div>
                <div className="voucher-wrapper flex-col content-margins-big">
                    <div className="voucher flex-col">
                        <h1>Voucher</h1>
                        <img src={voucher} alt="Image of a voucher 45% off" />
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
