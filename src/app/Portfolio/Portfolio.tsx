import * as React from 'react';
import {
  PageSection,
  Title,
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  CardFooter,
  Button
} from '@patternfly/react-core';
import '@app/Portfolio/Portfolio.css'

export interface ISupportProps {
  sampleProp?: string;
}
let projects = require("../projects.json");

const projectList = projects.map((p) => {
  return (
    <GridItem  xl={2} lg={2} md={3} sm={4} key={p.title}>
      <Card isCompact className='card-frame'>
        <CardHeader className='card-header'>
          <a href={p.applink} target="blank" className="card-header-a">{p.title}</a>
        </CardHeader>
        <CardBody className='card-body'>
          <a href={p.applink} target="blank" className="card-body-a"><img className="imgwidth4 bord" src={require(`../bgimages${p.image}`).default} alt={p.title}></img></a>
          {p.title === "Bamazon" ? (
              <>
                  <a href="https://drive.google.com/open?id=1zzmj2OI7pAYA3QPWpkXC7wjjeJJ9tiJi" target="blank" className="card-body-a">Video1,</a>
                  <a href="https://drive.google.com/open?id=1XzgWptH0HEZ8tvZu_i0xRSk3Y377jheX" target="blank" className="card-body-a">Video2,</a><br/>
                  <a href="https://drive.google.com/open?id=1GFEC2rTiEaf_kGYNk2_W-tzFT5HP8z19" target="blank" className="card-body-a">Video3,</a>
                  <a href="https://drive.google.com/open?id=1kljUKlesegiFnhJu4gSLJh04_nMkdTJK" target="blank" className="card-body-a">Video4</a>
              </>
          ) : (
              null
          )}
          {p.title === "Constructor Word Guess" ? (
              <>
                  <a href="https://drive.google.com/open?id=1LzQMD9sZuWZM2pyDMPTID7hLDstYMJDZ" target="blank" className="card-body-a">Video</a>
              </>
          ) : (
              null
          )}
          {p.title === "Liri Node.js" ? (
              <>
              <a href="https://drive.google.com/open?id=11q3r_v-y4sV5RPgg_-O7Hr5XWwjFpi9q" target="blank" className="card-body-a">Video1,</a>
              <a href="https://drive.google.com/open?id=1rHIaMe89TpXym55S9p5Chl4RLViwnrCJ" target="blank" className="card-body-a">Video2,</a><br/>
              <a href="https://drive.google.com/open?id=1V3-Hd6P2ec07JZsdFOdGMIuJ4gO0PW-a" target="blank" className="card-body-a">Video3,</a>
              <a href="https://drive.google.com/open?id=1PZvdZQTEhQX7W5jzJA9cy5m91mzADgjz" target="blank" className="card-body-a">Video4</a>
              </>
          ) : (
              null
          )}
        </CardBody>
        <CardFooter className='card-footer'>
          <Button className="card-button" isSmall>
            Overview
          </Button>{' '}
          <a href={p.githublink} target="blank" className='card-footer-a'>Github</a>
        </CardFooter>
      </Card>
  </GridItem>);
}) ;

// eslint-disable-next-line prefer-const
let Portfolio: React.FunctionComponent<ISupportProps> = () => {
  return (
    <PageSection className='wall-paper'>
      <Title className='heading' headingLevel="h1">
        Projects:
      </Title>
      <Grid>
        {projectList}
      </Grid>
    </PageSection>
  );
};

export { Portfolio };
