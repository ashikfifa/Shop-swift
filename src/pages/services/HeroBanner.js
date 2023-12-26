import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const banner1 =
  "https://rflbestbuy.com/images/promo/148/6-Months-0_-EMI-Slider-Desktop.jpg";
const banner2 = "https://rflbestbuy.com/images/promo/163/voucher_slider.webp";
const banner3 = "https://rflbestbuy.com/images/promo/165/electronics.webp";

const HeroBanner = () => {
  return (
    <>
      <HeroSlider
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide
          label="banner1"
          background={{
            backgroundImageSrc: banner1,
          }}
        />

        <Slide
          label="banner2"
          background={{
            backgroundImageSrc: banner2,
          }}
        />

        <Slide
          label="banner3"
          background={{
            backgroundImageSrc: banner3,
          }}
        />
      </HeroSlider>
    </>
  );
};

export default HeroBanner;
