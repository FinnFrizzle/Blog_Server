import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/index.js';
import { fetchPosts } from '../actions/index.js';

class postShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  render() {
    const { post } = this.props

    if (!post) {
      return <div> Loading... </div>

    }
    return (
      <div>
        <h3> {post.title} </h3>
        <h6> Categories: {post.categories} </h6>
        <p> {post.contents} </p>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ ownProps.match.params.id] }
}

export default connect( mapStateToProps, {fetchSinglePost} ) (postShow);
