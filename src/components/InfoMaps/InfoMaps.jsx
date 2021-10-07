import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import Maps from "./Maps/Maps";

const InfoMaps = () => {
	const classes = useStyles();
	return (
		<div className={classes.info}>
			<Container maxWidth="lg">
				<div className={classes.infoRow}>
					<div className={classes.infoColumn}>
						<div className={classes.textWrapper}>
							<Typography variant="h4" className={classes.text}>
							STORE
							</Typography>
							<div>
								<Typography variant="h6" className={classes.subTitle}>
								Address: 2st Nour Eleman, Elmahala-Elkoubra, Gharbia, Egypt
								</Typography>
								<Typography variant="h6" className={classes.subTitle}>
								Phone number: <a href="tel:+201019955700">+20 101 995 5700</a>   <a href="tel:+201226598444">+20 122 659 8444</a>
								</Typography>
								
								<Typography variant="h6" className={classes.subTitle}>
								 Email: <a href="mailto:troycoffe@gmail.com">troycoffe14@gmail.com</a>
								</Typography>
							</div>
							<a
								href="https://www.google.com/maps/place/TROY+Coffee/@30.9704238,31.0511482,11z/data=!4m9!1m2!2m1!1stroy+cafe!3m5!1s0x0:0x653162decf0e44d7!8m2!3d30.9740092!4d31.1817591!15sCgl0cm95IGNhZmWSAQhhcnRfY2FmZQ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="contained" className={classes.button}>
									<SiGooglemaps /> Get Directions
								</Button>
							</a>
						</div>
					</div>
					<div className={classes.infoColumn}>
						<div className={classes.imgWrapper}>
							<Maps />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default InfoMaps;