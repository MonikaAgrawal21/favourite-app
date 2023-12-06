// Favorites.js

import React from "react";
import { connect } from "react-redux";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { favorites } = this.props;

    return (
      <div>
        <h2>Favorites Screen</h2>
        <p>Favorites List:</p>
        <ul>
          {favorites?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.items,
});

export default connect(mapStateToProps)(Favorites);
