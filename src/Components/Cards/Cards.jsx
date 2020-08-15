import React from 'react';
import { Card, Typography, CardContent, Grid } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import MouseParticles from 'react-mouse-particles';



const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading, please wait. . .';
    }
    return (
        <div className={styles.container}>
            
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                
                    <CardContent>
                    
                        <Typography color='textSecondary' gutterBottom>Infected:</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of Active Cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of Recovered from COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths )}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of Deaths caused by  COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
            <MouseParticles g={0} num={0} color="random" life={1} radius={3} cull="col,image-wrapper"/>
        </div>
    )
}
export default Cards