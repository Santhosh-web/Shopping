import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  media: {
    width: '50%',
    height: 0,
    margin: 'auto',
    paddingTop: '56.25%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}))
