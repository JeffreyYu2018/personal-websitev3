import React from 'react'
import BlogView from '../views/BlogView'
import ReactMarkdown from 'react-markdown'
import { IMGURL } from '../constants'

// axios content for GitHubGraphQL API blog posts
import axios from 'axios';
// Markdown frontmatter parser
import matter from 'gray-matter'
import { makeDateIntoString } from './PostsListController'
import { Helmet } from 'react-helmet' // for document title

import commentBox from 'commentbox.io'; // third party software that handles comments

// Note: the reason why the Sidebar components are pasted are because
// I custom designed it, so for some reason, it's different from the other controllers

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const GET_BLOG = post_id => {
  return `
    {
      repository(owner:"JeffreyYu2018", name:"personal-websitev3") {
        object(expression:"master:source/_posts/${post_id}") {
          ... on Blob {
            text
          }
        }
      }
    }
    `;
}

export default class BlogController extends React.Component {
  state = {
    title: null,
    date: null,
    category: null,
    image: null,
    content: null,
    errors: null,
  };

  componentDidMount() {
    this.removeCommentBox = commentBox('5658932726988800-proj');
    const { match: { params } } = this.props;
    this.onFetchFromGitHub(params.post_id);
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  onFetchFromGitHub = post_id => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOG(post_id) })
      .then(result => {
        let markdown = matter(result.data.data.repository.object.text)
        let { title, category, date, featuredImage } = markdown.data
        this.setState(() => ({
          title,
          category,
          date,
          featuredImage,
          content: markdown.content,
          errors: result.data.errors,
        }))
      })
  }

  render() {
    const { title, category, date, featuredImage, content, errors } = this.state;
    if (errors) {
      return (
        <p>
          <strong> Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    } else if (!title) {
      return (
        <div style={{textAlign:"center"}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="Loading"
            style={{display:"inline-block"}}
          />
        </div>
      )
    }
    return (
      <div>
        <Helmet>
          <title>Blog | Jeffrey Yu</title>
        </Helmet>
        <BlogView>
          <sidebar-profile-pic
            src="/images/LinkedIn-Photo-Square.jpg"
            srcSet={`/images/LinkedIn-Photo-Square-p-500.jpeg 500w,
                    /images/LinkedIn-Photo-Square-p-800.jpeg 800w,
                    /images/LinkedIn-Photo-Square-p-1080.jpeg 1080w,
                    /images/LinkedIn-Photo-Square-p-1600.jpeg 1600w,
                    /images/LinkedIn-Photo-Square-p-2000.jpeg 2000w,
                    /images/LinkedIn-Photo-Square-p-2600.jpeg 2600w,
                    /images/LinkedIn-Photo-Square-p-3200.jpeg 3200w,
                    /images/LinkedIn-Photo-Square.jpg 3456w`}
          />
          <sidebar-facebook src="/images/social-03.svg" />
          <sidebar-instagram src="/images/social-07.svg" />
          <sidebar-github src="/images/social-33.svg" />
          <sidebar-linkedin src="/images/social-09.svg" />
          <post-image
              src={`${IMGURL}${featuredImage}`}
              alt="Blog post"
              style={{objectFit:"cover"}} />
          />
          <post-title>{title}</post-title>
          <post-date>{makeDateIntoString(date)}</post-date>
          <post-category>{category}</post-category>
          <post-body><ReactMarkdown source={content} /> </post-body>
          <back-to-home-nav-link href="/" />
        </BlogView>
        <div className="commentbox" />
      </div>
    )
  }
}
