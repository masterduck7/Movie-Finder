import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class Movie extends Component {
    render() {
        return(
            <div>
                <List style={{ marginLeft:"5%", marginRight:"5%" }} delay="10">
                    <List.Item
                        key={this.props.data.Title}
                        extra={
                        <a href={`/${this.props.data.imdbID}`}><img
                            width={100}
                            alt="Poster"
                            src={this.props.data.Poster}
                        /></a>
                        }
                    >
                    <List.Item.Meta
                        avatar={<a href={`/${this.props.data.imdbID}`}><Avatar src={this.props.data.Poster} /></a>}
                        title={<a href={`/${this.props.data.imdbID}`}>{this.props.data.Title}</a>}
                        description={this.props.data.Year}
                    />
                    </List.Item>
                </List>
            </div>
        )
    }
};

export default Movie;