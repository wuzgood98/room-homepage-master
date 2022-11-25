import mobileOne from "../assets/images/mobile-image-hero-1.jpg";
import mobileTwo from "../assets/images/mobile-image-hero-2.jpg";
import mobileThree from "../assets/images/mobile-image-hero-3.jpg";
import desktopOne from "../assets/images/desktop-image-hero-1.jpg";
import desktopTwo from "../assets/images/desktop-image-hero-2.jpg";
import desktopThree from "../assets/images/desktop-image-hero-3.jpg";

const randomNumber = () => Math.floor(Math.random() * 100000);

const galleryData = [
  {
    id: randomNumber(),
    mobileImg: mobileOne,
    desktopImg: desktopOne,
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    action: "Shop now",
  },
  {
    id: randomNumber(),
    mobileImg: mobileTwo,
    desktopImg: desktopTwo,
    title: "We are available all across the globe",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today.",
    action: "Shop now",
  },
  {
    id: randomNumber(),
    mobileImg: mobileThree,
    desktopImg: desktopThree,
    title: "Manufactured with the best materials",
    content:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office.",
    action: "Shop now",
  },
];

export default galleryData;
