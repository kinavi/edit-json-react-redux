import React,{Component} from 'react';
import CardList from './CardList'
import userApi from '../Data/userApi.json'
import PropTypes from 'prop-types'
import InputField from './InputField'
import OutputField from './outputField'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: userApi,
            isHide:false,
            freeId:0,
            lastId:0
        }
        this.removeCard=this.removeCard.bind(this)
        this.setCards=this.setCards.bind(this)
        this.addCard=this.addCard.bind(this)
        this.changeCard=this.changeCard.bind(this)
        this.getFreeId = this.getFreeId.bind(this)
        this.setLastId = this.setLastId.bind(this)
        this.setFreeId = this.setFreeId.bind(this)
    }

    static propTypes = {
        cards:PropTypes.array,
        isHide:PropTypes.bool,
        freeId:PropTypes.number,
        lastId:PropTypes.number
    }

    setCards(card){
        //console.dir(card)
        const {addCard} = this
        const {cards} = this.state
        if(Array.isArray(card)) //тут косяк. Надо доплнять массив, а не подменять) 
            this.setState({cards:card})
        else
        {

            if(!IsConcatId(card,cards))
                addCard(card, cards)
        }
        this.setFreeId();
    }

    setLastId(){
        const {cards} = this.state
        let lastId = cards.slice(-1)[0].id
        console.log(`${lastId} - Новый последний ID`)
        console.log(`${this.state.lastId} - последний ID`)
        console.log(`${{lastId}} - это мы отправляем`)
        this.setState({lastId})
        console.dir(this.state.lastId)
    }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('До обновления')
    //     if(this.state.lastId!==nextState.lastId)
    //         this.setLastId();
    // }

    // componentDidUpdate(){
    //     console.log('После обновления')
    //     this.setFreeId();
    // }

    setFreeId(){
        this.setLastId();

        const {lastId, cards} = this.state
        //console.dir(`${this.state} - setState`)
        //console.dir(`${cards} - cards`)
        console.log('setFreeId')
        console.log(lastId)
        let freeId = GeneratorId(lastId, cards)
        console.log(freeId)
        //console.dir(`${freeId} - freeId`)
        this.setState({freeId})
    }

    getFreeId(){
        const {freeId} = this.state
        return freeId
    }
    // outputCard(){
    //     const {cards} = this.state
    // }
    //JSON.stringify

    // componentDidMount(){
    //     console.log(this.refs._ref.value);
    // }


    // shouldComponentUpdate(nextState){
    //     const { cards } = this.nextState
    //     return cards !== nextState.cards
    // }

    // componentWillReceiveProps(nextProps){

    // }

    //setLastId

    // GeneratorId(lastId) {
    //     const {cards} = this.state

    //     if(IsConcatId(++lastId, cards))
    //         GeneratorId(lastId)
    //     else return lastId;
    // }

    addCard(value, arr)
    {
        this.setState({cards:[...arr,value]})
        this.setFreeId();
    }

    changeCard(value)
    {
        //console.log(2)
        //console.dir(value)
        const {cards} = this.state

        for (let card of cards)
        {
            //console.log(value)
            if(card.id===value.id)
            {
                //console.dir(card)
                for (let key in card){
                    card[key]=value[key]
                    //console.log(`card: ${card[key]} = value: ${value[key]}`)
                }
                this.setState({cards})
            }
        }
        this.setFreeId();
    }

    removeCard(id)
    {
        const cards = this.state.cards.filter(
            card=>card.id !== id
        )
        this.setState({cards})
        this.setFreeId();
    }

    render() {
        const {removeCard, setCards, changeCard,getFreeId}=this
        const { cards } = this.state
        return(
            <div>
                <InputField isHide={false} onSetCards={setCards}/>
                <CardList fuAddCard = {setCards} list={cards} onRemove={removeCard} isHide={cards.length>0?false:true} Save = {changeCard} freeId = {getFreeId} />
                
                <OutputField isHide={cards.length>0?false:true} value={cards}/>
            </div>
            
        )
    }
}

function GeneratorId(lastId, cards) {
    //console.dir(cards)
    if(IsConcatId(++lastId, cards))
        GeneratorId(+lastId)
    else return +lastId;
}

function IsConcatId(obj,cards)
{   
    // if(typeof obj === 'object')
    // {
    //     for (let elem of arr)
    //     {
    //         if(obj.id==elem.id)
    //             return true
    //     }
    //     return false
    // }
    // else{
    //     for (let elem of arr)
    //     {
    //         if(id==elem.id)
    //             return true
    //     }
    //     return false
    // }

    //console.dir(cards)
    for (let elem of cards)
    {

        if(typeof obj === 'object')
        {
            if(obj.id===elem.id)
                return true
        }  
        else
        {
            if(obj===elem.id)
                return true
        }
    }
    return false
}



export default App;