const itemBarGroup = ({ title, images }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {images.map((image, index) => (
          <a href="" target="_blank" rel="noopener noreferrer">
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default itemBarGroup;
