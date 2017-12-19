


let sub = ".js";
let tnr = {
    name: 'Nag'
}

// let dynamicString = "the trainer, " + tnr.name + " , killig with " + sub;

// or

let dynamicString=`the trainer, ${'Mr.'+tnr.name} , teaching ${sub} for ${1+1} days`;

// MultiLine String

let htmTemplate='<div>' +
                   '<ul>' +
                       '<li> coffee </li>' +
                    '</ul>'+
                  '</div>';
                  
// or
let newHtmlTemplate=`

    <div>
        <ul>
            <li>${tnr.name}</li>
        </ul>
    </div>

`;

