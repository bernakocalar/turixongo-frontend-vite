import React, { FC, ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import checkInViewIntersectionObserver from "utils/isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  imageSize?: number; // Görselin boyutunu seçmek için bir özellik
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",  // Bu 'src' artık Picsum'dan alınacak URL ile değişecek
  className = "object-cover w-full h-full",
  imageSize = 200,  // Varsayılan görsel boyutu
  ...args
}) => {
  let isMounted = false;
  const _containerRef = useRef(null);
  let _imageEl: HTMLImageElement | null = null;

  const [__src, set__src] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const _initActions = async () => {
    // src değerini Picsum'dan almak
    const randomImageSrc = `https://picsum.photos/${imageSize}`;  // 200x200 boyutlarında rastgele görsel
    set__src(randomImageSrc);
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current,
      options: {
        root: null,
        rootMargin: "0%",
        threshold: 0,
      },
      freezeOnceVisible: true,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!__src) {
      _handleImageLoaded();
      return true;
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = __src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    if (!isMounted) return;
    setImageLoaded(true);
  };

  useEffect(() => {
    isMounted = true;
    _initActions();
    return () => {
      isMounted = false;
    };
  }, [imageSize]);

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      {__src && imageLoaded ? (
        <img src={__src} className={className} alt={alt} {...args} />
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default NcImage;
