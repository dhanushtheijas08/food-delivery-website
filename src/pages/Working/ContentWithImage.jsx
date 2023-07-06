import WorkingImage from "./WorkingImage";
import WorkingContent from "./WorkingContent";
function ContentWithImage({ imgPath, number, title, content, reverse }) {
  return (
    <div
      className={`flex flex-col justify-between items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <WorkingContent number={number} title={title} content={content} />
      <WorkingImage imgPath={imgPath} />
    </div>
  );
}
export default ContentWithImage;
