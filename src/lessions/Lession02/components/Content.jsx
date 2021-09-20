import SimpleCard from './SimpleCard';
import { Grid } from '@mui/material';
import coffeeMakerList from '../DUMMAY_DATA.js';

const Content = () => {
	const getCoffeeMakerCard = coffee => {
		return (
			<Grid item xs={12} sm={4}>
				<SimpleCard {...coffee} />{' '}
			</Grid>
		);
	};

	return (
		<Grid container spacing={2}>
			{coffeeMakerList.map(coffee => getCoffeeMakerCard(coffee))}
		</Grid>
	);
};

export default Content;
