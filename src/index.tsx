
import * as React from 'react';
import { render } from 'react-dom';
import { NewsCard } from './components/NewsCard'
import "./scss/main.scss"


var sampledata = {

  menu: {
   menuList: [
      {
        Name: "ఆంధ్ర",
        Link: "#"
      },
      {
        Name: "తెలంగాణ",
        Link: "#"
      },
      {
        Name: "ఇతరులు ",
        Link: "#"
      }
    ]
  },
  news: {
    newsList: [
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      },
      {
        Title: "సినీ దర్శకులపై జ్యోతిక సంచలన వ్యాఖ్యలు",
        Link: "#",
        Views: 25,
        published: "25 min ago"
      }
    ]
  }
}

render(<NewsCard  {...sampledata} /> ,document.getElementById('app'));