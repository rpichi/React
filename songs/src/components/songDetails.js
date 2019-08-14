import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}/* props */) => {
    if (!song) 
    {
        return <div>Select a song</div>
    }
    return (<div>
        <h3>Details for:</h3>
                <p>
                Tittle: {song.tittle}
                <br/>
                Duration: {song.duration}
                </p>
            </div>)
}

const mapStateProps = (state) => {
    return   { song : state.selectedSong }
}

export default connect(mapStateProps, {})( SongDetail);