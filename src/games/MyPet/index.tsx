import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

interface PetProps {
    name: string;
}

interface PetState {
    health: number;
    happiness: number;
}

class Pet {
    private name: string;
    private health: number;
    private happiness: number;
    // private feed: number;
    private sleep: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.happiness = 100;
        // this.feed = 100;
        this.sleep = 8;
    }

    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    getHappiness() {
        return this.happiness;
    }
    feed() {
        this.health = Math.min(this.health + 10, 100);
    }
    play() {
        this.happiness = Math.min(this.happiness + 10, 100);
    }
    update() {
        this.health = Math.max(this.health - 1, 0);
        this.happiness = Math.max(this.happiness - 1, 0);
    }
}


const TamagotchiGame: React.FC = () => {
    const [pet, setPet] = useState(new Pet("Cup"));
    const [refresh, setRefresh] = useState(0);
    

    useEffect(() => {
        const timer = setInterval(() => {
            pet.update();
            // setPet(pet);
            setRefresh(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
 

    const feed = () => {
        pet.feed();
        setRefresh(prev => prev + 1);
    };

    const play = () => {
        pet.play();
        setRefresh(prev => prev + 1);
    };

    const getPetImage = () => {
        if (pet.getHealth() > 70 && pet.getHappiness() > 70) {
            return require('../../assets/images/Cup_green.png'); // replace with your actual image path
        // } else if (pet.getHealth() < 30 || pet.getHappiness() < 30) {
        //     return require('../../assets/images/Cup_blue.svg'); // replace with your actual image path
        } else {
            return require('../../assets/images/Cup_grey.png'); // replace with your actual image path
        }
    };

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={getPetImage()} />
            <Text>{pet.getName()}'s Health: {pet.getHealth()}</Text>
            <Text>{pet.getName()}'s Happiness: {pet.getHappiness()}</Text>
            <Button title="Feed" onPress={feed} />
            <Button title="Play" onPress={play} />
        </View>
    //     

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    }
});


export default TamagotchiGame;
