import React from 'react'
import BlogView from '../views/BlogView'
import ReactMarkdown from 'react-markdown'
import { IMGURL } from '../constants'

// axios content for GitHubGraphQL API blog posts
import axios from 'axios';
// Markdown frontmatter parser
import matter from 'gray-matter'
import { makeDateIntoString } from './PostsListController'

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
    image: null,
    content: null,
    errors: null,
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.onFetchFromGitHub(params.post_id);
  }

  onFetchFromGitHub = post_id => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOG(post_id) })
      .then(result => {
        let markdown = matter(result.data.data.repository.object.text)
        let { title, date, image } = markdown.data
        this.setState(() => ({
          title,
          date,
          image,
          content: markdown.content,
          errors: result.data.errors,
        }))
      })
  }

  render() {
    const { title, date, image, content, errors } = this.state;
    if (errors) {
      return (
        <p>
          <strong> Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    } else if (!title) {
      return (
        <BlogView />
      )
    }
    return (
      <BlogView>
        <brand-nav-link href="/" />
        <home-nav-link href="/" />
        <about-nav-link href="/about" />
        <contact-nav-link href="/contact" />
        <post-image
            src={`${IMGURL}${image}`}
            alt="Blog post"
            style={{objectFit:"cover"}} />
        />
        <blog-title>{title}</blog-title>
        <post-info>{makeDateIntoString(date)}</post-info>
        <post-body><ReactMarkdown source={content} /> </post-body>
        <back-to-home-nav-link href="/" />
      </BlogView>
    )
  }
}
