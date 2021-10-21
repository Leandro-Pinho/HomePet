/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar style={styles.container}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: 200,
    
  }
})
   