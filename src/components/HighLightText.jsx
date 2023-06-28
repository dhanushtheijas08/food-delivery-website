function HighLightText({children, classname}) {
  return <label className={`px-3 py-1 text-sm font-medium rounded-full ${classname}`}>{children}</label>
}

export default HighLightText;