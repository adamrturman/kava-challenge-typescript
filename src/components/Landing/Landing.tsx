import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Landing.module.css';
import logo from '../../images/Kava-logo.svg'

interface Props {
    displayData: () => void;
}

function Landing(props: Props) {
    const { displayData } = props;

    return (
        <div className="col-sm-10 col-md-6 mx-auto mt-5">
            <Card className={styles.info}>
                <Card.Body>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <Button className={styles.button} onClick={displayData}>Render Data</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Landing;
