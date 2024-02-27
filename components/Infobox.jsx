const Infobox = ({
  heading,
  bacgroundColor = "bg-gray-100",
  textColour = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div>
      <div className={`${bacgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColour}text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColour} mt-2 mb-4`}>{children}</p>
        <a
          href={buttonInfo.link}
          className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
        >
          {buttonInfo.text}
        </a>
      </div>
    </div>
  );
};

export default Infobox;
