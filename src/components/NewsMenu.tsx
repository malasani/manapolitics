import * as React from 'react';

interface MenuItem {
  Name: string;
  Link: string;
}
export interface Menu {
  menuList: Array<MenuItem>
}


export class NewsMenu extends React.Component<Menu, undefined> {
  public render() {

    const menuNode = this.props.menuList.map((m) => {
      return (<li className="ui-tabs-active"><a href={m.Link}>
        <span>{m.Name}</span></a></li>)
    })

    return (
      <ul>
        {menuNode}
      </ul>
    );
  }
}

