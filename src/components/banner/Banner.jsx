function Banner(props) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <h1 className="banner_title">{props.title}</h1>
    </div>
  );
}

export default Banner;