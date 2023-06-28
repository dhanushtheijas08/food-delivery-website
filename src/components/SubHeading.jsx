function SubHeading({children, classname}) {
  return <h4 className={`text-2xl font-medium text-textDark ${classname}`}> {children}</h4>
}

export default SubHeading;