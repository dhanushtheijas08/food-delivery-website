function Heading({ children, classname }) {
  return (
    <h2
      className={`text-2xl md:text-4xl font-medium ${
        classname ? classname : null
      }`}
    >
      {children}
    </h2>
  );
}

export default Heading;
