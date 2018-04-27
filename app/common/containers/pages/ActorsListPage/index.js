import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { provideHooks } from 'redial';
import { fetchActors } from '@/redux/data/actors';
import { getActors } from '@/reducers';
import { translate } from 'react-i18next';

import ActorCard from '@/containers/blocks/ActorCard';
import withStyles from 'withStyles';
import styles from './styles.scss';

const ActorsListPage = ({ actors, onActorCardClick }) => (
  <div className={styles.root}>
    <div className={styles.list}>
      {actors.map(actor => (
        <div className={styles.item} key={actor.id}>
          <ActorCard actor={actor} onClick={() => onActorCardClick(actor)} />
        </div>
      ))}
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, setProps }) =>
      dispatch(fetchActors()).then((response) => {
        setProps({ actorsIds: response.payload.result });
      }),
  }),
  connect((state, ownProps) => ({
    actors: getActors(state, ownProps.actorsIds || []),
  })),
  withHandlers({
    onActorCardClick: ({ router }) => (actor) => {
      router.push(`/actors/${actor.id}`);
    },
  })
)(ActorsListPage);
