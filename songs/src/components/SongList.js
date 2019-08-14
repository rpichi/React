import React, { Component } from 'react';
import { connect } from 'react-redux'
import  selectSong  from '../actions';

class SongList extends Component {
    renderList  = () => {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.tittle}>
                    <div className="right floated content">
                        <button 
                         className="ui button primary"
                         onClick={() => this.props.selectSong(song)}
                         >
                             Select
                        </button>
                    </div>
                    <div className="content">{song.tittle}</div>
                </div>
            );
        });
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//Función que establece el enlace entre el state del store y lo conecta con las props del componente
const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };

}
// y con esta opción se establece la relación hacia este componente.
// primer parámetro el objeto que relaciona state con las props
// segundo argumento las acciones que se ejecutan para la asociación
export default connect(mapStateToProps, { selectSong })(SongList);