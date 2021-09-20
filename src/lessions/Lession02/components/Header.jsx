import { AppBar, Typography, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	typographyStyles: {
		flex: 1,
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography className={classes.typographyStyles}>
					Tasib Exclusive
				</Typography>
				<AccountCircleIcon />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
