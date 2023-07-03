import styles from "../styles/Elastic.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

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
    <ImageScrollStuled>
      <div className="contimg">
        <div className="imggal">
          <ImageGallery
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            items={images}
          />
        </div>
      </div>
    </ImageScrollStuled>
  );
}

const ImageScrollStuled = styled.section`
  .contimg {
    margin-top: 25rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 10rem;
    width: 100%;
  }

  .imggal {
    width: 70%;
    margin-left: 15%;

    @media (max-width: 900px) {
      width: 90%;
      margin-left: 5%;
    }
  }
  .image-gallery-slide .image-gallery-image {
    border-radius: 30px;
  }
`;
