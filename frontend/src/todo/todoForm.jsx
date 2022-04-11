import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e)=>{
        switch (e.key){
            case 'Enter':
                return e.shiftKey ? props.handleSearch() : props.handleAdd()
            case 'Escape':
                return props.handleClear()
        }
    }
    return  (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' type="text" placeholder='Adicione uma Tarefa'
                        value={props.description} onKeyUp={keyHandler} onChange={props.handleChange}/>
            </Grid>
            <Grid cols = '12 3 2'>
                <IconButton style='primary' icon='plus' hide={false} onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' hide={false} onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' hide={false} onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}