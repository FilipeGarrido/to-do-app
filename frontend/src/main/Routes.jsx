import React from  'react'
import { Routes , Route} from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Routes>
        <Route exact path='/' element ={<Todo/>}/>
        <Route path='/about' element ={<About/>}/>
    </Routes>

)