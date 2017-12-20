console.log('-index.js-');


/*
 how to create React element/component ?
    
    2-stepts
    ==> define component class
    ==> instantiate & render to virtual-DOM
*/

//-----------------------------------------------------------------------

// way-1 : without JSX syntax  / javascript syntax

// // step-1
// class HelloWorld extends React.Component {
//     render() {
//         let h1Ele = React.createElement('h1', null, 'Hello World!');
//         let divEle = React.createElement('div', null, h1Ele);
//         return divEle;
//     }
// }

// // step-2
// let helloWorld = React.createElement(HelloWorld, null, null);
// ReactDOM.render(helloWorld, document.getElementById('root'));

//-----------------------------------------------------------------------

// way-2 : with JSX syntax

class HelloWorld extends React.Component {
    render() {
        let ele = (
            <div>
                <h1> Hello World !</h1>
            </div>
        );
        return ele;
    }
}

let helloWorld = <HelloWorld />
ReactDOM.render(helloWorld, document.getElementById('root'));

//-----------------------------------------------------------------------




