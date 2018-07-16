import React, { Component } from 'react';
import {connect} from 'react-redux'


class TagPage extends Component {

  getInfoPage = (obj, id) => {
    let infoPage;

    obj.map(item => {
      if (item.id.split('/')[0] === id) {
        infoPage = item;
      }
    })

    return infoPage;
  }

	render() {
		const {tags, match} = this.props;
    const infoPage = this.getInfoPage(tags, match.params.id);
    const labelPage = infoPage.label && <h1>{infoPage.label}</h1>;
    const volumePage = infoPage.volume && <li>Total mentions: {infoPage.volume}</li>;
    const positiveMentions = infoPage.sentiment.positive && <li>Positive mentions: {infoPage.sentiment.positive}</li>;
    const neutralMentions = infoPage.sentiment.neutral && <li>Neutral mentions: {infoPage.sentiment.neutral}</li>;
    const negativeMentions = infoPage.sentiment.negative && <li>Negative mentions: {infoPage.sentiment.negative}</li>; 
		return (
			<div className='info'>
        {labelPage}
        <ul>
          {volumePage}
          {positiveMentions}
          {neutralMentions}
          {negativeMentions}          
          {infoPage.pageType && Object.keys(infoPage.pageType).map(key => {
            return <li key={key}>{key}: {infoPage.pageType[key]}</li>
          })}
        </ul>
			</div>
		);
	}
}

export default connect((state) => ({
    tags: state.tags
})) (TagPage)
