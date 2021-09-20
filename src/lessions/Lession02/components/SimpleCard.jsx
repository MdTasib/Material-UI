import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, Avatar, IconButton, CardMedia } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

export default function SimpleCard(props) {
	const { avatarUrl, title, subtitle, description, imageUrl } = props;

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={avatarUrl} />}
				action={
					<IconButton aria-label='settings'>
						<ShareIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>
			<CardMedia
				style={{ height: '100' }}
				component='img'
				image={imageUrl}
				alt='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2'>{description}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>BUY NOW</Button>
				<Button size='small'>OFFER</Button>
			</CardActions>
		</Card>
	);
}
