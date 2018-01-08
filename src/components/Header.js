// import React, { Component } from 'react';
import React from 'react';//重构后不需要Component

// export default class Header extends Component {
//     render() {
//
//         return (
//             <div className={"container"}>
//                 <div className={"row"}>
//                     <div className={"col-xs-11 col-xs-offset-11"}>
//                         <h1>Header</h1>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

//重构代码（无状态的组件）
const Header = (props) => {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-11 col-xs-offset-11"}>
                        <h1>Header</h1>
                    </div>
                </div>
            </div>
        );
};

export default Header;
