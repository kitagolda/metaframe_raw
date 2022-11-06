import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

interface IProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithViewer = ({ src, alt, className }: IProps) => {
  const images = [src];
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <img
        onClick={openImageViewer}
        className={className}
        src={src}
        alt={alt}
      />
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default ImageWithViewer;
