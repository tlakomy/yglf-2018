import React from "react";
import { Animated, asset, StyleSheet, Text, View } from "react-360";
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class bunny extends React.Component {
    rotation = new Animated.Value(0);

    componentDidMount() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {
            toValue: 360,
            duration: 10000
        }).start();
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={"#ffffff"} />
                <PointLight
                    intensity={0.4}
                    style={{ transform: [{ translate: [0, 4, -1] }] }}
                />
                <AnimatedEntity
                    style={{
                        transform: [
                            { translate: [0, 0, -300] },
                            { rotateY: this.rotation }
                        ]
                    }}
                    source={{ gltf2: asset("bunny.gltf") }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    greetingBox: {
        padding: 20,
        backgroundColor: "#000000",
        borderColor: "#639dda",
        borderWidth: 2
    },
    greeting: {
        fontSize: 30
    }
});
