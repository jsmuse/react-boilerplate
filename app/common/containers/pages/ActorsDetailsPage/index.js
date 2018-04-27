import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { provideHooks } from 'redial';
import { translate } from 'react-i18next';
import { fetchActor, deleteActor } from '@/redux/data/actors';
import { getActor } from '@/reducers';

import Poster from '@/components/Poster';
import Button from '@/components/Button';

import withStyles from 'withStyles';
import styles from './styles.scss';

const ActorsDetailsPage = ({ onDelete, actor = {}, t }) => (
  <div className={styles.root}>
    <div className={styles.poster}>
      <Poster src={actor.photo} title={actor.name} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>{actor.name}</div>
      <div className={styles.info}>
        <p>{actor.born}</p>
        <p>{actor.description}</p>

        <p>
          <Link to="/actors">{t('Back to the list of actors')}</Link>
        </p>
        {console.log(actor.films)}

        <Button edit to={`/actors/${actor.id}/edit`}>
          {t('Edit')}
        </Button>

        <Button remove onClick={onDelete}>
          {t('Remove')}
        </Button>
      </div>
    </div>
  </div>
);

export default compose(
  withStyles(styles),
  translate(),
  withRouter,
  provideHooks({
    fetch: ({ dispatch, params, setProps }) =>
      dispatch(fetchActor(params.id)).then((response) => {
        setProps({
          actorId: response.payload.result,
        });
      }),
  }),
  connect(
    (state, ownProps) => ({
      actor: getActor(state, ownProps.actorId),
    }),
    { deleteActor }
  ),
  withHandlers({
    onDelete: ({ deleteActor, actorId, router }) => async () => {
      await deleteActor(actorId);
      router.push('/actors');
    },
  })
)(ActorsDetailsPage);
