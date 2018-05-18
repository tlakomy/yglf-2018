// Import React
import styled from "styled-components";
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Image,
    Heading,
    ListItem,
    List,
    Layout,
    Fit,
    Fill,
    Quote,
    Slide,
    Magic,
    Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const CustomImage = styled(Image)`
    position: absolute;
    max-height: none !important;
    top: -200px;
`;

// Require CSS
require("normalize.css");

const theme = createTheme(
    {
        primary: "black",
        secondary: "#03A9FC",
        tertiary: "#009D99"
    },
    {
        primary: "Open Sans Condensed",
        secondary: "Helvetica"
    }
);

const images = {
    virtualboy: require("./assets/virtualboy.jpg"),
    gearvr: require("./assets/gearvr.jpg"),
    tv: require("./assets/tv.jpg"),
    uber: require("./assets/uber.jpg"),
    vr: require("./assets/vr.jpg"),
    amazon: require("./assets/amazon.gif"),
    facebook: require("./assets/facebook.gif"),
    github: require("./assets/github.gif"),
    reddit: require("./assets/reddit.gif"),
    youtube: require("./assets/youtube.gif"),
    twitter: require("./assets/twitter.gif"),
    frameworks: require("./assets/frameworks.png"),
    renderers: require("./assets/renderers.png"),
    ardefinition: require("./assets/ardefinition.png"),
    airforce: require("./assets/airforce.jpg"),
    marker: require("./assets/marker.jpg"),
    marker2: require("./assets/marker2.png"),
    less: require("./assets/less-logo.png"),
    hiro: require("./assets/hiro.png"),
    arjs: require("./assets/arjs.jpg"),
    elon: require("./assets/elon.gif"),
    reactar: require("./assets/reactar.png"),
    custom_marker: require("./assets/custom_marker.png"),
    mario: require("./assets/mario.gif"),
    yolo: require("./assets/yolo.gif"),
    hellovr: require("./assets/hellovr.png"),
    hololens: require("./assets/hololens.jpg"),
    expensive: require("./assets/expensive.png"),
    axis: require("./assets/axis.png"),
    hololens_video: require("./assets/hololens.mp4"),
    vr_beka: require("./assets/vr_beka.jpg"),
    past: require("./assets/past.jpg")
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={["fade"]}
                progress="pacman"
                transitionDuration={500}
                theme={theme}
            >
                <Slide bgColor="primary">
                    <Heading caps fit textColor="secondary">
                        Journey through VR and AR with React
                    </Heading>
                    <Text fontSize="50px" textColor="secondary" margin="50px 0 0 0">
                        Tomasz Łakomy
                    </Text>
                </Slide>
                <Slide bgImage={images.past.replace("/", "")}>
                    <Heading fit bgColor="black" textColor="secondary">
                        Let's go back to the past
                    </Heading>
                </Slide>
                <Slide>
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        What was the Web like 5 years ago?
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>IE8 😤</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>PWA? 🤔</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Flexbox? 🤨</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>jQuery 😍</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Some things haven't changed that much
                    </Heading>
                </Slide>
                <Slide>
                    <Appear>
                        <CustomImage src={images.amazon.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.github.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.facebook.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.twitter.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.reddit.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.youtube.replace("/", "")} />
                    </Appear>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        The Web can be so much more
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        It's fun to explore 🎉
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Now, we are living in the future 📅
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Future is weird
                    </Heading>
                </Slide>
                <Slide bgImage={images.elon.replace("/", "")} />
                <Slide bgImage={images.uber.replace("/", "")} />
                <Slide bgImage={images.tv.replace("/", "")} />
                <Slide bgImage={images.gearvr.replace("/", "")} />
                <Slide>
                    <Heading fit textColor="secondary">
                        Back to the Web
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        In 2018, we can do more
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        React
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.renderers.replace("/", "")}
                        height="580"
                        margin={0}
                    />
                    <Cite>
                        https://github.com/chentsulin/awesome-react-renderer
                    </Cite>
                </Slide>
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">React</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            React for AR and VR
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            Let's start with AR
                        </Heading>
                    </Slide>
                </Magic>
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">AR</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            Augmented Reality
                        </Heading>
                    </Slide>
                </Magic>
                <Slide>
                    <Image
                        fit
                        src={images.ardefinition.replace("/", "")}
                        height="600"
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        A layer on top of real world
                    </Heading>
                </Slide>
                <Slide bgImage={images.marker.replace("/", "")}>
                    <Heading fit textColor="secondary" bgColor="black">
                        Marker-based AR
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.hiro.replace("/", "")}
                        height="600"
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.arjs.replace("/", "")} />
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">ReactAR</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">React-Web-AR</Heading>
                    </Slide>
                </Magic>
                <Slide>
                    <Image
                        fit
                        src={images.reactar.replace("/", "")}
                        height="580"
                        margin={0}
                    />
                    <Cite>
                        Source: Nitin Tulswani
                        https://github.com/nitin42/React-Web-AR
                    </Cite>
                </Slide>
                <Slide>
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        A React wrapper for AR.js
                    </Heading>
                </Slide>
                <Slide>
                    <CodePane
                        lang="jsx"
                        theme="dark"
                        contentEditable="true"
                        textSize={16}
                        source={`import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
    render() {
        return (
          <AFrameRenderer>
            <Marker parameters={{ preset: "hiro" }}>
              <a-box color="blue">
                <a-animation
                  attribute="rotation"
                  to="360 0 0"
                  dur="2000"
                  easing="linear"
                  repeat="indefinite"
                />
              </a-box>
            </Marker>
          </AFrameRenderer>
        )
    }
}

export default App;
`}
                    />
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Experimental and work in progress 🚧
                    </Heading>
                </Slide>
                <Slide bgImage={images.yolo.replace("/", "")} />
                <Slide>
                    <Heading fit textColor="secondary">
                        Custom markers
                    </Heading>
                </Slide>
                <Slide bgImage={images.custom_marker.replace("/", "")} />
                <Slide>
                    <CodePane
                        lang="javascript"
                        textSize={30}
                        theme="dark"
                        contentEditable="true"
                        source={`<Marker parameters={{ 
            preset: 'custom',
            type: 'pattern',
            patternUrl: './reactfest.patt', 
            url: './reactfest.patt'
          }}>`}
                    />
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Let's go further
                    </Heading>
                </Slide>
                <Slide>
                    <Appear fid="1">
                        <Heading size={2} caps fit textColor="white">
                            Virtual Reality
                        </Heading>
                    </Appear>
                    <Image
                        fit
                        src={images.vr_beka.replace("/", "")}
                        height="500"
                        margin={0}
                    />
                </Slide>
                <Magic>
                    <Slide>
                        <Heading size={3} textColor="secondary">
                            Virtual Reality
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading size={3} textColor="secondary">
                            Virtual Reality on Web
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading size={3} textColor="secondary">
                            Virtual Reality with React
                        </Heading>
                    </Slide>
                </Magic>
                <Slide>
                    <Heading size={2} fit>
                        What is ReactVR?
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        A framework for building VR apps using React
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} fit>
                        Getting started 🤔
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            npm install -g react-vr-cli
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            react-vr init HelloVR
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            cd HelloVR
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            npm start
                        </Code>
                    </Layout>
                </Slide>
                <Slide bgImage={images.hellovr.replace("/", "")} />
                <Slide>
                    <CodePane
                        lang="javascript"
                        textSize={16}
                        source={`export default class HelloVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};`}
                    />
                </Slide>
                <Slide>
                    <Heading size={2} fit>
                        Positioning items in 3D space
                    </Heading>
                </Slide>
                <Slide bgImage={images.axis.replace("/", "")} />
                <Slide bgColor="black" textColor="secondary">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Transform properties
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>Scale</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Rotate</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Translate</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Matrix</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>... and also - Flexbox!</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Events
                    </Heading>
                </Slide>
                <Slide bgColor="black" textColor="secondary">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Supported Input Events
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>onEnter</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onExit</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onMove</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onInput</ListItem>
                        </Appear>
                        <Appear>
                            <List>
                                <ListItem>MouseInputEvent</ListItem>
                                <Appear>
                                    <ListItem>KeyboardInputEvent</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>TouchInputEvent</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>GamepadInputEvent</ListItem>
                                </Appear>
                            </List>
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Allright, that's cool but...
                    </Heading>
                </Slide>
                <Slide bgImage={images.vr.replace("/", "")} bgDarken={0.5}>
                    <Heading size={2} fit textColor="white">
                        Where's the VR?!
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        🎉 THE DEMO 🎉
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        What if I wanted to do both?
                    </Heading>
                </Slide>
                <Slide
                    bgImage={images.hololens.replace("/", "")}
                    bgDarken={0.5}
                >
                    <Heading size={2} fit textColor="white">
                        Hololens
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.expensive.replace("/", "")}
                        height="500"
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading size={2} caps fit textFont="primary">
                        👷‍♀️🚧 Warning: Prototype ahead! 🚧👷‍♂️
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} caps fit textFont="primary">
                        The Web offers us unlimited possibilities 🌐
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        caps
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        And it's waiting for us to explore them 😎
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Thank you!
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
