import React from 'react';

// Here we use props to get our data from either the API or the .json file. See what Tom thinks.

// const TableRow = (props) => {
//     console.log(props);
//     console.log(props.empData.results);

//     return (
//         <div>
//             {!props.empData ? (<h4>Loading...</h4>):(
//                 props.empData.results.map(result => <td>{result.name}</td>)
//             )}
//         </div>
//     )
// }