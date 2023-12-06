import React from "react";
import { connect } from "react-redux";
import { addToFavorites } from "../redux/favoritesSlice";

const mapStateToProps = (state) => {
  return {
    favorites: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorite: (obj) => dispatch(addToFavorites(obj)),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }

  sampleData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Doe', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Smith', age: 28, city: 'Chicago' },
    { id: 4, name: 'Alice Johnson', age: 22, city: 'Miami' },
    { id: 5, name: 'Charlie Brown', age: 35, city: 'San Francisco' },
    { id: 6, name: 'Eva Davis', age: 29, city: 'Seattle' },
    { id: 7, name: 'Frank White', age: 33, city: 'Denver' },
    { id: 8, name: 'Grace Miller', age: 26, city: 'Boston' },
    { id: 9, name: 'Henry Wilson', age: 31, city: 'Austin' },
    { id: 10, name: 'Ivy Martinez', age: 27, city: 'Phoenix' },
    { id: 11, name: 'Jack Thompson', age: 24, city: 'Portland' },
    { id: 12, name: 'Katie Harris', age: 28, city: 'Nashville' },
    { id: 13, name: 'Leo Rodriguez', age: 32, city: 'San Diego' },
    { id: 14, name: 'Mia Taylor', age: 23, city: 'Houston' },
    { id: 15, name: 'Nathan Clark', age: 34, city: 'Detroit' },
    { id: 16, name: 'Olivia Adams', age: 30, city: 'Minneapolis' },
    { id: 17, name: 'Paula Turner', age: 25, city: 'Philadelphia' },
    { id: 18, name: 'Quincy Green', age: 29, city: 'Atlanta' },
    { id: 19, name: 'Rachel Lee', age: 27, city: 'Charlotte' },
    { id: 20, name: 'Samuel Cooper', age: 26, city: 'Dallas' },
  ];
  

  handleAddToFavorites = (item) => {
    this.props.addToFavorite(item);
  };

  render() {
    const gridContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
    };

    const gridItemStyle = {
      border: '1px solid #ddd',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center',
    };

    return (
      <div>
        <h2>Home Screen</h2>
        <div style={gridContainerStyle}>
          {this.sampleData.map((item) => (
            <div key={item.id} style={gridItemStyle}>
              <p>{item.name}</p>
              <p>Age: {item.age}</p>
              <p>City: {item.city}</p>
              <button onClick={() => this.handleAddToFavorites(item)}>
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
