import * as React from 'react';
import { Menu, NewsMenu } from './NewsMenu'
import { News, NewsList} from './NewsList'

interface Data {
  menu: Menu;
  news: News;
}

export class NewsCard extends React.Component<Data, undefined> {
  public render() {
    return (
      <section>
        <div className="header">
          <div className="circle"></div>
          <NewsMenu {...this.props.menu} />
        </div>
        <div className="line"></div>

          <NewsList {...this.props.news} />

      </section>
    );
  }
}

