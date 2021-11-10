import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);
  const [cardLoader, setCardLoader] = useState(true);

  const { alt_description, urls } = props.image;
  const imageRef = React.createRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", (e) => {
      const height = e.target.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
      setCardLoader(false);
    });
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      {cardLoader && <Loader active={cardLoader} inline="centered" />}
      <img
        ref={imageRef}
        alt={alt_description}
        src={urls.regular}
        style={{ width: "277px" }}
      />
    </div>
  );
};

export default ImageCard;
