import * as React from 'react';

interface NewsItem {
  Title: string;
  Link: string;
  Views: number;
  published: string;
}
export interface News {
  newsList: Array<NewsItem>
}


export class NewsList extends React.Component<News, undefined> {
  public render() {

    const menuNode = this.props.newsList.map((m) => {
      return (
        <div className="object">
          <div className="time triangle left">
            <span className="datetime">{m.published}</span>
            <span className="views">&nbsp;{m.Views}</span>
          </div>
          <div className="context">
            <a href={m.Link}>
              {m.Title}
            </a>
          </div>
        </div>
      )
    })

    return (
      <div id="content">
        {menuNode}
      </div>
    );
  }
}

