import React from "react";

import "./content.scss";

import ListCardImage from "../../../Components/ListCardImage/ListCardImage";

export default function Content() {
  const data = [
    {
    title: 'Lizard', content: 'abc abc abc', image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
  },
    {
    title: 'Lizard', content: 'abc abc abc', image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
  },
    {
    title: 'Lizard', content: 'abc abc abc', image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
  },
    {
    title: 'Lizard', content: 'abc abc abc', image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg'
  }, 
]

  return <div className="content">
    <ListCardImage data={data} title='Tuyến đường phổ biến' minWidth={233} />
    <ListCardImage data={data} title='Ưu đãi nổi bật' minWidth={298} />
    <ListCardImage data={data} title='Ưu đãi từ đối tác của VeXeRe' minWidth={312} />
    <ListCardImage data={data} title='Dịch vụ nổi bật' minWidth={298} />
    <ListCardImage data={data} title='Tin tức' minWidth={298} />
  </div>;
}
