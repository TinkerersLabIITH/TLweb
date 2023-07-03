import styles from "../styles/Elastic.module.css";
import ImageGalery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "./imagescroll/Imagescroll1.png",
    thumbnail: "./imagescroll/Imagescroll1.png",
  },
  {
    original: "./imagescroll/Imagescroll2.png",
    thumbnail: "./imagescroll/Imagescroll2.png",
  },
  {
    original: "./imagescroll/Imagescroll4.png",
    thumbnail: "./imagescroll/Imagescroll4.png",
  },
  {
    original: "./imagescroll/Imagescroll5.png",
    thumbnail: "./imagescroll/Imagescroll5.png",
  },
  {
    original: "./imagescroll/Imagescroll3.png",
    thumbnail: "./imagescroll/Imagescroll3.png",
  },
];

export default function ImgGallery() {
  return (
    <div className={styles.contimg}>
      <div className={styles.imggal}>
        <ImageGalery showThumbnails={false} items={images} />
      </div>
    </div>
  );
}
