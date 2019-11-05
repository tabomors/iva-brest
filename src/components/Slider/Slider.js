import React from 'react';
import Carousel from 'nuka-carousel';
import Img from 'gatsby-image';
import backIcon from '../../images/other/back.svg';
import nextIcon from '../../images/other/next.svg';
import styles from './Slider.module.css';

// NOTE: was copied from nuka-carousel inernals
const prevButtonDisabled = params => {
  const { currentSlide, wrapAround, slideCount } = params;
  console.log('test', {
    currentSlide,
    wrapAround,
    slideCount,
  });
  return (currentSlide === 0 && !wrapAround) || slideCount === 0;
};

// NOTE: was copied from nuka-carousel inernals
const nextButtonDisabled = params => {
  const {
    wrapAround,
    slidesToShow,
    currentSlide,
    cellAlign,
    slideCount,
  } = params;

  let buttonDisabled = false;
  if (!wrapAround) {
    const lastSlideIndex = slideCount - 1;
    let slidesShowing = slidesToShow;
    let lastSlideOffset = 0;

    switch (cellAlign) {
      case 'center':
        slidesShowing = (slidesToShow - 1) * 0.5;
        lastSlideOffset = Math.floor(slidesToShow * 0.5) - 1;
        break;
      case 'right':
        slidesShowing = 1;
        break;
    }

    if (slidesToShow > 1) {
      buttonDisabled =
        currentSlide + slidesShowing > lastSlideIndex + lastSlideOffset;
    } else {
      buttonDisabled = currentSlide + 1 > lastSlideIndex;
    }
  }
  return buttonDisabled;
};

const Slider = ({ images }) => {
  return (
    <Carousel
      framePadding={'0px'}
      className={styles.slider}
      slidesToShow={4}
      enableKeyboardControls
      renderCenterLeftControls={({ previousSlide, ...otherProps }) => {
        return (
          <button
            onClick={previousSlide}
            className={`${styles.arrowControl} ${
              prevButtonDisabled(otherProps) ? styles.arrowControlDisabled : ''
            }`}
          >
            <img src={backIcon} alt="Стрелка назад" width={100} />
            <span>Назад</span>
          </button>
        );
      }}
      renderCenterRightControls={({ nextSlide, ...otherProps }) => {
        console.log('otherProps', otherProps);
        return (
          <button
            onClick={nextSlide}
            className={`${styles.arrowControl} ${
              nextButtonDisabled(otherProps) ? styles.arrowControlDisabled : ''
            }`}
          >
            <img src={nextIcon} alt="Стрелка вперёд" width={100} />
            <span>Вперёд</span>
          </button>
        );
      }}
      renderBottomCenterControls={null}
    >
      {images.map(({ fixed, id }) => (
        <div key={id}>
          <Img fixed={fixed} alt="Slider image" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
