import React from 'react'
import { Text, View } from 'react-native'
// import DefaultPage from '../../components/DefaultPage'
// import RockPaperScissorsLizardSpock from '../../../games/RSP/RPS'

import TamagotchiGame from '../../../games/MyPet/index'


const GameHomeView = () => (
    <View>
        <Text>
            Game Home
        </Text>

        <TamagotchiGame />
        {/* <RockPaperScissorsLizardSpock /> */}
       
    </View>
)

export default GameHomeView