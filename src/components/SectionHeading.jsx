function SectionHeading({sectionHeading, mainHeading, classname}) {
  return (<div className={classname}>
    <label className="block text-orangeDark text-xl md:text-2xl uppercase font-medium">{sectionHeading}</label>
    <h3 className="text-textDark text-2xl md:text-3xl lg:text-[2.6rem] font-semibold" >{mainHeading}</h3>
  </div>
  )
}


export default SectionHeading;