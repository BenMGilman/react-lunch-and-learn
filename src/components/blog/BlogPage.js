import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import searchIcon from '../../styles/icons/search.svg';

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
    this._selectSortBy = this._selectSortBy.bind(this);
  }

  _selectCategory(selectedCategory) {
    this.setState({selectedCategory});
  }
  _selectSortBy(e, idx, sortBy) {
    this.setState({sortBy});
  }
  
  render() {
    return (
      <div className="blog-select">
        <div className="search-container">
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
          <div className="search">
            <div className="search-input">
              <img src={searchIcon}/>
              <TextField hintText="Search Insights" fullWidth/>
            </div>
            <SelectField
              hintText="Sort By"
              value={this.state.sortBy}
              onChange={this._selectSortBy}>
              {sortByOpts.map((sortBy, idx) => 
                <MenuItem key={idx} value={sortBy.value} primaryText={sortBy.title}/>
              )}
            </SelectField>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;