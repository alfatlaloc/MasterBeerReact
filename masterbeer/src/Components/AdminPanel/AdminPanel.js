import React from 'react';

const OptionPaneItem = ({tabName}) =>(
    <li className="nav-item">
        <a className="nav-link active"
        id={`pills-${tabName}-tab`} 
        data-toggle="pill" 
        href={`#pills-${tabName}`} 
        role="tab" 
        aria-controls={`pills-${tabName}`} 
        aria-selected={ tabName === 'Botellas' ? 'true' : 'false'}>
            {tabName}
        </a>
    </li>
);

const TabItem = ({tabName}) =>(
        <div className="tab-pane fade" 
        id={`pills-${tabName}`} 
        role="tabpanel" 
        aria-labelledby={`pills-${tabName}-tab`}>
            <h2 className="tabNameMB">{tabName}</h2>
        </div>
);

class AdminP extends React.Component{
    render(){
        return(
            <div className='AdminPanel'>
                <h2>Admin Panel</h2>
                <div className='OptionPanel row'>
                    <ul className="nav nav-pills mb-6" role="tablist">
                        <OptionPaneItem tabName={'Botellas'}/>
                        <OptionPaneItem tabName={'Ingredientes'}/>
                        <OptionPaneItem tabName={'Provedores'}/>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    sdsdds
                        <TabItem tabName={'Botellas'}/>
                        <TabItem tabName={'Ingredientes'}/>
                        <TabItem tabName={'Provedores'}/>
                    </div>
                    </div>
            </div>
        );
    }
}

export default AdminP;