import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class MovieList extends Component {
    render() {
        return(
            <div>
                <List
                    style={{ marginLeft:"5%", marginRight:"5%" }}
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={<a href={`/Movie-Finder/#/${item.imdbID}`}><img width={100} alt="Poster" src={item.Poster}/></a>}
                        >
                        <List.Item.Meta
                            avatar={<a href={`/Movie-Finder/#/${item.imdbID}`}><Avatar src={item.Poster} /></a>}
                            title={<a href={`/Movie-Finder/#/${item.imdbID}`}>{item.Title}</a>}
                            description={item.Year}
                        />
                    </List.Item>
                    )}
                />
            </div>
        )
    }
};

export default MovieList;