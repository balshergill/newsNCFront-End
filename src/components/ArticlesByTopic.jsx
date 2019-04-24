import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";

class ArticlesByTopic extends Component {
  render() {
    const { topic_slug, articles } = this.props;
    const topicArticlesRequested = articles.filter(function(article) {
      return article.topic == topic_slug;
    });
    const mappedArticles = topicArticlesRequested.map(function(topic) {
      return (
        <div>
          <Link
            to={`../../../../api/articles/${articles[0].article_id}
          `}
          >
            <p className="ArticleTitle">{topic.title}</p>
          </Link>
        </div>
      );
    });
    console.log(topicArticlesRequested[0]);
    console.log(mappedArticles);
    return (
      <div>
        All Articles About {topic_slug}
        <p>{mappedArticles ? mappedArticles : null}</p>
      </div>
    );
  }
}

export default ArticlesByTopic;
