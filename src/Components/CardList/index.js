import React from 'react'
import Card from '../Card'
import './style.css'
import AddCard from '../AddCard'

const CardList = ({ fuAddCard=f=>f ,list, onRemove=f=>f, isHide, Save=f=>f, freeId })=>
    <div hidden={isHide}>
        <div>Users:</div>
        <div className='list-cards'>
            <div>
            
                {list.map(card=>
                    
                    <Card key={card.id} {...card} 
                        onRemove={()=>onRemove(card.id)} 
                        onSave={Save}
                    />
                    )
                }
            </div>
            <AddCard freeId={freeId} onAddCard={()=>fuAddCard()}/> 
        </div>
        
    </div>

export default CardList  