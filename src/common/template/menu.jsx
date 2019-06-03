import React from 'react'
import MenuItem from '../template/menuItem'
import MenuTree from '../template/menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path={'/'} icon={'dashboard'} label={'Dashboard'}/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path={'#/billingCycles'} icon={'usd'} label={'Ciclos de pagamentos'}/>
        </MenuTree>
    </ul>)