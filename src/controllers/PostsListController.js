import React from 'react'
import PostsListView from '../views/PostsListView'
import { IMGURL } from '../constants'
// Markdown frontmatter parser
import matter from 'gray-matter';

// axios content for GitHubGraphQL API blog posts
import axios from 'axios';

// truncating blog content preview
import TruncateMarkup from 'react-truncate-markup';

// rerouting after button click with react router
import { withRouter } from 'react-router-dom'

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const GET_BLOG_HEADERS = `
  {
    repository(owner:"JeffreyYu2018", name:"personal-websitev3") {
      object(expression:"master:source/_posts") {
        ... on Tree {
          entries {
            name,
            object {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  }
  `;

export const makeDateIntoString = date => {
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    if (!date) {
      return null
    }
    return date.toLocaleDateString(undefined, dateOptions)
  };

const linkStyle = {
  color: "cornflowerblue",
  textDecoration: "underline",
  cursor: "pointer"
};

class PostsListController extends React.Component {
  state = {
    posts: [],
    errors: null
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: GET_BLOG_HEADERS })
      .then(result =>
        this.setState(() => ({
          posts: result.data.data.repository.object.entries,
          errors: result.data.errors
        })),
      );
  }

  handleClick(event, name) {
    event.preventDefault();
    this.props.history.push(`/blog/${name}`);
  }

  render() {
    let { posts, errors } = this.state;
    if (errors) {
      return (
        <p>
          <strong> Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      );
    } else if (!posts) {
      return (
        <p>
          <strong>Loading posts...</strong>
        </p>
      )
    }

    const readMoreEllipsis = name => {
      return (
        <span>
          ...{' '}
          <button onClick={(e) => this.handleClick(e, name)} style={linkStyle}>
            read more
          </button>
        </span>
      )
    };

    return (
      <div>
        {[...posts].reverse().map((post, index) => {
          let { data, content } = matter(post.object.text)
          let { title, category, date, featuredImage } = data
          return (
            <PostsListView key={index}>
              <post-title-link href={`/blog/${post.name}`}>
                <post-title>{title}</post-title>
              </post-title-link>
              <post-thumbnail-link href={`/blog/${post.name}`}>
                <post-thumbnail
                  src={`${IMGURL}${featuredImage}`}
                  alt="Blog post"
                  style={{objectFit:"cover"}}
                />
              </post-thumbnail-link>
              <post-date>{makeDateIntoString(date)}</post-date>
              <post-category>{category}</post-category>
              <post-summary>
                <TruncateMarkup lines={5} ellipsis={readMoreEllipsis(post.name)}>
                  <div>
                    {content}
                  </div>
                </TruncateMarkup>
              </post-summary>
            </PostsListView>
          )
        })}
      </div>
    )
  }
}

export default withRouter(PostsListController);
