import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs } from '../queries';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    const { loading } = this.props.data;

    if (loading) return <div>Loading...</div>;
    return this.props.data.songs.map(({ id, title }) =>
      <li className='collection-item' key={id}>
        {title}
        <i className='material-icons' onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>);
  }


  render() {
    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}`

export default graphql(mutation)(
  graphql(fetchSongs)(SongList)
);
