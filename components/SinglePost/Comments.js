import { useState } from 'react';
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import createComments from '../../mutation/comments';
import catchErrors from '../../utils/catchErrors';

const INITIAL_COMMENT = {
  name: '',
  email: '',
  newComment: '',
};

const Comments = ({ id, comments }) => {
  const [comment, setComment] = useState(INITIAL_COMMENT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [createComment, { dataMutation }] = useMutation(createComments);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { name, newComment } = comment;

      createComment({
        variables: {
          commentOn: id,
          content: newComment,
          author: name,
        },
      });
      setComment(INITIAL_COMMENT);
      setLoading(false);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='comments-area'>
        <h3 className='comments-title'>{comments.length} Comments:</h3>
        <ol className='comment-list'>
          <li className='comment'>
            {comments &&
              comments.map((comment, i) => (
                <div className='comment-body' key={i}>
                  <div className='comment-meta'>
                    <div className='comment-author vcard'>
                      <img
                        src='/img/user/avatar.png'
                        className='avatar'
                        alt='user'
                      />
                      <b className='fn'>{comment.author.node.name}</b>
                    </div>
                    <div className='comment-metadata'>
                      <span>{format(new Date(comment.date), 'PPPpp')}</span>
                    </div>
                  </div>
                  <div className='comment-content'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: comment.content,
                      }}
                    />
                  </div>
                </div>
              ))}
          </li>
        </ol>
        <div className='comment-respond'>
          <h3 className='comment-reply-title'>Leave A Reply</h3>
          <form className='comment-form' onSubmit={handleSubmit}>
            <p className='comment-notes'>
              <span id='email-notes'>
                Your email address will not be published.
              </span>
              Required fields are marked <span className='required'>*</span>
            </p>
            <p className='comment-form-author'>
              <label>
                Name <span className='required'>*</span>
              </label>
              <input
                type='text'
                id='author'
                placeholder='Your Name*'
                name='name' 
                required='required'
                value={comment.name}
                onChange={handleChange}
              />
            </p>
            <p className='comment-form-email'>
              <label>
                Email <span className='required'>*</span>
              </label>
              <input
                type='email'
                id='email'
                placeholder='Your Email*'
                name='email' 
                required='required'
                value={comment.email}
                onChange={handleChange}
              />
            </p>

            <p className='comment-form-comment'>
              <label>Comment</label>
              <textarea
                name='newComment'
                id='comment'
                cols='45'
                placeholder='Your Comment...'
                rows='5'
                maxLength='65525'
                required='required'
                value={comment.newComment}
                onChange={handleChange}
              ></textarea>
            </p>

            <p className='form-submit'>
              <button className='submit' id='submit'>
                Post A Comment
                {loading ? (
                  <Spinner
                    color='success'
                    className='product-spinner'
                    animation='border'
                    size='sm'
                  />
                ) : (
                  ''
                )}
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
