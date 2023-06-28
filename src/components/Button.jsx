function Button({ children, primary, classname }) {
  return (
    <button
      className={`text-lg font-medium rounded-lg px-5 py-2 ${
        primary ? "text-white bg-orangeDark" : "bg-white text-textLigth"
      } ${classname ? classname : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
