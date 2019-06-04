import React , {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class DeashBoard extends Component {
    render(){
        return(
            <div>
                <ContentHeader title='DeashBoard' small='Versão 1.0'/>
                <Content>
                    DeashBoard
                </Content>
            </div>
        )
    }

}

export default DeashBoard