import Image from "next/image";

type Media = {
  id: string;
  src: string;
  alt?: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
};

type ProductMediaGalleryProps = {
  mediaList: Media[];
};

export default function ProductMediaGallery({ mediaList }: ProductMediaGalleryProps) {
  return (
    <section
      id="MediaGallery"
      role="region"
      aria-label="ギャラリービュー"
      className="product__column-sticky"
    >
      <div id="GalleryStatus" className="visually-hidden" role="status" />
      <div className="slider-mobile-gutter">
        <a href="#ProductInfo" className="skip-to-content-link button visually-hidden quick-add-hidden">
          商品情報にスキップ
        </a>
        <ul className="product__media-list contains-media grid grid--peek list-unstyled slider slider--mobile" role="list">
          {mediaList.map((media, index) => (
            <li
              key={media.id}
              id={`Slide-${media.id}`}
              className={`product__media-item grid__item slider__slide scroll-trigger animate--fade-in ${index === 0 ? "is-active" : ""}`}
              data-media-id={media.id}
            >
              <div
                className="product-media-container media-type-image media-fit-contain global-media-settings gradient constrain-height"
                style={{ "--ratio": "1.0", "--preview-ratio": "1.0" } as React.CSSProperties}
              >
                <div className="product__media media media--transparent">
                  <Image
                    src={media.src}
                    alt={media.alt || ""}
                    width={media.width}
                    height={media.height}
                    loading="lazy"
                    sizes={media.sizes}
                    className="image-magnify-lightbox"
                    // srcSet={media.srcSet}
                  />
                </div>
                <div className="product__modal-opener product__modal-opener--image no-js-hidden">
                  <span
                    className="product__media-icon motion-reduce quick-add-hidden product__media-icon--lightbox"
                    aria-hidden="true"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="icon icon-plus"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <button
                    className="product__media-toggle quick-add-hidden product__media-zoom-lightbox"
                    type="button"
                    aria-haspopup="dialog"
                    data-media-id={media.id}
                  >
                    <span className="visually-hidden">
                      モーダルでメディア ({index + 1}) を開く
                    </span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
