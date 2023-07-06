import WorkingImage from "./WorkingImage";
import WorkingContent from "./WorkingContent";
function ContentWithImage({ imgPath, number, title, content }) {
  return (
    <div className="flex flex-col md:flex-row mt-10 justify-between items-center">
      <WorkingContent number={number} title={title} content={content} />
      <WorkingImage imgPath={imgPath} />
    </div>
  );
}
export default ContentWithImage;
