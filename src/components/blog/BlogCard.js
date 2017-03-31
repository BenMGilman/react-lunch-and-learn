import React, { PropTypes } from 'react';
import {Card, CardMedia, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const BlogCard = ({blog}) => {
    return (
        <Card>
            <CardMedia>
                <img src={blog.thumb}/>
            </CardMedia>
            <CardTitle className="title" title={blog.title} subtitle={blog.dateFormat.toUpperCase()}/>
            <CardText className="content">{blog.excerpt}</CardText>
            <CardActions>
                <FlatButton label="Read More" fullWidth={true} />
            </CardActions>
        </Card>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        thumb: PropTypes.string.isRequired
    }).isRequired
};

export default BlogCard;