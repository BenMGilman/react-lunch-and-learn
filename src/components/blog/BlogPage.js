import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const categories = [
  {value: 'credera-site', title: 'All'},
  {value: 'management-consulting', title: 'Management Consulting'},
  {value: 'technology-solutions', title: 'Technology Solutions'},
  {value: 'ux', title: 'User Experience'},
  {value: 'news', title: 'News & Events'}
];
const sortByOpts = [
  {value: 'author', title: 'Author'},
  {value: 'date', title: 'Date'},
  {value: 'title', title: 'Title'}
];

class BlogPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedCategory: categories[0]
    };
    this._selectCategory = this._selectCategory.bind(this);
  }

  _selectCategory(cat) {
    this.setState({
      selectedCategory: cat
    });
  }
  
  render() {
    return (
      <div className="blog-select">
        <div className="search">
          <div className="categories">
            {categories.map((cat, idx) => {
              const isSelected = cat === this.state.selectedCategory;
              return (
                <div key={idx} onClick={() => this._selectCategory(cat)}>
                  {isSelected && <RaisedButton label={cat.title} primary/>}
                  {!isSelected && <FlatButton label={cat.title}/>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;