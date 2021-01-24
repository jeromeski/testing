import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  const loadCommentItems = props => {
    const comments = props.comments;
    return (
      <div>
        {comments.map((comment, idx) => {
          console.log(idx);
          return <li key={idx}>{comment}</li>;
        })}
      </div>
    );
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <ul>{loadCommentItems(props)}</ul>
    </Fragment>
  );
};

const mapStateToprops = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToprops, null)(CommentList);
