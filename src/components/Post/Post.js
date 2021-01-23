import './publication.css';
import Publication from './Publication';

function Post(author, content, image, date) {
  return (
    <div>
      <Publication author={author}
        content={content}
        image={image}
        date={date} />
    </div>
  );
}

export default Post;