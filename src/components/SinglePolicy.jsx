const SinglePolicy = ({image, title, description}) => {
  return (
    <div>
      <img src={image} className="w-12 m-auto mb-5" alt="Exchange icon" />
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default SinglePolicy;
