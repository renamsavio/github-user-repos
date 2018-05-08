import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RepoList from '../../components/RepositoryList/RepositoryList';
import { listRepositories } from '../../actions';

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepositories
};

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)

export default RepositoryListContainer;