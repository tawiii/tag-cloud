import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../style.css';
import {loadTags} from '../AC';


class HomePage extends Component {

  componentDidMount() {
    const {loadTags} = this.props;
    loadTags();
  }

  getFontSize = (num) => {
    let percent = num * 26 / 100;

    percent < 10 ? percent = 10 : percent;
    percent > 40 ? percent = 40 : percent;
    
    return percent
  }

  getRandomColor = () => {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }

  render() {    
    const {tags, match} = this.props;
    return (
      <div className='cloud'>
        {
          tags.map(item => {
            return (
              <Link to={`${match.url}/${item.id}`} key={item.id}
                style={{
                  fontSize: this.getFontSize(item.sentimentScore),
                  color: this.getRandomColor()
                }}>
                {item.label}
              </Link>
            )            
          })
        }
      </div>
    );
  }
}

export default connect((state) => ({
    tags: state.tags
}), { loadTags })(HomePage)
