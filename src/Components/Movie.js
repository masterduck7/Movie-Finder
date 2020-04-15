import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class Movie extends Component {
    render() {
        return(
            <div>
                <List style={{ marginLeft:"5%", marginRight:"5%" }}>
                    <List.Item
                        key={this.props.data.Title}
                        extra={
                        <img
                            width={100}
                            alt="Poster"
                            src={this.props.data.Poster}
                        />
                        }
                    >
                    <List.Item.Meta
                        avatar={<Avatar src={this.props.data.Poster} />}
                        title={this.props.data.Title}
                        description={this.props.data.Year}
                    />
                    </List.Item>
                </List>
            </div>
        )
    }
};

export default Movie;